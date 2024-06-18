import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import GetCredentials from "../../utils/get_credentials.util";
import { EMPLOYEE_API, CREATE_EMPLOYEE_API } from "../../api/employee.api";
import EncryptData from "../../utils/encrypt_data.util";
import { decrypt } from "../../utils/decrypt_data.util"
import { API_KEY } from "../../config/index.config";
import axios from "axios";



export const CREATE_EMPLOYEE = createAsyncThunk("post-create-employee", async (content, thunkAPI) => {
    try {
        const response = await axios.post("https://k2hdkx6spj.execute-api.ap-south-1.amazonaws.com/development/employee/create", content, {
            headers: {
                'x-api-key': API_KEY,
                'login_id': GetCredentials().loginid,
                'panelid': GetCredentials().panelid,
                'logintype': "13124"
            }
        })
        return response.data;


    } catch (err) {
        console.error("Error in sending data at post-create-employee:", err);
        throw err;
    }
});



export const VIEW_EMPLOYEES = createAsyncThunk("get-all-employee", async (content) => {
    try {
        const REQ_PAGE = content.PAGE;
        const ENCRYPTED_DATA = await EncryptData(content);
        const res = await EMPLOYEE_API.get(`/details?page=${ENCRYPTED_DATA.PAGE}`);

        const PAGE_DATA = JSON.parse(res.data.body.data);
        for (let element of PAGE_DATA) {
            element['Employee Email'] = decrypt(element['Employee Email']);
        }
        return { page: REQ_PAGE, count: res.data.body.user_count, data: PAGE_DATA };
    } catch (err) {
        console.log(err);
        console.log("Error in fetching data at get-all-employees");
        throw err;
    }
});

export const SEARCH_EMPLOYEE = createAsyncThunk("get-search-employee", async (content) => {
    try {
        const ENCRYPTED_DATA = await EncryptData(content);
        const res = await EMPLOYEE_API.get(`/single_details?id=${ENCRYPTED_DATA.ID}`);
        if (res.data.body.error) {
            return [];
        }
        const EMP_DATA = JSON.parse(res.data.body);
        EMP_DATA["Employee Email"] = decrypt(EMP_DATA["Employee Email"]);
        return [EMP_DATA];
    } catch (err) {
        console.log(err);
        console.log("Error in fetching data at get-search-employee");
        throw err;
    }
});





const Employee = createSlice({
    name: "employee",
    initialState: {
        content_loading: false, content: [], total_count: 0, form_loading: false
    },
    reducers: {
        getEmployee: (state, action) => {

        }
    }
    , extraReducers: (builder) => {

        // create employee
        builder.addCase(CREATE_EMPLOYEE.pending, (state, action) => {
            state.form_loading = true;
        })
        builder.addCase(CREATE_EMPLOYEE.fulfilled, (state, action) => {
            state.form_loading = false;
        })
        builder.addCase(CREATE_EMPLOYEE.rejected, (state, action) => {
            state.form_loading = false;
        })

        // view all employee 

        builder.addCase(VIEW_EMPLOYEES.pending, (state, action) => {
            state.content_loading = true;
        })
        builder.addCase(VIEW_EMPLOYEES.fulfilled, (state, action) => {
            const { page, data, count } = action.payload
            state.total_count = count
            state.content = [...state.content, { page: [page], data: data }];
            state.content_loading = false;
        })
        builder.addCase(VIEW_EMPLOYEES.rejected, (state, action) => {
            state.content_loading = false;
        })


        // search employee
        builder.addCase(SEARCH_EMPLOYEE.pending, (state, action) => {
            state.content_loading = true;
        })
        builder.addCase(SEARCH_EMPLOYEE.fulfilled, (state, action) => {

            state.content_loading = false;
        })
        builder.addCase(SEARCH_EMPLOYEE.rejected, (state, action) => {
            state.content_loading = false;
        })


    }
});

export default Employee.reducer;


