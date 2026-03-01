import { test, expect } from "./base-test";
import testData from "./data/product-data.json";

test.describe("End-to-end checkout flow", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.login("standard_user", "secret_sauce");
  });

  for (const product of testData) {
    test(`User can complete full checkout successfully flow with ${product.productName}`, async ({
      inventoryPage,
      basketPage,
      checkoutInformationPage,
      checkoutOverviewPage,
      orderCompletePage
    }) => {
      await inventoryPage.addProductToBasket(product.productName);
      await inventoryPage.goToBasket();

      await expect(basketPage.basketItems).toHaveCount(1);
      await expect(basketPage.basketItemNames.first()).toHaveText(product.productName);
      await expect(basketPage.basketItemPrices.first()).toHaveText(product.expectedPrice);

      await basketPage.proceedToCheckout();

      await checkoutInformationPage.fillCheckoutInformation("Dan", "P", "1111");
      await checkoutInformationPage.continueToOverview();

      await expect(checkoutOverviewPage.orderItemNames.first()).toHaveText(product.productName);
      await expect(checkoutOverviewPage.orderItemPrices.first()).toHaveText(product.expectedPrice);
      await expect(checkoutOverviewPage.paymentInfo).toHaveText("SauceCard #31337");
      await expect(checkoutOverviewPage.shippingInfo).toHaveText("Free Pony Express Delivery!");
      await expect(checkoutOverviewPage.subtotalLabel).toHaveText(product.expectedSubtotal);
      await expect(checkoutOverviewPage.taxLabel).toHaveText(product.expectedTax);
      await expect(checkoutOverviewPage.totalLabel).toHaveText(product.expectedTotal);

      await checkoutOverviewPage.finishOrder();

      await expect(orderCompletePage.orderCompleteHeader).toHaveText("Thank you for your order!");
      await expect(orderCompletePage.ponyExpressImage).toBeVisible();
      await expect(orderCompletePage.backToProductsButton).toBeVisible();

      await orderCompletePage.backToProducts();

      await expect(inventoryPage.inventory).toBeVisible();
      await expect(inventoryPage.shoppingBasketIcon).toHaveText("");
    });
  }
});