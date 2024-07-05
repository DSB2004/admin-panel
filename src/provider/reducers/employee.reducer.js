import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import GetCredentials from "../../utils/get_credentials.util";
import EMPLOYEE_API from "../../api/employee.api";
import EncryptData from "../../utils/encrypt_data.util";
import { decrypt } from "../../utils/decrypt_data.util"
import EMPLOYEE from "../../assets/employee.json";
import { add_employee, edit_employee } from "./company.reducer";
import Store from '../store'

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
                const data = {
                    "Auto Employee ID": response.data.body.resMessage,
                    "Employee ID": EMP_DATA['Employee ID'],
                    "Employee Name": content.name,
                    "Employee Email": content.email,
                    "User Role": content.designation_name,
                    "Reporting To": content.reporting_to_name
                    , "Status": "Active"
                }
                Store.dispatch(add_employee({ auto_id: response.data.body.resMessage, name: content.name }));
                return data;
            }
        }

    } catch (err) {
        console.error("Error in sending data at post-create-employee:", err);
        throw new Error(err.message)
    }
});

export const EDIT_EMPLOYEE = createAsyncThunk("edit-all-employee", async (content) => {
    const encryted_content = await EncryptData(content)
    try {
        await EMPLOYEE_API.put("/update", encryted_content)
        const key = content.id;
        const page = content.page;
        const data = {
            "Employee ID": content.id,
            "Employee Name": content.name,
            "Employee Email": content.email,
            "User Role": content.designation_name,
            "Reporting To": content.reporting_to_name,
        }
        Store.dispatch(edit_employee(
            { auto_id: content.auto_emp_id, name: content.name }
        ));
        return { data, key, page };
    }
    catch (err) {
        console.error("Error in updating data at put-update-employee:", err);
        throw err;
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
            const status = EMPLOYEE.status.find(ele => ele.value === element['Status']);
            if (status) {
                element['Status'] = status.label
            }
            else {
                element['Status'] = "Not Found"
            }
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

        console.log("Error in fetching data at get-all-employees", err);
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
        console.log("Error in fetching data at get-search-employee", err);
        throw err;
    }
});

export const SUSPEND_EMPLOYEE = createAsyncThunk("suspend-employee", async (content) => {
    const ENCRYPTED_DATA = await EncryptData(content);
    try {
        const res = await EMPLOYEE_API.put("/update", ENCRYPTED_DATA)
        console.log(res)
        const key = content.auto_emp_id;
        const page = content.page;
        const data = {
            "Status": "Suspended"
        }
        return { data, key, page };
    }
    catch (err) {
        console.error("Error in updating data at put-update-employee:", err);
        throw err;
    }
})


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
            const { page, data, count } = action.payload;
            state.total_count = count
            state.search_content = [...state.search_content, ...data]
            state.content.push({ page, data });
        })
        builder.addCase(VIEW_EMPLOYEES.rejected, (state, action) => {
        })

        builder.addCase(EDIT_EMPLOYEE.pending, (state, action) => {
            // 
        })

        builder.addCase(EDIT_EMPLOYEE.fulfilled, (state, action) => {
            const { page, data, key } = action.payload;
            // console.log(data)

            // Update search_content
            const searchContentIndex = state.search_content.findIndex(emp => emp['Employee ID'] === key);
            if (searchContentIndex !== -1) {
                state.search_content[searchContentIndex] = { ...state.search_content[searchContentIndex], ...data };
            }

            // Update content
            const contentPageIndex = state.content.findIndex(pageData => pageData.page === page);
            if (contentPageIndex !== -1) {
                const contentPageDataIndex = state.content[contentPageIndex].data.findIndex(emp => emp['Employee ID'] === key);
                if (contentPageDataIndex !== -1) {
                    state.content[contentPageIndex].data[contentPageDataIndex] = { ...state.content[contentPageIndex].data[contentPageDataIndex], ...data };
                }
            }
        });

        builder.addCase(EDIT_EMPLOYEE.rejected, (state, action) => {
            console.log("Error in edit employee")
        })



        builder.addCase(SUSPEND_EMPLOYEE.pending, (state, action) => {
            // 
        })

        builder.addCase(SUSPEND_EMPLOYEE.fulfilled, (state, action) => {
            const { page, data, key } = action.payload;

            const searchContentIndex = state.search_content.findIndex(emp => emp['Auto Employee ID'] === key);
            if (searchContentIndex !== -1) {
                state.search_content[searchContentIndex] = { ...state.search_content[searchContentIndex], ...data };
            }

            // Update content
            const contentPageIndex = state.content.findIndex(pageData => pageData.page === page);
            if (contentPageIndex !== -1) {
                const contentPageDataIndex = state.content[contentPageIndex].data.findIndex(emp => emp['Auto Employee ID'] === key);
                if (contentPageDataIndex !== -1) {
                    state.content[contentPageIndex].data[contentPageDataIndex] = { ...state.content[contentPageIndex].data[contentPageDataIndex], ...data };
                }
            }
        });

        builder.addCase(SUSPEND_EMPLOYEE.rejected, (state, action) => {
            console.log("Error in suspending employee")
        })





    }
});

export default Employee.reducer;


