import { createContext } from "react";

export function createContexts(initialValues) {
  const entries = Object.entries(initialValues);
  const contexts = entries.map(v => {
    return {
      name: v[0],
      state: createContext(v[1]),
      setState: createContext()
    };
  });

  return contexts;
}
