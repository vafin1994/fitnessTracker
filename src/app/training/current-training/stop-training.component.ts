import {Component, Inject} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA} from '@angular/material';

@Component({
  selector: 'app-stop-straining',
  template: `<h1 mat-dialog-title>Are you sure that you want to stop you exercise?</h1>
              <p> You will lost all your {{passedData.progress}}% progress , but you can start this exercise again later</p>
              <mat-dialog-actions fxLayout fxLayoutAlign="center center">
                <button color="warn" mat-button (click)="onAnswer('Yes')"> Yes</button>
                <button color="primary" mat-button (click)="onAnswer('No')"> No</button>
              </mat-dialog-actions>`
})

export class StopTrainingComponent {
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public passedData: any) {}

  onAnswer(answer: string) {
    if (answer === 'Yes') {
      console.log('answer');
    } else if (answer === 'No') {
      console.log('answer');
    }
  }
}
