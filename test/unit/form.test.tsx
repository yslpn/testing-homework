import React from "react";

import { fireEvent, render, screen } from "../test-utils";
import { Form } from "../../src/client/components/Form";
import { CheckoutFormData } from "../../src/common/types";

test("данные формы должны быть валидны", async () => {
  render(
    <Form
      onSubmit={function (data: CheckoutFormData): void {
        return;
      }}
    />,
    { preloadedState: { cart: [], details: [] } }
  );

  await fireEvent.change(screen.getByLabelText("Name"), {
    target: { value: "Ivan Ivanov" },
  });
  await fireEvent.change(screen.getByLabelText("Phone"), {
    target: { value: "+995591805020" },
  });
  await fireEvent.change(screen.getByLabelText("Address"), {
    target: { value: "Tbilisi, 40 Simon Chikovani Street" },
  });

  await fireEvent.click(
    screen.getByRole("button", { name: "Checkout", exact: true })
  );

  const element = document.querySelector(".is-invalid");
  expect(element).not.toBeInTheDocument();
});
