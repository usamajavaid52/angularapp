import { browser, by, element } from 'protractor';

export class WeGuideRecommendarPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
