import React from "react";

import { render, screen } from "../test-utils";
import { ProductDetails } from "../../src/client/components/ProductDetails";

const products = [
  {
    id: 0,
    name: "Refined Sausages",
    description:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    price: 347,
    color: "fuchsia",
    material: "Granite",
  },
  {
    id: 1,
    name: "Rustic Sausages",
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    price: 445,
    color: "white",
    material: "Fresh",
  },
  {
    id: 2,
    name: "Incredible Bacon",
    description: "The Football Is Good For Training And Recreational Purposes",
    price: 972,
    color: "ivory",
    material: "Frozen",
  },
];

test("Страница продукта отрендерилась успешно", () => {
  const { container } = render(<ProductDetails product={products[0]} />, {
    preloadedState: { cart: [], details: [] },
  });

  expect(container).toMatchSnapshot();
});
