import { Component, OnInit } from '@angular/core';
import {interval} from "rxjs";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  myName = 'I\'m Stojanche Krstevski'
  buildName = ''
  constructor() { }

  ngOnInit(): void {
    interval(70).subscribe(d => {
      this.buildName+=this.myName.charAt(d)
    })
  }


  animateMyName() {
    return this.buildName
  }

}
