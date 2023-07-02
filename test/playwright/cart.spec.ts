import { test, expect } from "@playwright/test";

test('по адресу /cart открывается страница "корзины"', async ({ page }) => {
  await page.goto(
    `http://localhost:3000/hw/store/cart?bug_id=${process.env.BUG_ID ?? 0}`
  );

  await expect(page.getByTestId("page-title")).toHaveText("Shopping cart");
});

test.describe("проверка функциональности корзины", () => {
  test("если товар уже добавлен в корзину, в каталоге и на странице товара должно отображаться сообщение об этом", async ({
    page,
  }) => {
    await page.goto(
      `http://localhost:3000/hw/store/catalog?bug_id=${process.env.BUG_ID ?? 0}`
    );

    await page.locator(".card-link").nth(0).click();
    await page.locator(".ProductDetails-AddToCart").click();
    await expect(page.getByText("Item in cart")).toBeVisible();
  });

  test("если товар не добавлен в корзину, то не показываем надпись, что товар в корзине", async ({
    page,
  }) => {
    await page.goto(
      `http://localhost:3000/hw/store/catalog?bug_id=${process.env.BUG_ID ?? 0}`
    );

    await page.locator(".card-link").nth(0).click();
    await expect(page.getByText("Item in cart")).not.toBeVisible();
  });

  test('если товар уже добавлен в корзину, повторное нажатие кнопки "добавить в корзину" должно увеличивать его количество', async ({
    page,
  }) => {
    const itemId = 0;

    await page.goto(
      `http://localhost:3000/hw/store/catalog?bug_id=${process.env.BUG_ID ?? 0}`
    );

    await page.locator(".card-link").nth(0).click();
    await page.locator(".ProductDetails-AddToCart").click();

    await page.goto(
      `http://localhost:3000/hw/store/cart?bug_id=${process.env.BUG_ID ?? 0}`
    );

    const itemCount = await page
      .locator(`tr[data-testid="${itemId}"] .Cart-Count`)
      .textContent();

    await page.goto(
      `http://localhost:3000/hw/store/catalog/${itemId}/?bug_id=${
        process.env.BUG_ID ?? 0
      }`
    );

    await page.locator(".ProductDetails-AddToCart").click();
    await page.goto(
      `http://localhost:3000/hw/store/cart?bug_id=${process.env.BUG_ID ?? 0}`
    );

    const newItemCount = await page
      .locator(`tr[data-testid="${itemId}"] .Cart-Count`)
      .textContent();

    expect(Number(newItemCount)).toBe(Number(itemCount) + 1);
  });

  test("содержимое корзины должно сохраняться между перезагрузками страницы", async ({
    page,
  }) => {
    await page.goto(
      `http://localhost:3000/hw/store/catalog?bug_id=${process.env.BUG_ID ?? 0}`
    );

    await page.locator(".card-link").nth(0).click();
    await page.locator(".ProductDetails-AddToCart").click();
    await page.goto(
      `http://localhost:3000/hw/store/cart?bug_id=${process.env.BUG_ID ?? 0}`
    );
    await page.reload();

    await expect(page.getByText("Cart is empty.")).toBeHidden();
  });

  test('в корзине должна быть кнопка "очистить корзину", по нажатию на которую все товары должны удаляться', async ({
    page,
  }) => {
    await page.goto(
      `http://localhost:3000/hw/store/catalog?bug_id=${process.env.BUG_ID ?? 0}`
    );

    await page.locator(".card-link").nth(0).click();
    await page.locator(".ProductDetails-AddToCart").click();
    await page.goto(
      `http://localhost:3000/hw/store/cart?bug_id=${process.env.BUG_ID ?? 0}`
    );
    await page.getByText("Clear shopping cart").click();
    await expect(page.getByText("Cart is empty.")).toBeVisible();
  });

  test("в шапке рядом со ссылкой на корзину должно отображаться количество не повторяющихся товаров в ней", async ({
    page,
  }) => {
    await page.goto(
      `http://localhost:3000/hw/store/catalog?bug_id=${process.env.BUG_ID ?? 0}`
    );
    await page.locator(".card-link").nth(0).click();
    await page.locator(".ProductDetails-AddToCart").click();
    await page.goto(
      `http://localhost:3000/hw/store/catalog?bug_id=${process.env.BUG_ID ?? 0}`
    );
    await page.locator(".card-link").nth(1).click();
    await page.locator(".ProductDetails-AddToCart").click();
    await page.locator(".ProductDetails-AddToCart").click();
    await page.goto(
      `http://localhost:3000/hw/store/cart?bug_id=${process.env.BUG_ID ?? 0}`
    );

    const link = await page.locator(`.nav-link.active`).textContent();

    expect(Number(link?.match(/\d+/)?.[0])).toBe(2);
  });

  test("заказ выполнен успешно", async ({ page }) => {
    await page.goto(
      `http://localhost:3000/hw/store/catalog?bug_id=${process.env.BUG_ID ?? 0}`
    );
    await page.locator(".card-link").nth(0).click();
    await page.locator(".ProductDetails-AddToCart").click();
    await page.goto(
      `http://localhost:3000/hw/store/cart?bug_id=${process.env.BUG_ID ?? 0}`
    );
    await page.locator("#f-name").fill("Ivan Ivanov");
    await page.locator("#f-phone").fill("+995591805020");
    await page.locator("#f-address").fill("Tbilisi, 40 Simon Chikovani Street");

    await page.locator(".Form-Submit").click();

    await expect(page.getByText("Well done!")).toBeVisible();

    await expect(page).toHaveScreenshot({ fullPage: true });
  });
});
