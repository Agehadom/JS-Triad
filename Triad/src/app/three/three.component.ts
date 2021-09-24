import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, AfterContentInit, AfterContentChecked, Inject, Directive, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as THREE from 'three';
import { AmbientLight, BoxBufferGeometry, Color, Mesh, MeshBasicMaterial, PCFShadowMap, PerspectiveCamera, Scene, SpotLight, sRGBEncoding, WebGLRenderer } from 'three';

// const container = document.querySelectorAll('#scenecontainer');

@Directive ({
  selector: '.scenecontainer'
  })

  export class Container {
  @Input() id!: string;
}

@Component ({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})

export class ThreeComponent implements OnInit, AfterViewInit, AfterContentInit {

  constructor(private elementRef:ElementRef) {

  }

  // @ViewChild('Container') container: ElementRef;
  // name = 'AngThree';

  // constructor (@Inject(DOCUMENT) document: Document) {
  //   const container = document.getElementById('#scenecontainer')
  // }

  ngOnInit() {

    const container = this.elementRef.nativeElement.querySelector('.scenecontainer')

    // container.insertAdjacentHTML('beforeend', '<div>It finally fucking works.</div>')
    
  }

  ngAfterContentInit() {
  
    const container = this.elementRef.nativeElement.querySelector('.scenecontainer')

    const logger = this.elementRef.nativeElement.querySelector('.logger')

    console.log("This is After the content is initiated.");
    console.log(this);
    
    const scene = new Scene();
    scene.background = new Color('grey')

    const length = 2
    const width = 2
    const depth = 2
    const geo = new BoxBufferGeometry(length,width,depth)
    const mat = new THREE.MeshStandardMaterial( { color: 0x300030, roughness: 0.9, metalness: 1 } )

    const geo2 = new BoxBufferGeometry(1,1,1)
    const mat2 = new THREE.MeshStandardMaterial( { color: 0x00FF00, roughness: 0.9, metalness: 1 } )

    const shape = new Mesh(geo, mat)
    shape.position.set(0,-1,0)
    shape.receiveShadow = true

    const shape2 = new Mesh(geo2, mat2)
    shape2.position.set(0,1.5,0)
    shape2.receiveShadow = true

    const spotLight = new SpotLight( 0xffffff )
    spotLight.position.set(0, 100, 0)
    spotLight.castShadow = true
    spotLight.shadow.mapSize.width = 1024
    spotLight.shadow.mapSize.height = 1024
    spotLight.shadow.camera.near = 1
    spotLight.shadow.camera.far = 500
    spotLight.shadow.camera.fov = 45

    const ambi = new AmbientLight( 0x0000FF, 1 )

    scene.add(shape)
    scene.add(shape2)
    // scene.add(ambi)
    scene.add(spotLight)

    const fov = 30
    const aspect = container.clientWidth / container.clientHeight
    const near = 0.1
    const far = 500

    const camera = new PerspectiveCamera(fov, aspect, near, far)
    camera.position.set(0, 0, 10)

    const renderer = new WebGLRenderer()
    renderer.setSize(window.innerWidth/1.5, window.innerHeight/1.5);
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = PCFShadowMap
    renderer.outputEncoding = sRGBEncoding
    // STUDY outputEncoding in docs

    container.appendChild( renderer.domElement )

    const anim = function () {
      requestAnimationFrame ( anim )
      shape.rotation.x += 0.005
      shape.rotation.y += 0.005
      shape2.rotation.x += 0.002
      shape2.rotation.y += 0.002

      renderer.render( scene, camera )
    }

    document.addEventListener('keydown', logKey);

    function logKey(e: { code: any; }) {
      for (let i = 0; i < 10; i++) {
        logger.innerHTML = ''
      }
      logger.textContent += ` ${e.code}`
      console.log(e.code);
      if (e.code == "KeyU") {
        logger.textContent = 'Meat'
        shape.rotation.x += 1
        mat.color.set( 0xFF0000 )
      }
      if (e.code == "KeyI") {
        logger.textContent = 'Chicken'
        shape.rotation.x += 2
        mat.color.set( 0x0000FF )
      }
      
    }

    anim()
  }

  ngAfterViewInit() {

    console.log('After View Init Printing.');

    console.log(this.elementRef.nativeElement);
    
    this.elementRef.nativeElement.children[0].children[1].children[0].style.setProperty('border-style', 'inset')

  }

  ngAfterViewChecked() {

  }

  Getcheck () {
    if (Container) {
      console.log('Button pressed!');
      console.log(this);

      if (this.elementRef.nativeElement.children[0].children[1].innerHTML = 'It finally fucking works.') {
        this.elementRef.nativeElement.children[0].children[1].innerHTML = 'Yep, you got it.'
      } else
      this.elementRef.nativeElement.children[0].children[1].innerHTML = 'Huh?'
    } 
  };
}

