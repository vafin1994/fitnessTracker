import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {MatDialog} from '@angular/material';
import {StopTrainingComponent} from './stop-training.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  @Output() trainingExit = new EventEmitter();
  progress = 0;
  timer: number;
  isTimerWorking = false;

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
    this.startOrResumeTimer();
  }


  startOrResumeTimer() {
    this.isTimerWorking = true;
    this.timer = setInterval(() => {
      this.progress += 5;
      if (this.progress >= 100) {
        clearInterval(this.timer);
      }
    }, 1000);
  }
  onPause() {
    this.isTimerWorking = false;
    clearInterval(this.timer);
  }

  onStop() {
    clearInterval(this.timer);
   const dialogRef = this.dialog.open(StopTrainingComponent, {
     data: {
       progress: this.progress
     }
   });


   dialogRef.afterClosed().subscribe(result => {
     if (result) {
       this.trainingExit.emit();
     } else {
       this.startOrResumeTimer();
     }
   });
  }
}
