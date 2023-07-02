import { test, expect } from "@playwright/test";

test('на странице с подробной информацией отображаются: название товара, его описание, цена, цвет, материал и кнопка "добавить в корзину"', async ({
  page,
}) => {
  await page.goto(
    `http://localhost:3000/hw/store/catalog?bug_id=${process.env.BUG_ID ?? 0}`
  );

  await page.locator(".card-link").nth(0).click();

  const selectors = [
    ".ProductDetails-Name",
    ".ProductDetails-Description",
    ".ProductDetails-Price",
    ".ProductDetails-AddToCart",
    ".ProductDetails-Color",
    ".ProductDetails-Material",
  ];

  for (const selector of selectors) {
    await page.waitForSelector(selector);
    await expect(page.locator(selector)).toBeVisible();
    await expect(page.locator(selector)).not.toBeEmpty();
  }
});
