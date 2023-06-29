import React, { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { render, RenderOptions } from "@testing-library/react";

import { ExampleApi, CartApi } from "../src/client/api";
import { initStore, ApplicationState } from "../src/client/store";

const basename = "/hw/store";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: ApplicationState;
  store?: any;
}

export function customRender(
  ui: React.ReactElement,
  {
    preloadedState,
    store = initStore(new ExampleApi(basename), new CartApi(), preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function AllTheProviders({ children }: PropsWithChildren<{}>): JSX.Element {
    return (
      <BrowserRouter basename={basename}>
        <Provider store={store}>{children}</Provider>
      </BrowserRouter>
    );
  }
  return {
    store,
    ...render(ui, { wrapper: AllTheProviders, ...renderOptions }),
  };
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
