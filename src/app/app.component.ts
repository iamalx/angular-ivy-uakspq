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

      numbness: new FormControl('', Validators.required),
      hot: new FormControl('', Validators.required),
      relax: new FormControl('', Validators.required),
      fear: new FormControl('', Validators.required),
      lightheaded: new FormControl('', Validators.required),
      hrRacing: new FormControl('', Validators.required),
      unsteady: new FormControl('', Validators.required),
      choking: new FormControl('', Validators.required),
      afraid: new FormControl('', Validators.required),
      nervous: new FormControl('', Validators.required),
      hands: new FormControl('', Validators.required),
      shaky: new FormControl('', Validators.required),
      dying: new FormControl('', Validators.required),
      control: new FormControl('', Validators.required),
      breathing: new FormControl('', Validators.required),
      scared: new FormControl('', Validators.required),
      indigestion: new FormControl('', Validators.required),
      flushed: new FormControl('', Validators.required),
      faint: new FormControl('', Validators.required),
      sweats: new FormControl('', Validators.required),

      sadness: new FormControl('', Validators.required),
      Pessimism: new FormControl('', Validators.required),
      failure: new FormControl('', Validators.required),
      pleasure: new FormControl('', Validators.required),
      guilty: new FormControl('', Validators.required),
      dislike: new FormControl('', Validators.required),
      critic: new FormControl('', Validators.required),
      suicidal: new FormControl('', Validators.required),
      crying: new FormControl('', Validators.required),
      agitation: new FormControl('', Validators.required),
      interest: new FormControl('', Validators.required),
      indecisive: new FormControl('', Validators.required),
      worth: new FormControl('', Validators.required),
      energy: new FormControl('', Validators.required),
      irritability: new FormControl('', Validators.required),
      concentrate: new FormControl('', Validators.required),
      tire: new FormControl('', Validators.required),
      sex: new FormControl('', Validators.required),
      sleeping: new FormControl('', Validators.required),
      appetite: new FormControl('', Validators.required)
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
    'Not at all',
    "Mildly, but it didn't bother me much",
    "Moderately — it wasn't pleasant at times",
    'Severely — it bothered me a lot'
  ];
  // { answer: 0, value: 0 },
  // { answer: 1, value: 1 },
  // { answer: 2, value: 2 },
  // { answer: 3, value: 3 }

  thirdQuestions = [
    {
      question: 'Sadness',
      answers: [
        'I do not feel sad',
        'I feel sad much of the time',
        'I am sad all of the time',
        "I am so sad or unhappy that I can't stand it"
      ],
      group: 'sadness'
    },
    {
      question: 'Pessimism ',
      answers: [
        'I do not feel sad',
        'I feel sad much of the time',
        'I am sad all of the time',
        "I am so sad or unhappy that I can't stand it"
      ],
      group: 'Pessimism'
    },
    {
      question: 'Past failure',
      answers: [
        'I do not feel like a failure',
        'I have failed more than I should have',
        'As I look back, I see a lot of failures',
        'I feel like I am a total failure as a person'
      ],
      group: 'failure'
    },
    {
      question: 'Loss of Pleasure',
      answers: [
        'I get as much pleasure as I ever did from the things I enjoy',
        "I don't enjoy things as much as I used to",
        'I get very little pleasure from the things I used to enjoy',
        "I can't get any pleasure from the things I used to enjoy"
      ],
      group: 'pleasure'
    },
    {
      question: 'Guilty Feelings',
      answers: [
        "I don't feel particularly guilty",
        'I feel guilty over many things I have done or should have done',
        'I feel guilty most of the time',
        'I feel guilty all of the time'
      ],
      group: 'guilty'
    },
    {
      question: 'Self-Dislike',
      answers: [
        'I feel the same about myself as ever',
        'I have lost confidence in myself',
        'I am disappointed in myself',
        'I dislike myself'
      ],
      group: 'dislike'
    },
    {
      question: 'Self-Criticalness',
      answers: [
        "I don't criticize or blame myself more than usual",
        'I am more critical of myself than I used to be',
        'I criticize myself for all of my faults',
        'I blame myself for everything bad that happens'
      ],
      group: 'critic'
    },
    {
      question: 'Suicidal Thoughts or Wishes',
      answers: [
        "I don't have any thoughts of killing myself",
        'I have thoughts of killing myself, but I would not carry them out',
        'I would like to kill myself',
        'I would kill myself if I had the chance'
      ],
      group: 'suicidal'
    },
    {
      question: 'Crying',
      answers: [
        "I don't cry anymore than I used to",
        'I cry more than I used to',
        'I cry over every little thing',
        "I feel like crying, but I can't"
      ],
      group: 'crying'
    },
    {
      question: 'Agitation',
      answers: [
        'I am no more restless or wound up than usual',
        'I feel more restless or wound up than usual',
        'I am so restless or agitated, it is hard to stay still',
        'I am so restless or agitated that I have to keep moving or doing something'
      ],
      group: 'agitation'
    },
    {
      question: 'Loss of Interest',
      answers: [
        'I have not lost interest in other people or activities',
        'I am less interested in other people or things than before',
        'I have lost most of my interest in other people or thing',
        'It is hard to get interested in anything'
      ],
      group: 'interest'
    },
    {
      question: 'Indecisiveness',
      answers: [
        'I make decisions about as well as ever',
        'I find it more difficult to make decisions than usual',
        'I have much greater difficulty in making decisions than I used to',
        'I have trouble making any decisions'
      ],
      group: 'indecisive'
    },
    {
      question: 'Worthlessness',
      answers: [
        'I do not feel I am worthless',
        "I don't consider myself as worthwhile and useful as I used to",
        'I feel more worthless as compared to others',
        'I feel utterly worthless'
      ],
      group: 'worth'
    },
    {
      question: 'Loss of Energy',
      answers: [
        'I have as much energy as ever',
        'I have less energy than I used to have',
        "I don't have enough energy to do very much",
        "I don't have enough energy to do anything"
      ],
      group: 'energy'
    },
    {
      question: 'Irritability',
      answers: [
        'I am not more irritable than usual',
        'I am more irritable than usual',
        'I am much more irritable than usual',
        'I am irritable all the time'
      ],
      group: 'irritability'
    },
    {
      question: 'Concentration Difficulty',
      answers: [
        'I can concentrate as well as ever',
        "I can't concentrate as well as usual",
        "It's hard to keep my mind on anything for very long",
        "I find I can't concentrate on anything"
      ],
      group: 'concentrate'
    },
    {
      question: 'Tiredness or Fatigue ',
      answers: [
        'I am no more tired or fatigued than usual',
        'I get more tired or fatigued more easily than usual',
        'I am too tired or fatigued to do a lot of the things I used to do',
        'I am too tired or fatigued to do most of the things I used to do'
      ],
      group: 'tire'
    },
    {
      question: 'Loss of Interest in Sex',
      answers: [
        'I have not noticed any recent change in my interest in sex',
        'I am less interested in sex than I used to be',
        'I am much less interested in sex now',
        'I have lost interest in sex completely'
      ],
      group: 'sex'
    }
  ];

  thirdQuestSpecial = [
    {
      question: 'Changes in Sleeping Pattern',
      answers: [
        {
          answer: 'I have not experienced any change in my sleeping',
          value: 0
        },
        { answer: 'I sleep somewhat more than usual', value: 1 },
        { answer: 'I sleep somewhat less than usual', value: 1 },
        { answer: 'I sleep a lot more than usual', value: 2 },
        { answer: 'I sleep a lot less than usual', value: 2 },
        { answer: 'I sleep most of the day', value: 2 },
        {
          answer: "I wake up 1-2 hours early and can't get back to sleep",
          value: 3
        }
      ],
      group: 'sleeping'
    },
    {
      question: 'Change in appetite',
      answers: [
        {
          answer: 'I have not experienced any change in my appetite',
          value: 0
        },
        { answer: 'My appetite is somewhat less than usual', value: 0 },
        { answer: 'My appetite is somewhat greater than usual', value: 1 },
        { answer: 'My appetite is much less than before', value: 1 },
        { answer: 'My appetite is much greater than usual', value: 2 },
        { answer: 'I have no appetite at all', value: 3 },
        { answer: 'I crave food all the time', value: 3 }
      ],
      group: 'appetite'
    }
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
      group: 'relax'
    },
    {
      question: 'Fear of worst happening',
      answers: this.SecondQuestanswers,
      group: 'fear'
    },
    {
      question: 'Dizzy or lightheaded',
      answers: this.SecondQuestanswers,
      group: 'lightheaded'
    },
    {
      question: 'Heart pounding / racing',
      answers: this.SecondQuestanswers,
      group: 'hrRacing'
    },
    {
      question: 'Unsteady',
      answers: this.SecondQuestanswers,
      group: 'unsteady'
    },
    {
      question: 'Terrified or afraid',
      answers: this.SecondQuestanswers,
      group: 'afraid'
    },
    {
      question: 'Feeling of choking',
      answers: this.SecondQuestanswers,
      group: 'choking'
    },
    {
      question: 'Nervous',
      answers: this.SecondQuestanswers,
      group: 'nervous'
    },
    {
      question: 'Hands trembling',
      answers: this.SecondQuestanswers,
      group: 'hands'
    },
    {
      question: 'Shaky / unsteady',
      answers: this.SecondQuestanswers,
      group: 'shaky'
    },
    {
      question: 'Fear of losing control',
      answers: this.SecondQuestanswers,
      group: 'control'
    },
    {
      question: 'Difficulty in breathing',
      answers: this.SecondQuestanswers,
      group: 'breathing'
    },
    {
      question: 'Fear of dying',
      answers: this.SecondQuestanswers,
      group: 'dying'
    },
    {
      question: 'Scared',
      answers: this.SecondQuestanswers,
      group: 'scared'
    },
    {
      question: 'Indigestion',
      answers: this.SecondQuestanswers,
      group: 'indigestion'
    },
    {
      question: 'Faint / lightheaded',
      answers: this.SecondQuestanswers,
      group: 'faint'
    },
    {
      question: 'Face flushed',
      answers: this.SecondQuestanswers,
      group: 'flushed'
    },
    {
      question: 'Hot / cold sweats',
      answers: this.SecondQuestanswers,
      group: 'sweats'
    }
    // ...this.thirdQuestions
  ];

  onSubmit() {
    this.values = this.screeningForm.value;
    console.log(this.values);
    const firstValues = [
      this.values.age,
      this.values.anxiety,
      this.values.english,
      this.values.heart,
      this.values.meds,
      this.values.psycho,
      this.values.drugs
    ];
    const firstValuesSum = firstValues.reduce(
      (accum, elem) => accum + Number(elem),
      0
    );
    console.log(firstValuesSum);

    const SecondValues = [
      this.values.age,
      this.values.anxiety,
      this.values.english,
      this.values.heart,
      this.values.meds,
      this.values.psycho,
      this.values.drugs,
       this.values.age,
      this.values.anxiety,
      this.values.english,
      this.values.heart,
      this.values.meds,
      this.values.psycho,
    ];

  }
}

// https://stackblitz.com/edit/angular-ivy-uakspq?file=src/app/app.component.ts
