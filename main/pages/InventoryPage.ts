import { Page, Locator } from "@playwright/test";

export default class InventoryPage {
  readonly inventory: Locator;
  readonly shoppingBasketIcon: Locator;
  readonly sortContainer: Locator;
  readonly inventoryItemNames: Locator;

  constructor(private page: Page) {
    this.inventory = page.locator('[data-test="inventory-container"]');
    this.shoppingBasketIcon = page.locator('[data-test="shopping-cart-link"]');
    this.sortContainer = page.locator('[data-test="product-sort-container"]');
    this.inventoryItemNames = page.locator('[data-test="inventory-item-name"]');
  }

    // #region Actions
  async addProductToBasket(productName: string) {
    const addToBasketButton = this.page.locator(`[data-test="add-to-cart-${productName.toLowerCase().replaceAll(" ", "-")}"]`);
    await addToBasketButton.click();
  }

  async goToBasket() {
    await this.shoppingBasketIcon.click();
  }

  async clickProductTitle(productName: string) {
    const product = this.inventoryItemNames.filter({hasText: productName});
    await product.first().click();
  }
  // #endregion
}



