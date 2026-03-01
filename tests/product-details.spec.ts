import { test, expect } from "./base-test";
import testData from "./data/product-data.json";

test.describe("Product Detail Pages", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.login("standard_user", "secret_sauce");
  });

  for (const product of testData) {
    test(`User can access individual product detail pages - ${product.productName}`, async ({ page, inventoryPage, productDetailsPage }) => {

    await inventoryPage.clickProductTitle(product.productName);

    await expect(page).toHaveURL(/\/inventory-item\.html/);
    await expect(productDetailsPage.productImage).toBeVisible();
    await expect(productDetailsPage.productName).toHaveText(product.productName);
    await expect(productDetailsPage.productDescription).toHaveText(product.description);
    await expect(productDetailsPage.productPrice).toHaveText(product.expectedPrice);
    await expect(productDetailsPage.addToCartButton).toBeVisible();

    await productDetailsPage.goBackToProducts();

    await expect(inventoryPage.inventory).toBeVisible();;
  });
  }
});