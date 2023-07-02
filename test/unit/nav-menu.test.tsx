import React from "react";
import { render, screen } from "../test-utils";

import { Application } from "../../src/client/Application";

test("проверка наличия ссылок на страницы магазина и корзину в шапке", () => {
  render(<Application />);

  const storeLink: HTMLAnchorElement = screen.getByRole("link", {
    name: "Example store",
  });
  const cartLink: HTMLAnchorElement = screen.getByRole("link", {
    name: /Cart/i,
  });

  expect(storeLink).toHaveAttribute("href", "/hw/store/");
  expect(cartLink).toHaveAttribute("href", "/hw/store/cart");

  expect(storeLink).toBeInTheDocument();
  expect(cartLink).toBeInTheDocument();
});
