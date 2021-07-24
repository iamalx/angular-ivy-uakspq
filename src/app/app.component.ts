import { Component, VERSION } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormControl,
  FormGroup
} from '@angular/forms';

interface Member {
  firstName: string;
  lastName: string;
  jobTitle: string;
  team: string;
  status: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public screeningForm: FormGroup;
  // memberModel: Member;
  memberForm: FormGroup;
  memberDetails: Member = {
    firstName: '',
    lastName: '',
    jobTitle: '',
    team: '',
    status: ''
  };
  optionValue: any = {
    teamName: ''
  };
  name = 'Angular ' + VERSION.major;
  values;

  constructor(public fb: FormBuilder) {
    this.screeningForm = this.fb.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      team: new FormControl('', Validators.required),
      jobTitle: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    this.values = this.screeningForm.value;
  }
}
