import { Reducer, dispatch } from "../connect";
import img from "../images/smartphone.svg";
import img2 from "../images/smartphone2.svg";

export const adsState = {
  ads: [
    {
      image: img,
      title: "Phones",
      website: "phones.com",
    },
    {
      image: img,
      title: "Phones2",
      website: "anithe/phones.com",
    },
  ],
};

export const adsReducer: Reducer<any> = (state, action) => {//change name to replace
  if (action.type === "addNewAd") {
    return {
      ...state,
      Ads: {
        ...state.Ads,
      ads: [...action.payload],
      }
    };
 }
  return state
};

setInterval(() => {
  dispatch({
    type: "addNewAd",
    payload: [
     {
        image: img2,
        title: "Phones",
        website: "phones.com",
      },

      {
        image: img2,
        title: "NEW Iphone",
        website: "newIphine.com",
      },
    ],
  });
}, 3000);

setInterval(() => {
  dispatch({
    type: "addNewAd",
    payload: [
      {
        image: img,
        title: "Phones",
        website: "phones.com",
      },
      {
        image: img,
        title: "Phones2",
        website: "anithe/phones.com",
      },
    ],
  });
}, 6000);
