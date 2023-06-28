import { test, expect } from "@playwright/test";

test('по адресу / открывается главная страница', async ({
  page,
}) => {
  await page.goto("http://localhost:3000/hw/store/");

  await expect(page.getByText("Welcome to Example store!")).toBeVisible();
});
