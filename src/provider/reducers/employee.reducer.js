import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import GetCredentials from "../../utils/get_credentials.util";
import EMPLOYEE_API from "../../api/employee.api";
import EncryptData from "../../utils/encrypt_data.util";
import { decrypt } from "../../utils/decrypt_data.util"
import EMPLOYEE from "../../assets/employee.json";


export const CREATE_EMPLOYEE = createAsyncThunk("post-create-employee", async (content, thunkAPI) => {
    try {
        const encryted_content = await EncryptData(content)
        const response = await EMPLOYEE_API.post("/create", encryted_content, {
            headers: {
                'login_id': GetCredentials().loginid,
                'panelid': GetCredentials().panelid
            }
        })
        if (response.data.body.resType === 'error') {
            throw new Error(response.data.body.resMessage.split(":")[1]);
        }
        else if (response.data.body.resType === 'success') {
            const ENCRYPT_DATA = await EncryptData({ ID: response.data.body.resMessage })
            const res = await EMPLOYEE_API.get(`/single_details?id=${ENCRYPT_DATA.ID}`);
            if (res.data.body.resType === 'error') {
                throw new Error(response.data.body.resMessage.split(":")[1]);
            }
            else {
                const EMP_DATA = JSON.parse(res.data.body);
                // console.log(EMP_DATA)
                return EMP_DATA;
            }
        }

    } catch (err) {
        console.error("Error in sending data at post-create-employee:", err);
        throw new Error(err.message)
    }
});

export const EDIT_EMPLOYEE = createAsyncThunk("edit-all-employee", async (content) => {
    const encryted_content = await EncryptData(content)
    console.log(content, encryted_content)
    try {
        const response = await EMPLOYEE_API.put("/update", encryted_content)
        console.log(response)
    }
    catch (err) {
        console.error("Error in updating data at put-update-employee:", err);
        throw new Error(err.message)
    }

})

export const VIEW_EMPLOYEES = createAsyncThunk("get-all-employee", async (content) => {
    try {
        const REQ_PAGE = content.PAGE;
        const ENCRYPTED_DATA = await EncryptData(content);
        const res = await EMPLOYEE_API.get(`/details?page=${ENCRYPTED_DATA.PAGE}`);
        const PAGE_DATA = JSON.parse(res.data.body.data);
        for (let element of PAGE_DATA) {
            element['Employee Email'] = decrypt(element['Employee Email']);
            const user_role = EMPLOYEE.designation.find(ele => ele.value === element['User Role']);
            if (user_role) {
                element['User Role'] = user_role.label
            }
            else {
                element['User Role'] = "Not Found"
            }
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
            return null;
        }
        const EMP_DATA = JSON.parse(res.data.body);
        return EMP_DATA;
    } catch (err) {
        console.log(err);
        console.log("Error in fetching data at get-search-employee");
        // throw err;
    }
});


const Employee = createSlice({
    name: "employee",
    initialState: {
        total_count: 0, content: [], search_content: []
    },
    reducers: {
        getEmployee: (state, action) => {

        }
    }
    , extraReducers: (builder) => {

        builder.addCase(CREATE_EMPLOYEE.pending, (state, action) => {

        })

        builder.addCase(CREATE_EMPLOYEE.fulfilled, (state, action) => {
            state.total_count += 1;
            const newEmployee = action.payload;
            state.search_content.push(newEmployee)
            const page_count = Math.ceil(state.total_count / 10);
            const pageIndex = state.content.findIndex(page => page.page === page_count);
            if (pageIndex !== -1) {
                console.log("Page exists: ", state.content[pageIndex]);
                if (state.content[pageIndex].data.length < 11) {
                    state.content[pageIndex].data.push(newEmployee);
                }
            }
        });

        builder.addCase(CREATE_EMPLOYEE.rejected, (state, action) => {

        })


        // view all employee 

        builder.addCase(VIEW_EMPLOYEES.pending, (state, action) => {

        })
        builder.addCase(VIEW_EMPLOYEES.fulfilled, (state, action) => {
            const { page, data, count } = action.payload
            state.total_count = count
            state.search_content = [...state.search_content, ...data]
            state.content.push({ page, data });
        })
        builder.addCase(VIEW_EMPLOYEES.rejected, (state, action) => {

        })




    }
});

export default Employee.reducer;


