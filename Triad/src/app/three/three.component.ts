import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, Inject, Directive, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as THREE from 'three';
import { BoxBufferGeometry, Color, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer } from 'three';

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

export class ThreeComponent implements OnInit, AfterViewInit {

  constructor(private elementRef:ElementRef) {

  }

  // @ViewChild('Container') container: ElementRef;
  // name = 'AngThree';

  // constructor (@Inject(DOCUMENT) document: Document) {
  //   const container = document.getElementById('#scenecontainer')
  // }

  ngOnInit() {

    const container = this.elementRef.nativeElement.querySelector('.scenecontainer')

    container.insertAdjacentHTML('beforeend', '<div>It finally fucking works.</div>')
    
  }

  ngAfterViewInit() {
  
    const container = this.elementRef.nativeElement.querySelector('.scenecontainer')

    console.log("This is After the view is initiated.");
    console.log(this);
    
    const scene = new Scene();
    scene.background = new Color('blue')

    const length = 2
    const width = 2
    const depth = 2
    const geo = new BoxBufferGeometry(length,width,depth)
    const mat = new MeshBasicMaterial()
    const shape = new Mesh(geo, mat)

    scene.add(shape)

    const fov = 90
    const aspect = container.clientWidth / container.clientHeight
    const near = 0.1
    const far = 100

    const camera = new PerspectiveCamera(fov, aspect, near, far)
    camera.position.set(0, 0, 10)

    const renderer = new WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight);

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

