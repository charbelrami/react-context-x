import React from "react";

export function useSetStateContext(contexts, name) {
  const context = contexts.find((context) => context.name === name);
  const setState = React.useContext(context.setState);

  return setState;
}
