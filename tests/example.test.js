import HomePage from '../pages/HomePage';
import TopBar from '../pages/components/TopBar';

describe('Example', () => {
  let homepage;
  let topBar;

  beforeAll(async () => {
    jest.setTimeout(15000);
    homepage = new HomePage();
    topBar = new TopBar();
  });

  it('homepage should work', async () => {
    await homepage.visit();
  });

  it('navbar should be displayed', async () => {
    await homepage.isNavbarDisplayed();
    await topBar.isTopBarDisplayed();
  });
});
