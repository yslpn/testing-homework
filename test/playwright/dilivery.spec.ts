import { test, expect } from "@playwright/test";

test('по адресу /delivery открывается страница "условия доставки"', async ({
  page,
}) => {
  await page.goto("http://localhost:3000/hw/store/delivery");

  await expect(page.getByTestId("page-title")).toHaveText("Delivery");
});
