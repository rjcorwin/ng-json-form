import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from './question-base';
import { DropdownQuestion } from './question-dropdown';
import { TextboxQuestion } from './question-textbox';

@Injectable()
export class QuestionControlService {
  constructor() { }

  toFormGroup(config: QuestionBase<any>[] ) {

    let questions = [];

    for (const interaction of config) {
      switch (interaction.interactionType) {
        case 'DropdownQuestion':
          questions.push(new DropdownQuestion(interaction));
          break;
        case 'TextboxQuestion':
          questions.push(new TextboxQuestion(interaction));
          break;
      }
    }

    questions = questions.sort((a, b) => a.order - b.order);
    let group: any = {};

    questions.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                                              : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
}
