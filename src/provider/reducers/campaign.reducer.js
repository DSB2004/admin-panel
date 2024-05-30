import { createSlice } from "@reduxjs/toolkit";
import DATA from "../../assets/test.json";

const Campaign = createSlice({
    name: "campaign",
    initialState: { loading: false, content: DATA.campaign },
    reducers: {
        getEmployee: (state, action) => {
            // Define your reducer logic here
        }
    }
});

export default Campaign.reducer;
export const { getEmployee } = Campaign.actions;
