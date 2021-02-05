import React from "react";

export function createContexts(initialValues) {
  const entries = Object.entries(initialValues);
  const contexts = entries.map((v) => {
    return {
      name: v[0],
      state: React.createContext(v[1]),
      setState: React.createContext(),
    };
  });

  return contexts;
}
