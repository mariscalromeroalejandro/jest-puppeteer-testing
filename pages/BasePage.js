export default class BasePage {
  async wait(timeout) {
    return new Promise(function (resolve) {
      setTimeout(resolve, timeout);
    });
  }

  async getTitle() {
    await page.title();
  }

  getUrl() {
    page.url();
  }
}
