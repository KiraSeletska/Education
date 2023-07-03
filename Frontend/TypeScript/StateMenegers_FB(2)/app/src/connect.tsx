import React, { useEffect, useState } from "react";

interface Action {
  type: string;
  payload: any;
}

export type Reducer<T extends {}> = (state: T, action: Action) => T;

const listeners: (() => void)[] = [];

let stateSaver: any = {};

let stateReducer: Reducer<any>;

export function createAction<T extends unknown[]>(
  type: string,
  callback: (...args: T) => any
) {
  return (...args: T) => {
    dispatch({ type, payload: callback(...args) });
  };
}

type Actions<T extends {}> = {
  [K in keyof T]: (...args: Parameters<T[K]>) => void;
}

export function createActions<T extends {}> (actions: T): Actions<T>{
return Object.keys(actions)//Запомнить, как паттерн
  .reduce((acc, key)=>
          (acc[key] = createAction(key as string, actions[key]))
          && acc,
      {} as Actions<T>)
}

export function dispatch(action: Action) {
  stateSaver = stateReducer(stateSaver, action);
  listeners.forEach((el) => el());
}

export function connect<T extends {}, P>(
  mapStatetoProps: (state: T) => P,
  Component: React.ComponentType<P>
) {
  return (props: JSX.IntrinsicAttributes) => {
    const newProps = mapStatetoProps(stateSaver);
    const [, setCount] = useState(0);

    useEffect(() => {
      const listener = () => {
        mapStatetoProps(stateSaver) !== newProps &&
          setCount((prev) => prev + 1);
      };
      listeners.push(listener);
      return () => {
        listeners.splice(listeners.indexOf(listener), 1);
      };
    }, [newProps]);

    return <Component {...newProps} {...props} />;
  };
}

//export function composeReducers<T1 extends {}, T2 extends{}>(r1: Reducer<T1>, r2: Reducer<T2>): Reducer<T1 & T2>

type CombinedReducer<T extends unknown[]> = Reducer<CombinedState<T>>;

type CombinedState<T extends unknown[]> =
  T extends [Reducer<infer R>]
    ? R
    : T extends [Reducer<infer R1>, ...infer REST]
      ? R1 & CombinedState<REST>
      : {};

export function composeReducers<T extends Reducer <any>[]>(
  ...reducers: T
): CombinedReducer<T> {
  return (state, action) =>
    reducers.reduce((acc, el) => el(acc, action), state);
}

export function createStore<T extends {}>(
  reducer: Reducer<T>,
  initialState: T
) {
  stateSaver = initialState;
  stateReducer = reducer;
}

/*
Добавить редактирование постов,
лайк - визул,
отрефакторить на испоользование креатЭкшнс 
*/