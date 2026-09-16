import { Page, Locator } from '@playwright/test';

export class AddToCart {
  readonly page: Page;
  readonly sauceLabsBackpack: Locator;

  constructor(page: Page) {
    this.page = page;

    this.sauceLabsBackpack = page.getByTestId(
      'add-to-cart-sauce-labs-backpack'
    );
  }

  async addProductToCart() {
    await this.sauceLabsBackpack.click();
  }
}

