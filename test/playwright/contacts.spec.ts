import { test, expect } from "@playwright/test";

test('по адресу /contacts открывается страница "о проекте"', async ({
  page,
}) => {
  await page.goto("http://localhost:3000/hw/store/contacts");

  await expect(page.getByTestId("page-title")).toHaveText("Contacts");
});
