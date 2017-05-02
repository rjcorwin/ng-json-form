import { Injectable } from '@angular/core';

@Injectable()
export class QuestionService {

  constructor() { }

  getConfig() {
    const questions = [
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

    return questions.sort((a, b) => a.order - b.order);

  }

}
