import { createSlice } from "@reduxjs/toolkit";
import { cityData, viewAction } from "../../templates";

export const viewSlice = createSlice({
    name: "View",
    initialState : {
        city : "",
        temp : 0
    },
    reducers: {
        updateCity : (state, action) : void =>
        {
            state.city = action.payload.city;
            state.temp = action.payload.temp;
        },
    }
})

export const updateView = (data : cityData) : viewAction => {
    return {
        type: "View/updateCity",
        payload: data
    }
};

export const selectCity = (state : {view:cityData}) : string => {
    return state.view.city;
}

export const selectTemp = (state : {view:cityData}) : number => {
    return state.view.temp;
}

export const { updateCity } = viewSlice.actions;
export default viewSlice.reducer;