import { Page, Locator } from "@playwright/test";

export default class CartPage {
  readonly checkoutButton: Locator;
  readonly cartItems: Locator;
  readonly cartItemNames: Locator;
  readonly cartItemPrices: Locator;

  constructor(private page: Page) {
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.cartItems = page.locator(".cart_item");
    this.cartItemNames = page.locator(".inventory_item_name");
    this.cartItemPrices = page.locator(".inventory_item_price");
  }

    // #region Actions
  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
  // #endregion

}