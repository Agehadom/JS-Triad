import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ThreeComponent } from './three/three.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { RhythmComponent } from './rhythm/rhythm.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ThreeComponent,
    RhythmComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'cummies', component: MainComponent},
      {path: 'threetest', component: ThreeComponent},
      {path: 'rhythm', component: RhythmComponent}
    ]),

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
