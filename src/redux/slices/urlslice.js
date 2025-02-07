import {createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    openSlider: false,
    sliderData: "",
};

const urlslice = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {
        setopenSlider: (state, action) => {
            state.openSlider = action.payload;
        },
        setshowloader: (state, action) => {
            state.loading = action.payload;
        },
        setsliderData: (state, action) => {
            state.sliderData = action.payload;
        },
    }
})

export const {setopenSlider,setshowloader,setsliderData} = urlslice.actions;
export default urlslice.reducer;