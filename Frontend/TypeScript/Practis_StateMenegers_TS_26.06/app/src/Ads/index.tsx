import { composeReducers, connect, createStore } from "./connect";
import { reducer, adsInitialState } from "./ads.state";
import { useState } from "react";

const composedRedusers = composeReducers(reducer);
const initialState = { Ads: adsInitialState };
                           //postsState
createStore(composedRedusers, initialState);

console.log(initialState);

const Ads = (props: typeof adsInitialState) => (
  <section>
    {props.titleArray.map((el) => (
      <div>{el}</div>
    ))}
  </section>
);
//импортируется и запускается в App
export const AdsContainer = connect(
  (state: typeof initialState) => 
  state.Ads,
  Ads
);
