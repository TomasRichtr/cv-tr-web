import type { Page, Browser } from '@playwright/test';
import { TEST_URL } from '../constants';

export class PageUtils {
  protected _page: Page | null = null;

  get page(): Page {
    if (!this._page) throw new Error('Page is not initialized');
    return this._page;
  }

  getByDataCy(dataCy: string) {
    return this.page.locator(`[data-cy="${dataCy}"]`);
  }

  async init(browser: Browser, url: string = TEST_URL) {
    await this.initialize(browser, url);
  }

  protected async initialize(browser: Browser, url: string = TEST_URL): Promise<void> {
    this._page = await browser.newPage();
    await this._page.goto(url);
  }

  async close(): Promise<void> {
    if (!this._page) throw new Error('Page is not initialized');
    await this._page.close();
    this._page = null;
  }
}
