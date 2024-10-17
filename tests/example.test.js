import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import TopBar from '../pages/components/TopBar';

describe('Example', () => {
  let homepage;
  let loginPage;
  let topBar;

  beforeAll(async () => {
    jest.setTimeout(15000);
    homepage = new HomePage();
    loginPage = new LoginPage();
    topBar = new TopBar();
  });

  it('homepage should work', async () => {
    await homepage.visit();
  });

  it('navbar should be displayed', async () => {
    await homepage.isNavbarDisplayed();
    await topBar.isTopBarDisplayed();
  });

  it('should login', async () => {
    await loginPage.visit();
    await loginPage.isLoginFormDisplayed();
    await loginPage.login('username', 'password');
  });
});
