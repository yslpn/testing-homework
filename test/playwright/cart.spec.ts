import { test, expect } from "@playwright/test";

test('по адресу /cart открывается страница "корзины"', async ({
  page,
}) => {
  await page.goto("http://localhost:3000/hw/store/cart");

  await expect(page.getByTestId("page-title")).toHaveText("Shopping cart");
});
