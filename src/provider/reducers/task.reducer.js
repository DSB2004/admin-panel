import { createSlice } from "@reduxjs/toolkit";
import DATA from "../../assets/test.json";

const Task = createSlice({
    name: "employee",
    initialState: { loading: false, content: DATA.task },
    reducers: {
        // getEmployee: (state, action) => {
        //     // Define your reducer logic here
        // }
    }
});

export default Task.reducer;

