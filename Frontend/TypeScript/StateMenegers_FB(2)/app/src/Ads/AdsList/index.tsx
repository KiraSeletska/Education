import { connect } from "../../connect";
import { Ad } from "../Ad";
import { adsState } from "./adsState";
import { initialState } from "../../store";
import { getRandomID } from "../../App";

//import { adsState } from "./adsState";
/*<h3>Реклама</h3>*/

const AdsList = (props: typeof adsState) => {
 // console.log(props);
  return (
    <div>
      {props.ads.map((el) => (
        <div className="adsContainer" key={getRandomID()}>
          <Ad img={el.image} title={el.title} website={el.website} />
        </div>
      ))}
    </div>
  );
};

export const AdsContainer = connect(
    (state: typeof initialState) => state.Ads, AdsList);
