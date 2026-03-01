import { test as baseTest, expect } from "@playwright/test";

import LoginPage from "../main/pages/LoginPage";
import InventoryPage from "../main/pages/InventoryPage";
import CartPage from "../main/pages/CartPage";
import CheckoutInformationPage from "../main/pages/CheckoutInformationPage";
import CheckoutOverviewPage from "../main/pages/CheckoutOverviewPage";
import OrderCompletePage from "../main/pages/OrderCompletePage";
import ProductDetailsPage from "../main/pages/ProductDetailsPage";

type TestFixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  cartPage: CartPage;
  checkoutInformationPage: CheckoutInformationPage;
  checkoutOverviewPage: CheckoutOverviewPage;
  orderCompletePage: OrderCompletePage;
  productDetailsPage: ProductDetailsPage;
};

const test = baseTest.extend<TestFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },

  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },

  checkoutInformationPage: async ({ page }, use) => {
    await use(new CheckoutInformationPage(page));
  },

  checkoutOverviewPage: async ({ page }, use) => {
    await use(new CheckoutOverviewPage(page));
  },

  orderCompletePage: async ({ page }, use) => {
    await use(new OrderCompletePage(page));
  },

  productDetailsPage: async ({ page }, use) => {
    await use(new ProductDetailsPage(page));
  }
});

export { test, expect };