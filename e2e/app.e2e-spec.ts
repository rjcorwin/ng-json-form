import { NgjfExamplePage } from './app.po';

describe('ngjf-example App', () => {
  let page: NgjfExamplePage;

  beforeEach(() => {
    page = new NgjfExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
