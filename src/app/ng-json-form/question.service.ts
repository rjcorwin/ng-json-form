import { Injectable } from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase } from './question-base';
import { TextboxQuestion } from './question-textbox';

@Injectable()
export class QuestionService {

  // Todo: Because we are turning this into a module, some of this needs
  // to be left up to the app, some to this module. It is being imported
  // into the app module right now which is silly.
  getConfigQuestions() {
    const config = [
      {
          interactionType: 'DropdownQuestion',
          key: 'brave',
          label: 'Super Bravery Rating',
          options: [
            {key: 'solid',  value: 'Solid'},
            {key: 'great',  value: 'Great'},
            {key: 'good',   value: 'Good'},
            {key: 'unproven', value: 'Unproven'}
          ],
          order: 3
        },
        {
          interactionType: 'TextboxQuestion',
          key: 'firstName',
          label: 'First name',
          value: 'Bombasto',
          required: true,
          order: 1
        },
        {
          interactionType: 'TextboxQuestion',
          key: 'emailAddress',
          label: 'Email',
          type: 'email',
          order: 2
        }
    ];

    const questions = [];

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

    return questions.sort((a, b) => a.order - b.order);

  }

  getQuestions() {

    const questions: QuestionBase<any>[] = [

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
