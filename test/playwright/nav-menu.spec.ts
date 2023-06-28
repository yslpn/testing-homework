import { test, expect, devices } from "@playwright/test";

test('на ширине меньше 576px навигационное меню должно скрываться за "гамбургер"', async ({
  page,
}) => {
  await page.setViewportSize({ width: 575, height: 575 });

  await page.goto("http://localhost:3000/hw/store/");

  await expect(page.locator(".navbar-toggler")).toBeVisible();
  await expect(page.locator(".navbar-nav")).toBeHidden();

  await page.setViewportSize({ width: 425, height: 425 });

  await expect(page.locator(".navbar-toggler")).toBeVisible();
  await expect(page.locator(".navbar-nav")).toBeHidden();

  await page.setViewportSize({ width: 375, height: 375 });

  await expect(page.locator(".navbar-toggler")).toBeVisible();
  await expect(page.locator(".navbar-nav")).toBeHidden();

  await page.setViewportSize({ width: 320, height: 320 });

  await expect(page.locator(".navbar-toggler")).toBeVisible();
  await expect(page.locator(".navbar-nav")).toBeHidden();
});

test('на ширине 576px или больше появляется навигационное меню вместо "гамбургера"', async ({
  page,
}) => {
  await page.setViewportSize({ width: 576, height: 576 });
  await page.goto("http://localhost:3000/hw/store/");

  await expect(page.locator(".navbar-toggler")).toBeHidden();
  await expect(page.locator(".navbar-nav")).toBeVisible();

  await page.setViewportSize({ width: 768, height: 768 });

  await expect(page.locator(".navbar-toggler")).toBeHidden();
  await expect(page.locator(".navbar-nav")).toBeVisible();

  await page.setViewportSize({ width: 1024, height: 1024 });

  await expect(page.locator(".navbar-toggler")).toBeHidden();
  await expect(page.locator(".navbar-nav")).toBeVisible();

  await page.setViewportSize({ width: 1440, height: 1440 });

  await expect(page.locator(".navbar-toggler")).toBeHidden();
  await expect(page.locator(".navbar-nav")).toBeVisible();
});

test('при выборе элемента из меню "гамбургера", меню должно закрываться', async ({
  page,
}) => {
  await page.setViewportSize({ width: 575, height: 575 });
  await page.goto("http://localhost:3000/hw/store/");
  await page.locator(".navbar-toggler").click();

  await expect(page.locator(".navbar-nav")).toBeVisible();

  await page.locator(".nav-link").nth(1).click();

  await expect(page.locator(".navbar-nav")).toBeHidden();
});
