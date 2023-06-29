import { test, expect } from "@playwright/test";

test('по адресу /contacts открывается страница "контакты"', async ({
  page,
}) => {
  await page.goto("http://localhost:3000/hw/store/contacts");

  await expect(page.getByTestId("page-title")).toHaveText("Contacts");
});


test('"контакты" визуальный тест на телефоне', async ({ page }) => {
  await page.goto("http://localhost:3000/hw/store/contacts");
  await page.setViewportSize({ width: 360, height: 640 });

  await expect(page).toHaveScreenshot({fullPage: true});
});

test('"контакты" визуальный тест на планшете', async ({ page }) => {
  await page.goto("http://localhost:3000/hw/store/contacts");
  await page.setViewportSize({ width: 768, height: 1024 });

  await expect(page).toHaveScreenshot({fullPage: true});
});

test('"контакты" визуальный тест на десктопе', async ({ page }) => {
  await page.goto("http://localhost:3000/hw/store/contacts");
  await page.setViewportSize({ width: 1920, height: 1080 });

  await expect(page).toHaveScreenshot({fullPage: true});
});