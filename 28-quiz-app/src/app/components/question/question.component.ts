import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from '../../models/question.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-question',
  imports: [CommonModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent {
@Input() question!: Question;
@Output() answerSelected = new EventEmitter<boolean>();

  selectOption(isCorrect: boolean) {
    this.answerSelected.emit(isCorrect);
  }
}
