import { Page, Locator } from "@playwright/test";

export default class OrderCompletePage {
  readonly backToProductsButton: Locator;
  readonly orderCompleteHeader: Locator;
  readonly ponyExpressImage: Locator;

  constructor(private page: Page) {
    this.backToProductsButton = page.locator('[data-test="back-to-products"]');
    this.orderCompleteHeader = page.locator(".complete-header");
    this.ponyExpressImage = page.locator(".pony_express");
  }

  // #region Actions

  async backToProducts() {
    await this.backToProductsButton.click();
  }
  
  // #endregion
}