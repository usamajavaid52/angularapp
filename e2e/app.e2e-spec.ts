import { WeGuideRecommendarPage } from './app.po';

describe('we-guide-recommendar App', () => {
  let page: WeGuideRecommendarPage;

  beforeEach(() => {
    page = new WeGuideRecommendarPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
