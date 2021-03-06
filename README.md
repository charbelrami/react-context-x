# react-context-x

> Optimize shared states in React (353B)
>
> [How to optimize shared states in React](https://dev.to/charbelrami/how-to-optimize-shared-states-in-react-k66)

| Table of Contents             |
| :---------------------------- |
| [Examples](#examples)         |
| [Installation](#installation) |
| [Usage](#usage)               |
| [License](#license)           |

## Examples

- [Basic](https://codesandbox.io/s/context-x-o0dcc)

## Installation

```bash
npm install react-context-x
```

## Usage

```jsx
import { createContexts } from "react-context-x";

const states = {
  count: 0,
};

export const contexts = createContexts(states);
```

```jsx
import React from "react";
import { Providers } from "react-context-x";
import { contexts } from "./contexts";
import { Counter } from "./Counter";
import { Increment } from "./Increment";

export default function App() {
  return (
    <Providers contexts={contexts}>
      <Counter />
      <Increment />
    </Providers>
  );
}
```

```jsx
import React from "react";
import { useStateContext } from "react-context-x";
import { contexts } from "./contexts";

export function Counter() {
  const count = useStateContext(contexts, "count");

  return <span>{count}</span>;
}
```

```jsx
import React from "react";
import { useSetStateContext } from "react-context-x";
import { contexts } from "./contexts";

export function Increment() {
  const setCount = useSetStateContext(contexts, "count");

  return (
    <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
  );
}
```

## License

react-context-x is licensed under the [MIT License](LICENSE)
