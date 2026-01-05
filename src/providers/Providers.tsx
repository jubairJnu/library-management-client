import React, { ReactNode } from "react";
import { CounterStoreProvider } from "./counter-store-provider";
import TansatckProviders from "./TansatckProviders";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <TansatckProviders>
      <CounterStoreProvider>{children}</CounterStoreProvider>
    </TansatckProviders>
  );
};

export default Providers;
