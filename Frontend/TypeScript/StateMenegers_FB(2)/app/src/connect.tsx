import { prefix } from "@fortawesome/free-brands-svg-icons";
import { type } from "os";
import React, { useEffect, useState } from "react";
import { actions } from "./Posts/Post/postActionState";

type FuncDictionary = {
  [index: string]: (...args: any[]) => any;
};

interface Action {
  type: string;
  payload: any;
}

/*
export interface FeedStateItem {
  id: number;
  text: string;
  isLiked: boolean;
}

type GeneralState = {
  FeedArray: FeedStateItem[]
}

*/
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

type BranchesDictionary<S extends {}> = {
  [index: string]: (state: S, action: Action) => Partial<S>;
};

type Actions<T extends FuncDictionary> = {
  [K in keyof T]: (...args: Parameters<T[K]>) => void;
};

export function createActions<T extends FuncDictionary>(
  actions: T
): Actions<T> {
  return Object.keys(actions) //Запомнить, как паттерн
    .reduce(
      (acc, key) =>
        (acc[key] = createAction(key as string, actions[key])) && acc,
      {} as Actions<T>
    );
}

type Patch<S extends {}> = (state: S, action: Action) => Partial<S>;
/*
export function createReducer<
  S extends {},
  P extends string,
  T extends BranchesDictionary<S> = BranchesDictionary<S>
>(prefix: P, branches: T): Reducer<{ [prefix in typeof prefix]: S }> {
  const helper = (
    state: { [prefix in typeof prefix]: S },
    arg: Patch<S>,
    action: Action
  ) => ({
    ...state,
    [prefix]: {
      ...state[prefix],
      ...arg(state[prefix], action),
    },
  });
  return (state, action) => {
    const patch = (branches as any)[action.type];
    if (patch) {
      return helper(state, patch, patch);
    }
    return state;
  };
}*/

export function createReducer<
P extends string,
     // S extends {[s: string]: any},
     S extends {},
    T extends BranchesDictionary<S> = BranchesDictionary<S>
    >(prefix: P, branches: T): Reducer<{[prefix in typeof prefix]: S}> {
    const helperFunc = (state: {[prefix in typeof prefix]: S}, arg: Patch<S>, action: Action) => ({
        ...state,
        [prefix]: {
            ...state[prefix],
            ...(arg(state[prefix], action))
        }
    })
    return (state, action) => {
      console.log(state, action)
        const patch = (branches as any)[action.type]
        if (patch) {
            return helperFunc(state, patch, action)
        }
        return state;
    }}

export function dispatch(action: Action) {
  console.log(action)
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

type CombinedReducer<T extends unknown[]> = Reducer<CombinedState<T>>;

type CombinedState<T extends unknown[]> = T extends [Reducer<infer R>]
  ? R
  : T extends [Reducer<infer R1>, ...infer REST]
  ? R1 & CombinedState<REST>
  : {};

export function composeReducers<T extends Reducer<any>[]>(
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
