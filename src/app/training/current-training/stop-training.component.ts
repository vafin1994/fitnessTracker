import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-stop-training',
  template: `<h1 mat-dialog-title>Are you sure that you want to stop you exercise?</h1>
  <mat-dialog-content> You already got {{passedData.progress}}%</mat-dialog-content>
  <mat-dialog-actions fxLayoutAlign="center">
    <button color="warn" mat-button [mat-dialog-close]="true"> Yes</button>
    <button color="primary" mat-button [mat-dialog-close]="false"> No</button>
  </mat-dialog-actions>`
})

export class StopTrainingComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public passedData: any) {
  }
}
