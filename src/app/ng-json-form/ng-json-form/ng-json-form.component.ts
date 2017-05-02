import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from '../question-base';
import { QuestionControlService } from '../question-control.service';

@Component({
  selector: 'app-ng-json-form',
  templateUrl: './ng-json-form.component.html',
  styleUrls: ['./ng-json-form.component.css'],
  providers: [ QuestionControlService ]
})
export class NgJsonFormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
    // Todo: Something is wrong here...
    this.questions = [];
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
