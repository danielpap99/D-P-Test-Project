import { Page, Locator } from "@playwright/test";

export default class ProductDetailsPage {
    readonly productImage: Locator;
    readonly productName: Locator;
    readonly productDescription: Locator;
    readonly productPrice: Locator
    readonly addToCartButton: Locator;
    readonly backToProductsButton: Locator;

  constructor(private page: Page) {
    this.productImage = page.locator('[data-test*="item-"][data-test*="-img"]');
    this.productName = page.locator('[data-test="inventory-item-name"]');
    this.productDescription = page.locator('[data-test="inventory-item-desc"]');
    this.productPrice = page.locator('[data-test="inventory-item-price"]');
    this.addToCartButton = page.locator('[data-test="add-to-cart"]');
    this.backToProductsButton = page.locator('[data-test="back-to-products"]');
  }

  // #region Actions
  async goBackToProducts() {
    await this.backToProductsButton.click();
  }
  // #endregion
}