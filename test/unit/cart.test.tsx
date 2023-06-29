import React from "react";

import { render, screen } from "../test-utils";
import { Cart } from "../../src/client/pages/Cart";

test("корзине должна отображаться таблица с добавленными в нее товарами", () => {
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

  render(<Cart />, { preloadedState: { cart: cartItems, details: [] } });

  expect(screen.getByRole("table")).toBeInTheDocument();
  expect(screen.getByText("Incredible Bacon")).toBeInTheDocument();
  expect(screen.getByText("Rustic Sausages")).toBeInTheDocument();
  expect(screen.getByText("Refined Sausages")).toBeInTheDocument();
  expect(screen.getByText("$2736")).toBeInTheDocument();
});


  // const products = [
  //   {
  //     id: 0,
  //     name: "Refined Sausages",
  //     description:
  //       "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
  //     price: 347,
  //     color: "fuchsia",
  //     material: "Granite",
  //   },
  //   {
  //     id: 1,
  //     name: "Rustic Sausages",
  //     description:
  //       "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
  //     price: 445,
  //     color: "white",
  //     material: "Fresh",
  //   },
  //   {
  //     id: 2,
  //     name: "Incredible Bacon",
  //     description:
  //       "The Football Is Good For Training And Recreational Purposes",
  //     price: 972,
  //     color: "ivory",
  //     material: "Frozen",
  //   },
  // ];