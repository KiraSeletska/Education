
import React, { useEffect, useState } from "react";

interface Action {
  type: string;
  payload: any;
}

export type Reducer <T extends {}> = (state: T, action: Action) => T;

const listeners: (() => void)[] = [];

let stateSaver: any = {}

let stateReducer: Reducer<any>;

export function dispatch(action: Action) {
  stateSaver = stateReducer(stateSaver, action)
  listeners.forEach((el) => el());
}

export function connect<T extends {}, P>(
  mapStatetoProps: (state: T)=>P,
  Component: React.ComponentType<P>
) {

  return (props: JSX.IntrinsicAttributes) => {
    const newProps = mapStatetoProps(stateSaver)
    const [, setCount] = useState(0);

    useEffect(() => {
      const listener = () => {
        mapStatetoProps(stateSaver) !== newProps && 
        setCount((prev) => prev + 1)};
        console.log(stateSaver)
      listeners.push(listener)
      return () => {listeners.splice(listeners.indexOf(listener), 1)};
    }, [newProps]);

    return <Component {...newProps} {...props} />;
  };
}

export function composeReducers<T extends {}>(...reducers: Reducer<T>[]): Reducer<T> {
 // return reducers.reduce((a, b) => (state, action)=>b(a(state, action), action))
  return (state, action) => reducers.reduce((acc, el)=> el(acc, action), state)
}

export function createStore <T extends {}>(reducer: Reducer<T>, initialState: T) {
stateSaver = initialState;
stateReducer = reducer;
}