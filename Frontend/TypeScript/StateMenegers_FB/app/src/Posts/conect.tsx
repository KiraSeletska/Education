import React, { useEffect, useState } from "react";

const listeners: (() => void)[] = [];

export function dispatch(action: string, peyLoadFunction: () => void) {
  peyLoadFunction();
  listeners.forEach((el) => el());
}

export function connect<T extends {}>(
  state: T,
  Component: React.ComponentType<T>
) {
  return (props:  JSX.IntrinsicAttributes) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      const listener = listeners.length;
      listeners.push(() => {
        setCount((prev) => prev + 1);
        console.log(count)
      });
      return () => {
        listeners.splice(listener, 1);
      };
    }, []);
    return <Component {...state} {...props} />;
  };
}
