import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ThreeComponent } from './three/three.component';
import { ThreeCoreModule } from '@angular-three/core';
import { ThreeBoxBufferGeometryModule } from '@angular-three/core/geometries';
import { ThreeMeshBasicMaterialModule } from '@angular-three/core/materials';
import { ThreeMeshModule } from '@angular-three/core/meshes';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ThreeComponent
  ],
  imports: [
    BrowserModule,
    ThreeCoreModule,
    ThreeMeshModule,
    ThreeBoxBufferGeometryModule,
    ThreeMeshBasicMaterialModule,

    RouterModule.forRoot([
      {path: 'cummies', component: MainComponent},
      {path: 'threetest', component: ThreeComponent},
    ]),
    
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
