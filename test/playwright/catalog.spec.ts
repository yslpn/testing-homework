import { test, expect } from "@playwright/test";

test('по адресу /catalog открывается страница "каталог"', async ({
  page,
}) => {
  await page.goto("http://localhost:3000/hw/store/catalog");

  await expect(page.getByTestId("page-title")).toHaveText("Catalog");
});
