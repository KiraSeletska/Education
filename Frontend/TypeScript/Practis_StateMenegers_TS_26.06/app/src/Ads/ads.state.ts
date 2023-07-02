import { dispatch, type Reducer } from "./connect";

export const adsInitialState = {//postsState
  titleArray: ["string"],
};

export const reducer: Reducer<{ Ads: typeof adsInitialState }> = (
  state,
  action
) => {
  if (action.type === "Ads1") {
    return {
      ...state,
      Ads: {
        ...state.Ads,
        titleArray: [...state.Ads.titleArray, action.payload],
      },
    };
  }
  if (action.type === "deletAdd") {
    return {
      ...state,
      Ads: {
        ...state.Ads,
        titleArray: state.Ads.titleArray.filter(
          (_, ind) => ind !== action.payload
        ),
      },
    };
  }
  return state;
};
//практика2
setTimeout(() => {
  dispatch({ type: "Ads1", payload: "1 more string" });
}, 1000);
setTimeout(() => {
  dispatch({ type: "deletAdd", payload: 1 });
}, 2000);
setTimeout(() => {
  dispatch({ type: "Ads1", payload: "2 more string" });
}, 3000);
/*//практика1
setTimeout(()=> {
    dispatch('Ads1', () => 
    adsState.ads = [...adsState.ads, '1 more string'] ) 
}, 1000)
setTimeout(()=> {
    dispatch('Ads2', () => 
    adsState.ads = [...adsState.ads, '2 more string'])
}, 2000)
setTimeout(()=> {
    dispatch('Ads3', () =>  
    adsState.ads = [...adsState.ads, '3 more string'])
}, 3000)
*/
