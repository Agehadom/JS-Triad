import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, Inject, Directive, Input } from '@angular/core';
import { audioFile } from '../../assets/audio/heatwaveloop.mp3'

@Directive ({
  selector: '.scenecontainer'
  })

  export class Container {
  @Input() id!: string;
}

@Component({
  selector: 'app-rhythm',
  templateUrl: './rhythm.component.html',
  styleUrls: ['./rhythm.component.css']
})
export class RhythmComponent implements OnInit {

  constructor(private elementRef:ElementRef) {

  }

  ngOnInit() {
    const container = this.elementRef.nativeElement.querySelector('.scenecontainer')

    // var rythm = new Rythm()

    // const heat = require('../../assets/audio/heatwaveloop.mp3')

    // audioFile.play()

    // container.insertAdjacentHTML('beforeend', '<div>It finally fucking works.</div>')
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
