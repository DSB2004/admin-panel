import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import EMPLOYEE_API from "../../api/employee.api";
import GetCredentials from "../../utils/get_credentials.util";
import { encrypt } from "../../utils/encrypt_data.util";
export const GET_COMPANY_DETAILS = createAsyncThunk("get-company-details", async () => {
    try {
        const res = await EMPLOYEE_API.get("/data", {
            headers: {
                'panelid': GetCredentials().panelid
            }
        });
        return res.data.body;
    } catch (err) {
        console.error("Error in getting data at get-company-details:", err);
        throw err;
    }
});



const Company = createSlice({
    name: "Company",
    initialState: {
        content_loading: false,
        employee_list: [],
        department_list: [],
        designation_list: [],
    },

    reducers: {
        add_employee: (state, action) => {
            const { payload } = action;
            const new_employee = {
                value: encrypt(payload.auto_id),
                ref: payload.auto_id,
                label: payload.name
            }
            state.employee_list.push(new_employee);
        },
        edit_employee: (state, action) => {
            const { payload } = action;
            const index = state.employee_list.findIndex(ele => ele.ref === payload.auto_id);
            if (index !== -1) {
                state.employee_list[index] = { ...state.employee_list[index], label: payload.name };
            }

        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(GET_COMPANY_DETAILS.pending, (state) => {
                state.content_loading = true;
            })
            .addCase(GET_COMPANY_DETAILS.fulfilled, (state, action) => {
                const { payload } = action;
                state.content_loading = false;
                state.employee_list = payload.employee_list.map((element) => ({
                    value: encrypt(element.auto_id),
                    ref: element.auto_id,
                    label: element.emp_name
                }));
                state.department_list = payload.department_list;
                state.designation_list = payload.designation_list;
                // console.log(state)
            })
            .addCase(GET_COMPANY_DETAILS.rejected, (state) => {
                state.content_loading = false;
            });
    },
});

export const { edit_employee, add_employee } = Company.actions;

export default Company.reducer;


