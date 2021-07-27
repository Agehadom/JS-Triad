import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';

const scene = new THREE.Scene();

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
