import React from "react";
import "@testing-library/jest-dom/extend-expect";

import { Application } from "../../src/client/Application";
import { render, screen } from "../test-utils";

test("проверка наличия ссылок на страницы магазина и корзину в шапке", () => {
  render(<Application />);

  const storeLink = screen.getByRole("link", { name: 'Example store' });
  const cartLink = screen.getByRole("link", { name: /Cart/i });
  
  expect(storeLink).toBeInTheDocument();
  expect(cartLink).toBeInTheDocument();
});
