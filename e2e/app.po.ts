import { browser, element, by } from 'protractor';
// browser.ignoreSynchronization = true;
export class MoviesPage {
  navigateTo() {
    return browser.get('/movies');
  }

  getParagraphText() {
    return element(by.css('h1')).getText();
  }
}
