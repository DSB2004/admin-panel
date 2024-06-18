import { createSlice } from "@reduxjs/toolkit";
import DATA from "../../assets/test.json";

const Task = createSlice({
    name: "employee",
    initialState: { content_loading: false, content: DATA.task },
    reducers: {

    }

});

export default Task.reducer;

