import { Component, VERSION } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormControl,
  FormGroup
} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public fb: FormBuilder) {
    this.screeningForm = this.fb.group({
      age: new FormControl('', Validators.required),
      anxiety: new FormControl('', Validators.required),
      english: new FormControl('', Validators.required),
      heart: new FormControl('', Validators.required),
      meds: new FormControl('', Validators.required),
      psycho: new FormControl('', Validators.required),
      drugs: new FormControl('', Validators.required),
      sweeting: new FormControl('', Validators.required),
      numbness: new FormControl('', Validators.required),
      hot: new FormControl('', Validators.required)
    });
  }

  public screeningForm: FormGroup;
  // memberModel: Member;
  memberForm: FormGroup;

  optionValue: any = {
    teamName: ''
  };
  name = 'Angular ' + VERSION.major;
  values;

  firstScreeningQestions = [
    { question: 'Are you bellow 18 or above 65 years old?', group: 'age' },
    {
      question:
        'Do you have a history of mental illness besides anxiety or depression?',
      group: 'anxiety'
    },
    {
      question:
        'Do you have an INABILITY to speak or understand English fluently?',
      group: 'english'
    },
    {
      question: 'Do you have a history of heart condition(s)?',
      group: 'heart'
    },
    {
      question: 'Are you currently using psychiatric medication?',
      group: 'meds'
    },
    {
      question: 'Are you currently using psychotherapy or stimulation therapy?',
      group: 'psycho'
    },
    { question: 'Are you currently using recreational drugs?', group: 'drugs' }
  ];

  SecondQuestanswers = [
    { answer: 0, value: 0 },
    { answer: 1, value: 1 },
    { answer: 2, value: 2 },
    { answer: 3, value: 3 }
  ];

  secondQuestionnaire = [
    {
      question: 'Numbness or tingling',
      answers: this.SecondQuestanswers,
      group: 'numbness'
    },
    {
      question: 'Feeling hot',
      answers: this.SecondQuestanswers,
      group: 'hot'
    },
    {
      question: 'Unable to relax',
      answers: this.SecondQuestanswers,
      group: 'numbness'
    },
    {
      question: 'Fear of worst happening',
      answers: this.SecondQuestanswers,
      group: 'numbness'
    },
    {
      question: 'Dizzy or lightheaded',
      answers: this.SecondQuestanswers,
      group: 'numbness'
    },
    {
      question: 'Heart pounding / racing',
      answers: this.SecondQuestanswers,
      group: 'numbness'
    },
    {
      question: 'Unsteady',
      answers: this.SecondQuestanswers,
      group: 'numbness'
    },
    {
      question: 'Terrified or afraid',
      answers: this.SecondQuestanswers,
      group: 'numbness'
    },
    {
      question: 'Feeling of choking',
      answers: this.SecondQuestanswers,
      group: 'numbness'
    },
    {
      question: 'Nervous',
      answers: this.SecondQuestanswers,
      group: 'numbness'
    },
    {
      question: 'Hands trembling',
      answers: this.SecondQuestanswers,
      group: 'numbness'
    },
    {
      question: 'Shaky / unsteady',
      answers: this.SecondQuestanswers,
      group: 'numbness'
    },
    {
      question: 'Fear of losing control',
      answers: this.SecondQuestanswers,
      group: 'numbness'
    },
    {
      question: 'Difficulty in breathing',
      answers: this.SecondQuestanswers,
      group: 'numbness'
    },
    {
      question: 'Fear of dying',
      answers: this.SecondQuestanswers,
      group: 'numbness'
    },
    {
      question: 'Scared',
      answers: this.SecondQuestanswers,
      group: 'numbness'
    },
    {
      question: 'Indigestion',
      answers: this.SecondQuestanswers,
      group: 'numbness'
    },
    {
      question: 'Faint / lightheaded',
      answers: this.SecondQuestanswers,
      group: 'numbness'
    },
    {
      question: 'Face flushed',
      answers: this.SecondQuestanswers,
      group: 'numbness'
    },
    {
      question: 'Hot / cold sweats',
      answers: this.SecondQuestanswers,
      group: 'numbness'
    }
  ];

  onSubmit() {
    this.values = this.screeningForm.value;
    console.log(this.values);
  }
}

// https://stackblitz.com/edit/angular-ivy-uakspq?file=src/app/app.component.ts
