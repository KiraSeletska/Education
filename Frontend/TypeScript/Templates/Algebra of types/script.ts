/*
function composeReducers<T extends []>(...reducers: T): CombinedReducer<T> {
    return {} as any;
  }
  
  type t1 = string[];
  type t2 = [string];
  type t3 = [string, number];
  
  type CombinedReducer<T extends unknown[]> = T extends [infer R]
    ? R
    : T extends [infer R1, ...infer REST]
      ? R1 & CombinedReducer<REST>
      : never;
  
  function unbox(arr: unknown[]) {
    return arr.length === 1
      ? arr[0]
      : null;
  }
  
  const someVar: CombinedReducer<[{ content: string}, {data: string}, {s: number}]>;
*/

interface Action {
    type: string;
    payload: any;
  }

 type Reducer <T extends {}> = (state: T, action: Action) => T;

function composeReducers<T extends []>(...reducers: T): CombinedReducer<T> {
  return {} as any;
}

type t1 = string[];
type t2 = [string];
type t3 = [string, number];

type WroneCombinedReducer<T extends unknown[]> = Reducer<
T extends [Reducer<infer R>]
  ? R
  : T extends [Reducer<infer R1>, ...infer REST]
  ? R1 & CombinedReducer<REST>
  : {}
>

type CombinedReducer<T extends unknown[]> = Reducer<CombinedState<T>>;

type CombinedState<T extends unknown[]> =
  T extends [Reducer<infer R>]
    ? R
    : T extends [Reducer<infer R1>, ...infer REST]
      ? R1 & CombinedState<REST>
      : {};

function unbox(arr: unknown[]) {
  return arr.length === 1 ? arr[0] : null;
}

const someVar: CombinedReducer<[{ content: string}, 
    {data: string},
     {s: number}]> = [{content: ' '},
      {data: ' '},
       {s: ' '}]

       console.log(someVar)

   