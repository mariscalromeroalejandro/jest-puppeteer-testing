import FeedbackPage from '../pages/FeedbackPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import TopBar from '../pages/components/TopBar';

describe('Example', () => {
  let homePage;
  let loginPage;
  let feedbackPage;
  let topBar;

  beforeAll(async () => {
    jest.setTimeout(15000);
    homePage = new HomePage();
    loginPage = new LoginPage();
    feedbackPage = new FeedbackPage();
    topBar = new TopBar();
  });

  it('should load home page', async function () {
    await homePage.visit();
    await homePage.isNavbarDisplayed();
  });

  it('should submit feedback', async function () {
    await homePage.clickFeedbackLink();
    await feedbackPage.isFeedbackLoaded();
    await feedbackPage.submitFeedback(
      'amariscalr',
      'lalala@mail.com',
      'title',
      'short comment'
    );
  });
  it('should login to app', async function () {
    await homePage.visit();
    await topBar.isTopBarDisplayed();
    await topBar.clickOnSigninButton();
    await loginPage.isLoginFormDisplayed();
    await loginPage.login('username', 'password');
  });
});
