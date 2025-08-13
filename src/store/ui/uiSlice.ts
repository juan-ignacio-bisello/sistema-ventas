import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isSideBarOpen: false,
      },
      reducers: {
        onSideBarOpenHandler: ( state ) => {
            state.isSideBarOpen = !state.isSideBarOpen;
        },
      }
});



export const { onSideBarOpenHandler } = uiSlice.actions;