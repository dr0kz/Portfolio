import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-project-overview-modal',
  templateUrl: './project-overview-modal.component.html',
  styleUrls: ['./project-overview-modal.component.css']
})
export class ProjectOverviewModalComponent{

  constructor(
    public dialogRef: MatDialogRef<ProjectOverviewModalComponent>) {
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
