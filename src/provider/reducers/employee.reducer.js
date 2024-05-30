import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import DATA from "../../assets/test.json";

import EMPLOYEE_API from "../../api/employee.api";


export const CREATE_EMPLOYEE = createAsyncThunk("create employee", async (content) => {
    const loginin = content.employee_company_id;
    const adminlid = content.created_by;
    // const res = await EMPLOYEE_API.post("/create", content, { headers: {
    //     'panel id':
    // } })

    console.log("API CALLED")
    console.log(res.data)
})



const Employee = createSlice({
    name: "employee",
    initialState: {
        loading: false, content: DATA.employee
    },
    reducers: {
        getEmployee: (state, action) => {

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


