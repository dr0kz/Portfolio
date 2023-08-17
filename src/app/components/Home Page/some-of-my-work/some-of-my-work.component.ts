import { Component, OnInit } from '@angular/core';
import {FullScreenNavModalComponent} from "../../Dialogs/full-screen-nav-modal/full-screen-nav-modal.component";
import {MatDialog} from "@angular/material/dialog";
import {ProjectOverviewModalComponent} from "../../Dialogs/project-overview-modal/project-overview-modal.component";

@Component({
  selector: 'app-some-of-my-work',
  templateUrl: './some-of-my-work.component.html',
  styleUrls: ['./some-of-my-work.component.css']
})
export class SomeOfMyWorkComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialog.open(ProjectOverviewModalComponent, {
      panelClass: 'my-full-screen-dialog',
    });
  }

}
