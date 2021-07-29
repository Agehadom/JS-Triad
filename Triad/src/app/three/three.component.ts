import { Component, OnInit, } from '@angular/core';
import * as THREE from 'three';
import {
  BoxBufferGeometry,
  Color,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three';

const container = document.querySelectorAll('#scene-container');

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {
  name = 'AngThree';

  constructor() { }

  ngOnInit() {

    console.log("It's all Init from here!");
    

  }

  ngAfterViewInit() {

    console.log("This is After the view is initiated.");

    const scene = new Scene();
    scene.background = new Color('red')

    const length = 2
    const width = 2
    const depth = 2
    const geo = new BoxBufferGeometry(length,width,depth)
    const mat = new MeshBasicMaterial()
    const shape = new Mesh(geo, mat)

    scene.add(shape)

    const fov = 90
    const aspect = 4 / 3
    const near = 0.1
    const far = 100

    const camera = new PerspectiveCamera(fov, aspect, near, far)
    camera.position.set(0, 0, 10)

    const renderer = new WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight);
    // container.append(renderer.domElement);
  }

  Getcheck () {
    if (container == null) {
      console.log("Yeah, there's nothing inside.")
    } 
    else console.log("Container found!");
    };

}

