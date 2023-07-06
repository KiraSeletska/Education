import { Reducer, dispatch } from "../../connect";
import img from "../../images/smartphone.svg";
import img2 from "../../images/smartphone2.svg";

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

export const replaceReducer: Reducer<any> = (state, action) => {
  //change name to replace
  if (action.type === "replaceAds") {
    return {
      ...state,
      Ads: {
        ...state.Ads,
        ads: [...action.payload],
      },
    };
  }
  return state;
};

export type adType = {
  image: string;
  title: string;
  website: string;
}[];
function replaceAdsCreater(payload: adType) {
  return {
    type: "replaceAds",
    payload,
  };
}

setInterval(() => {
  dispatch(
    replaceAdsCreater([
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
    ])
  );
}, 3000);

setInterval(() => {
  dispatch(
    replaceAdsCreater([
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
    ])
  );
}, 6000);
