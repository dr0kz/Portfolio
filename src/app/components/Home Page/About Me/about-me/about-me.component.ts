import {Component, HostListener} from '@angular/core';
import {Scroll} from "@angular/router";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {

  @HostListener("window:scroll", []) onWindowScroll() {
    // do some stuff here when the window is scrolled
    const verticalOffset = window.scrollY
      if(verticalOffset >= 300){
        document.getElementsByClassName('image-of-me').item(0)?.classList.add('show-image')
      }
    console.log(verticalOffset)

  }
}
