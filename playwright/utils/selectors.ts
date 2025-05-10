import type { Page } from '@playwright/test';

/**
 * Gets a locator for an element with the specified data-cy attribute
 * @param page - The Playwright page object
 * @param dataCy - The value of the data-cy attribute
 * @returns A locator for the element
 */
export function getByDataCy(page: Page, dataCy: string) {
  return page.locator(`[data-cy="${dataCy}"]`);
}
