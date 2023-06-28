import React from "react";
import { render, screen } from "../test-utils";

import { Home } from "../../src/client/pages/Home";

const expectedTexts = [
  "Welcome to Example store!",
  "Culpa perspiciatis corporis facilis fugit similique",
  "Cum aut ut eveniet rem cupiditate natus veritatis quia",
  "Quickly",
  "Odio aut assumenda ipsam amet reprehenderit. Perspiciatis qui molestiae qui tempora quisquam",
  "Qualitatively",
  "Ut nisi distinctio est non voluptatem. Odio aut assumenda ipsam amet reprehenderit",
  "Inexpensive",
  "Perspiciatis qui molestiae qui tempora quisquam. Ut nisi distinctio est non voluptatem",
  "Sed voluptatum quis voluptates laudantium incidunt laudantium. Illo non quos eos vel ipsa. Explicabo itaque est optio neque rerum provident enim qui sed. Corrupti commodi voluptatem vero soluta hic.",
  "Modi corporis consectetur aliquid sit cum tenetur enim. Sed voluptatum quis voluptates laudantium incidunt laudantium. Illo non quos eos vel ipsa. Explicabo itaque est optio neque rerum provident enim qui sed. Corrupti commodi voluptatem vero soluta hic.",
];

test("проверка содержимого главной страницы", () => {
  render(<Home />);

  expectedTexts.forEach((text) => {
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
