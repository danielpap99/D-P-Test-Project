import { Page, Locator } from "@playwright/test";

export default class CheckoutOverviewPage {
  readonly finishButton: Locator;
  readonly orderItemNames: Locator;
  readonly orderItemPrices: Locator;
  readonly subtotalLabel: Locator;
  readonly taxLabel: Locator;
  readonly totalLabel: Locator;
  readonly paymentInfo: Locator;
  readonly shippingInfo: Locator;

  constructor(private page: Page) {
    this.finishButton = page.locator('[data-test="finish"]');
    this.orderItemNames = page.locator(".inventory_item_name");
    this.orderItemPrices = page.locator(".inventory_item_price");
    this.subtotalLabel = page.locator(".summary_subtotal_label");
    this.taxLabel = page.locator(".summary_tax_label");
    this.totalLabel = page.locator(".summary_total_label");
    this.paymentInfo = page.locator('[data-test="payment-info-value"]');
    this.shippingInfo = page.locator('[data-test="shipping-info-value"]');
  }

  // #region Actions
  async finishOrder() {
    await this.finishButton.click();
  }
  // #endregion
}