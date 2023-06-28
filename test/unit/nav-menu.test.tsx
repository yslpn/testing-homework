import React from "react";

import { Application } from "../../src/client/Application";
import { render, screen } from "../test-utils";

test("проверка наличия ссылок на страницы магазина и корзину в шапке", () => {
  render(<Application />);

  const storeLink: HTMLAnchorElement = screen.getByRole("link", { name: 'Example store' });
  const cartLink: HTMLAnchorElement = screen.getByRole("link", { name: /Cart/i });

  expect(storeLink.href).toBe('http://localhost:3000/hw/store/')
  expect(cartLink.href).toBe('http://localhost:3000/hw/store/cart')
  
  expect(storeLink).toBeInTheDocument();
  expect(cartLink).toBeInTheDocument();
});
