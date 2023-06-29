// function flux(state: typeof initialState, action: Action): typeof initialState {
//   return headerReducer(feedReducer(addReducer(state, action), action), action);
// }
/*
interface Action {
    type: string;
    payload: any;
  }
  
  type Reducer = (state: typeof initialState, action: Action) => typeof initialState;
  
  function composeReducers(...reducers: Reducer[]): Reducer {
      return reducers.reduce((a, b) => (state, action)=>b(a(state, action), action))
      //return (state, action) => reducers.reduce((acc, el)=> el(acc, action), state)
  }
  
  //const flux = composeReducers(addReducer, feedReducer, headerReducer);
  /*
  return funcs.reduce(
      (a, b) =>
        (...args: any) => a(b(...args))
  )
    
  ...funcs: Function[]*/
/*
  export default function compose(...funcs: Function[]) {
    if (funcs.length === 0) {
      // infer the argument type so it is usable in inference down the line
      return <T>(arg: T) => arg
    }
  
    if (funcs.length === 1) {
      return funcs[0]
    }
  
    return funcs.reduce(
      (a, b) =>
        (...args: any) =>
          a(b(...args))
    )
  }
  */

  export const a = () => {
    return <div></div>
  }