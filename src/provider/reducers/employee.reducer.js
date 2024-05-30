import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import DATA from "../../assets/test.json";

import EMPLOYEE_API from "../../api/employee.api";


export const CREATE_EMPLOYEE = createAsyncThunk("create employee", async (content) => {
    // const response =
    console.log("CREATE EMPLOYEE:", content)
})



const Employee = createSlice({
    name: "employee",
    initialState: {
        loading: false, content: DATA.employee
    },
    reducers: {
        getEmployee: (state, action) => {
            // Define your reducer logic here
        }
    }
    , extraReducers: (builder) => {
        // create employee
        builder.addCase(CREATE_EMPLOYEE.pending, (action, state) => {
            state.loading = true;
        })
        builder.addCase(CREATE_EMPLOYEE.fulfilled, (action, state) => {
            state.loading = false;
        })
        builder.addCase(CREATE_EMPLOYEE.rejected, (action, state) => {
            state.loading = false;
        })



    }
});

export default Employee.reducer;


