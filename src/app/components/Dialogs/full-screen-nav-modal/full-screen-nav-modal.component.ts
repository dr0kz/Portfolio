import {Component, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-full-screen-nav-modal',
  templateUrl: './full-screen-nav-modal.component.html',
  styleUrls: ['./full-screen-nav-modal.component.css']
})
export class FullScreenNavModalComponent {

  constructor(
    public dialogRef: MatDialogRef<FullScreenNavModalComponent>) {
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
