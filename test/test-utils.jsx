import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import { render } from "@testing-library/react";

import { ExampleApi, CartApi } from "../src/client/api";
import { initStore } from "../src/client/store";

const basename = "/hw/store";

const api = new ExampleApi(basename);
const cart = new CartApi();
const store = initStore(api, cart);

const AllTheProviders = ({ children }) => {
  return (
    <BrowserRouter basename={basename}>
      <Provider store={store}>{children}</Provider>
    </BrowserRouter>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
