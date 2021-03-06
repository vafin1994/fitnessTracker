import {Exercise} from './exercise.model';
import {Subject} from 'rxjs';

export class TrainingService {
  private availableExercises: Exercise[] = [
    { id: 'crunches', name: 'Crunches', duration: 30, calories: 8},
    { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15},
    { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18},
    { id: 'burpees', name: 'Burpees', duration: 60, calories: 8}
  ];
  exerciseChanged = new Subject<Exercise>();
  private runningExercise: Exercise;

  getAvailibleExercises() {
    return this.availableExercises.slice();
  }
  startExercise(selectedId: string) {
    this.runningExercise = this.availableExercises.find((exercise => exercise.id === selectedId));
    this.exerciseChanged.next({...this.runningExercise});
  }
}
