import { test, expect } from '@playwright/test';
import { getByDataCy } from '../utils/selectors';
import { TEST_URL } from '../constants';
import { Selectors, TEST_VALUES } from '../constants/index.constants';

test.describe('Index Page', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the index page before each test
    await page.goto(TEST_URL);
  });

  test('should display the page title', async ({ page }) => {
    // Check that the page has the correct title
    await expect(page).toHaveTitle(TEST_VALUES.PageTitle);
  });

  test('should display the description text', async ({ page }) => {
    // Check that the description text is visible
    const descriptionElement = getByDataCy(page, Selectors.DESCRIPTION);
    await expect(descriptionElement).toBeVisible();

    // Verify that the description contains some text
    const descriptionText = await descriptionElement.textContent();
    expect(descriptionText?.trim().length).toBeGreaterThan(0);
  });

  test('should display the profile image', async ({ page }) => {
    // Check that the image is visible
    const vImageElement = getByDataCy(page, Selectors.PROFILE_IMAGE);
    await expect(vImageElement).toBeVisible();

    // Verify that the image has the correct attributes
    const imgSrc = await vImageElement.locator('img').first().getAttribute('src');
    expect(imgSrc).toBeTruthy();
  });
});
