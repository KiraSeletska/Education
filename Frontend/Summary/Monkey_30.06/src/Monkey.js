import { useDispatch, useSelector } from "react-redux";
import { getGift, sayHi } from "./store/slices/monkey";

export const Monkey = () => {
    const applesCount = useSelector(state => state.monkey.applesCount);
    const bananasCount = useSelector(state => state.monkey.bananasCount);
    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(sayHi());
    }

    const giveApple = () => {
        dispatch(getGift({ giftType: "apples" }));
    }
    const giveBanana = () => {
        dispatch(getGift({ giftType: "bananas" }));
    }

    return <div>
        Hello from Monkey! Apples count:&nbsp;{applesCount}. <br />
        Bananas count:&nbsp;{bananasCount}. <br />
        <button onClick={onClick}>Say hi!</button> <br />
        <button onClick={giveApple}>Give me an apple!</button> <br />
        <button onClick={giveBanana}>Give me banana!</button>
    </div>;
}