import { test, expect } from '@playwright/test';
import { TEST_VALUES } from '../constants/index.constants';
import IndexPage from '../utils/pages/index.utils';

test.describe('Index Page', () => {
  let indexPage: IndexPage;

  test.beforeAll(async ({ browser }) => {
    indexPage = new IndexPage();
    await indexPage.init(browser);
  });

  test.afterAll(async () => {
    await indexPage.close();
  });

  test('should display the page title', async () => {
    await expect(indexPage.page).toHaveTitle(TEST_VALUES.PageTitle);
  });

  test('should display the description text', async () => {
    await expect(indexPage.elements.descriptionEl).toBeVisible();
    expect(await indexPage.descriptionText()).toBeGreaterThan(0);
  });

  test('should display the profile image', async () => {
    await expect(indexPage.elements.vImageEl).toBeVisible();
    expect(indexPage.imgSrc).toBeTruthy();
  });
});
