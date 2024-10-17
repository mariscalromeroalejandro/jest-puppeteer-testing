import FeedbackPage from '../pages/FeedbackPage';
import HomePage from '../pages/HomePage';
// import LoginPage from '../pages/LoginPage';
import TopBar from '../pages/components/TopBar';

describe('Example', () => {
  let homepage;
  // let loginPage;
  let feedbackPage;
  let topBar;

  beforeAll(async () => {
    jest.setTimeout(15000);
    homepage = new HomePage();
    // loginPage = new LoginPage();
    feedbackPage = new FeedbackPage();
    topBar = new TopBar();
  });

  it('homepage should work', async () => {
    await homepage.visit();
  });

  it('navbar should be displayed', async () => {
    await homepage.isNavbarDisplayed();
    await topBar.isTopBarDisplayed();
  });

  // it('should login', async () => {
  //   await loginPage.visit();
  //   await loginPage.isLoginFormDisplayed();
  //   await loginPage.login('username', 'password');
  // });

  it('should send feedback', async () => {
    await feedbackPage.visit();
    await feedbackPage.isFeedbackLoaded();
    await feedbackPage.submitFeedback(
      'Alex',
      'lalala@gmail.com',
      'subject',
      'short comment'
    );
  });
});
