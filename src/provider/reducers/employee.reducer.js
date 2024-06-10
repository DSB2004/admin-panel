import { createAsyncThunk, createSlice, unwrapResult } from "@reduxjs/toolkit";
import DATA from "../../assets/test.json";
// import EncryptData from "../../utils/encrypt_data.util";
import EMPLOYEE_API from "../../api/employee.api";
import axios from "axios";

export const CREATE_EMPLOYEE = createAsyncThunk("create employee", async (content) => {
    const res = await EMPLOYEE_API.post("/create", content)
    console.log(res.data)
    return res.data;
})

export const VIEW_EMPLOYEES = createAsyncThunk("view-all-employee", async (content) => {
    try {

        const res = axios.get('https://k2hdkx6spj.execute-api.ap-south-1.amazonaws.com/development/employee/details?page=Qg==', {
            headers: {
                'x-api-key': "gWd7btJwmPalYDlERtibh1fPxxfrcqA2nQglrXL7",
                "login_id": "Qg==",
                "panelid": "Qg=="
            }
        })
        console.log(res.data)
        // const res = await EMPLOYEE_API.get(`/details?page=${content.PAGE}`)
        // console.log(res.data)
    }
    catch (err) {
        console.log(err)
        throw err;
    }
})

export const SEARCH_EMPLOYEE = createAsyncThunk("search-employee", async (content) => {
    console.log(content)
    // const res = await EMPLOYEE_API.get("/details?page=")
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


