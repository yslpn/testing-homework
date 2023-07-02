import { test, expect } from "@playwright/test";

test('по адресу /delivery открывается страница "условия доставки"', async ({
  page,
}) => {
  await page.goto(
    `http://localhost:3000/hw/store/delivery?bug_id=${process.env.BUG_ID ?? 0}`
  );

  await expect(page.getByTestId("page-title")).toHaveText("Delivery");
});

test('"условия доставки" визуальный тест на телефоне', async ({ page }) => {
  await page.goto(
    `http://localhost:3000/hw/store/delivery?bug_id=${process.env.BUG_ID ?? 0}`
  );
  await page.setViewportSize({ width: 360, height: 640 });

  await expect(page).toHaveScreenshot({ fullPage: true });
});

test('"условия доставки" визуальный тест на планшете', async ({ page }) => {
  await page.goto(
    `http://localhost:3000/hw/store/delivery?bug_id=${process.env.BUG_ID ?? 0}`
  );
  await page.setViewportSize({ width: 768, height: 1024 });

  await expect(page).toHaveScreenshot({ fullPage: true });
});

test('"условия доставки" визуальный тест на десктопе', async ({ page }) => {
  await page.goto(`http://localhost:3000/hw/store/delivery`);
  await page.setViewportSize({ width: 1920, height: 1080 });

  await expect(page).toHaveScreenshot({ fullPage: true });
});
