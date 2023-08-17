import {Component, HostListener, OnInit} from '@angular/core';
import {distinctUntilChanged, fromEvent, map, shareReplay, startWith} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {FullScreenNavModalComponent} from "../../Dialogs/full-screen-nav-modal/full-screen-nav-modal.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  readonly windowScroll$ = fromEvent(window, 'scroll')
    .pipe(map(x => window.scrollY), startWith(0),
      distinctUntilChanged(), shareReplay(1))

  scrollYPosition = 0

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.windowScroll$.subscribe(position => this.scrollYPosition = position)
  }

  openDialog(): void {
    this.dialog.open(FullScreenNavModalComponent, {
      panelClass: 'my-full-screen-dialog',
    });
  }

}
