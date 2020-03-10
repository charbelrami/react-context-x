import React from "react";
import { Provider } from "./Provider";

export function Providers({ children, contexts }) {
  return contexts.reduce((providerChildren, providerValue) => {
    return <Provider value={providerValue}>{providerChildren}</Provider>;
  }, children);
}
