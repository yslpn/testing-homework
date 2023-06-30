import React from "react";

import { fireEvent, render, screen } from "../test-utils";
import { Cart } from "../../src/client/pages/Cart";

const cartItems = {
  0: {
    name: "Incredible Bacon",
    price: 972,
    count: 2,
  },
  1: {
    name: "Rustic Sausages",
    price: 445,
    count: 1,
  },
  2: {
    name: "Refined Sausages",
    price: 347,
    count: 1,
  },
};

test("корзине должна отображаться таблица с добавленными в нее товарами", () => {
  render(<Cart />, { preloadedState: { cart: cartItems, details: [] } });

  expect(screen.getByRole("table")).toBeInTheDocument();

  expect(screen.getByText(cartItems[0].name)).toBeInTheDocument();
  expect(screen.getByText(cartItems[1].name)).toBeInTheDocument();
  expect(screen.getByText(cartItems[2].name)).toBeInTheDocument();

  const total = 2736;

  expect(screen.getByText(`$${total}`)).toBeInTheDocument();
});

test("очистка корзины работает", async () => {
  render(<Cart />, { preloadedState: { cart: cartItems, details: [] } });

  await fireEvent.click(screen.getByText("Clear shopping cart"));

  expect(
    screen.getByText("Cart is empty", { exact: false })
  ).toBeInTheDocument();
});

test("в пустой корзине есть ссылка на каталог", async () => {
  render(<Cart />, { preloadedState: { cart: [], details: [] } });

  expect(
    screen.getByRole("link", { name: "catalog", exact: true })
  ).toHaveAttribute("href", "/hw/store/catalog");
});

