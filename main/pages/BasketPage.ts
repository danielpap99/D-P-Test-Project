import { Page, Locator } from "@playwright/test";

export default class BasketPage {
  readonly checkoutButton: Locator;
  readonly basketItems: Locator;
  readonly basketItemNames: Locator;
  readonly basketItemPrices: Locator;

  constructor(private page: Page) {
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.basketItems = page.locator(".cart_item");
    this.basketItemNames = page.locator(".inventory_item_name");
    this.basketItemPrices = page.locator(".inventory_item_price");
  }

    // #region Actions
  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
  // #endregion

}