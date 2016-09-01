import { NgDemoAotPage } from './app.po';

describe('ng-demo-aot App', function() {
  let page: NgDemoAotPage;

  beforeEach(() => {
    page = new NgDemoAotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
