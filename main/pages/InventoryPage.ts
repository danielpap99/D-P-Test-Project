import { Page, Locator } from "@playwright/test";

export default class InventoryPage {
  readonly inventory: Locator;
  readonly shoppingCartIcon: Locator;
  readonly sortContainer: Locator;
  readonly inventoryItemNames: Locator;

  constructor(private page: Page) {
    this.inventory = page.locator('[data-test="inventory-container"]');
    this.shoppingCartIcon = page.locator('[data-test="shopping-cart-link"]');
    this.sortContainer = page.locator('[data-test="product-sort-container"]');
    this.inventoryItemNames = page.locator('[data-test="inventory-item-name"]');
  }

    // #region Actions
  async addProductToCart(productName: string) {
    const addToCartButton = this.page.locator(`[data-test="add-to-cart-${productName.toLowerCase().replaceAll(" ", "-")}"]`);
    await addToCartButton.click();
  }

  async goToCart() {
    await this.shoppingCartIcon.click();
  }

  async clickProductTitle(productName: string) {
    const product = this.inventoryItemNames.filter({hasText: productName});
    await product.first().click();
  }
  // #endregion
}



