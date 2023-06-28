import React from "react";

import { render, screen } from "../test-utils";
import { Contacts } from "../../src/client/pages/Contacts";

const expectedTexts = [
  "Contacts",
  "Ut non consequatur aperiam ex dolores. Voluptatum harum consequatur est totam. Aut voluptatum aliquid aut optio et ea. Quaerat et eligendi minus quasi. Culpa voluptatem voluptatem dolores molestiae aut quos iure. Repellat aperiam ut aliquam iure. Veritatis magnam quisquam et dolorum recusandae aut.",
  "Molestias inventore illum architecto placeat molestias ipsam facilis ab quo. Rem dolore cum qui est reprehenderit assumenda voluptatem nisi ipsa. Unde libero quidem. Excepturi maiores vel quia. Neque facilis nobis minus veniam id. Eum cum eveniet accusantium molestias voluptas aut totam laborum aut. Ea molestiae ullam et. Quis ea ipsa culpa eligendi ab sit ea error suscipit. Quia ea ut minus distinctio quam eveniet nihil. Aut voluptate numquam ipsa dolorem et quas nemo.",
];

test('проверка содержимого страницы "условия доставки" ', () => {
  render(<Contacts />);

  expectedTexts.forEach((text) => {
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
