import { Component } from '@angular/core';

import { QuestionService } from './question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:  [QuestionService]
})
export class AppComponent {
  title = 'NG JSON Form Demo';
  config: any[];
  result: object;
  constructor(service: QuestionService) {
    this.config = service.getConfig();
  }

  onJsonFormSubmit(data) {
    this.result = data;
  }

}
