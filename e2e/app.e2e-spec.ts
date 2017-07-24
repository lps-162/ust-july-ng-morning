import { QuickDemoPage } from './app.po';

describe('quick-demo App', () => {
  let page: QuickDemoPage;

  beforeEach(() => {
    page = new QuickDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
