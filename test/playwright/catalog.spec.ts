import { test, expect } from "@playwright/test";

test('по адресу /catalog открывается страница "каталог"', async ({ page }) => {
  await page.goto("http://localhost:3000/hw/store/catalog");

  await expect(page.getByTestId("page-title")).toHaveText("Catalog");
});

test("по адресу /catalog отобразились все товары, которые пришли с сервера", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/hw/store/catalog");

  const products = await fetch(
    "http://localhost:3000/hw/store/api/products"
  ).then((res) => res.json());

  for (const product of products) {
    await expect(
      page.locator(`div[data-testid="${product.id}"] .ProductItem-Name`)
    ).toHaveText(product.name);
    await expect(
      page.locator(`div[data-testid="${product.id}"] .ProductItem-Name`)
    ).toBeVisible();
    await expect(
      page.locator(`div[data-testid="${product.id}"] .ProductItem-Price`)
    ).toHaveText(`$${product.price}`);
    await expect(
      page.locator(`div[data-testid="${product.id}"] .ProductItem-Price`)
    ).toBeVisible();
    await expect(
      page.locator(`div[data-testid="${product.id}"] a`)
    ).toHaveAttribute("href", `/hw/store/catalog/${product.id}`);
    await expect(
      page.locator(`div[data-testid="${product.id}"] a`)
    ).toBeVisible();
  }
});
