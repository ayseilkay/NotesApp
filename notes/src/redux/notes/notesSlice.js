import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    items: [
      {
        id: 1,
        content: "cotent1",
      },
      {
        id: 2,
        content: "cotent2",
      },
      {
        id: 3,
        content: "cotent3",
      },
      {
        id: 4,
        content: "cotent4",
      }
    ],
  },
  reducers: {
      addNote:(state,action) =>{
          state.items.push(action.payload)
      }
  },
});

export const {addNote} = notesSlice.actions;
export default notesSlice.reducer;
