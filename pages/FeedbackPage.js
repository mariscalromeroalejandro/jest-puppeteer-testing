import BasePage from './BasePage';

export default class FeedbackPage extends BasePage {
  async visit() {
    await page.goto('http://zero.webappsecurity.com/feedback.html');
  }

  async isFeedbackLoaded() {
    await page.waitForSelector('#feedback-title');
    await page.waitForSelector('#name');
    await page.waitForSelector('#email');
    await page.waitForSelector('#subject');
  }

  async submitFeedback(name, email, subject, comment) {
    await page.type('#name', name);
    await page.type('#email', email);
    await page.type('#subject', subject);
    await page.type('#comment', comment);
    await page.click('input[type="submit"]');
  }
}
