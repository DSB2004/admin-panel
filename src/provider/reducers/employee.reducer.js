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
            //  to add employee into the company employee list
            Store.dispatch(add_employee({ auto_id: response.data.body.resMessage, name: content.name }))
            return "New Employee added"
        }

    } catch (err) {
        console.error("Error in sending data at post-create-employee:", err);
        throw new Error("Error creating a new employee")
    }
});


export const EDIT_EMPLOYEE = createAsyncThunk("edit-all-employee", async (content) => {
    const encryted_content = await EncryptData(content)
    try {
        const res = await EMPLOYEE_API.put("/update", encryted_content);
        if (res.data.body.resType === 'error') {
            throw new Error(res.data.body.resMessage.split(":")[1]);
        }
        else if (res.data.body.resType === 'success') {
            //  to update the name of user (if changed) in the company employee list
            Store.dispatch(edit_employee(
                { auto_id: content.auto_emp_id, name: content.name }
            ));
            return "Employee Info editted"
        }
    }
    catch (err) {
        console.error("Error in updating data at put-update-employee:", err);
        throw new Error("Error editing employee info");
    }

})


export const GET_EMPLOYEES = createAsyncThunk("get-all-employee", async (content) => {
    console.log("Content passed:", content)
    try {
        let res;
        const encryptedPage = await EncryptData({ page: content['page'] });

        if (content['body']) {
            const encryptBody = await EncryptData(content['body']);
            console.log(content, encryptBody)
            res = await EMPLOYEE_API.get(`/search?page=${encryptedPage.page}&${content['body']['key']}=${encryptBody['value']}`);
        }
        else {
            res = await EMPLOYEE_API.get(`/details?page=${encryptedPage.page}`);

        }
        console.log(res)
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
        return { count: res.data.body.user_count, data: PAGE_DATA };
    } catch (err) {
        console.log("Error in fetching data at get-all-employees", err);
        throw new Error("Error getting employees");
    }
});


export const GET_EMPLOYEE_PROFILE = createAsyncThunk("get-employee-profile", async (content) => {
    try {
        const ENCRYPTED_DATA = await EncryptData(content);
        const res = await EMPLOYEE_API.get(`/single_details?id=${ENCRYPTED_DATA.ID}`);
        if (res.data.body.error) {
            throw new Error("Error getting employee profile")
        }
        const EMP_DATA = JSON.parse(res.data.body);
        return EMP_DATA;
    } catch (err) {
        console.log("Error in fetching data at get-search-employee", err);
        throw new Error("Error getting employee profile")
    }
});



export const SUSPEND_EMPLOYEE = createAsyncThunk("suspend-employee", async (content) => {
    const ENCRYPTED_DATA = await EncryptData(content);
    try {
        const res = await EMPLOYEE_API.put("/update", ENCRYPTED_DATA);
        if (res.data.body.error) {
            throw new Error("Error suspending employee")
        }
        return "Employee Suspended"
    }
    catch (err) {
        console.error("Error in updating data at put-update-employee:", err);
        throw err;
    }
})




const Employee = createSlice({
    name: "employee",
    initialState: {
        total_count: 0
    }, extraReducers: (builder) => {


        builder.addCase(GET_EMPLOYEES.fulfilled, (state, action) => {
            const { count } = action.payload;
            state.total_count = count

        })

        builder.addCase(CREATE_EMPLOYEE.fulfilled, (state, action) => {
            state.total_count += 1;   // on success increase the counter to +1 the pages are handled by the pagenation
        });

    }
});

export default Employee.reducer;


