import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: []
}

export const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNote: ({state, action}) => {
const { top, left} = action.payload;
state.items.push({
    id: +Date.now(),
    top,
    left,
    text:''
})
        }
    }
})

export const { addNote } = notesSlice.actions;
export const notesReducers = notesSlice.reducer