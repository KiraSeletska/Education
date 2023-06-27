import { useState } from "react";
import { AppContext } from "./context";

export const AppContextProvider = ({ children }) => {
    const [ notes, setNotes ] = useState([]);

    const addNote = ({ top, left }) => {
        setNotes(prevValue => [
            ...prevValue,
            {
                id: +Date.now(),
                top,
                left,
                text: ""
            },
        ]);
    }

    return <AppContext.Provider value={{ notes, setNotes, addNote }}>
        {children}
    </AppContext.Provider>;
}