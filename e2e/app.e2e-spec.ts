import { DribbbleDemoPage } from './app.po';

describe('dribbble-demo App', function() {
  let page: DribbbleDemoPage;

  beforeEach(() => {
    page = new DribbbleDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
