import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import GetCredentials from "../../utils/get_credentials.util";
import EncryptData from "../../utils/encrypt_data.util";
import { decrypt } from "../../utils/decrypt_data.util"
import TASK_API from "../../api/task.api";



export const CREATE_TASK = createAsyncThunk("post-create-employee", async (content) => {
    try {
        const encrypted_data = await EncryptData(content);
        const data = {
            ...encrypted_data,
            "Assigned_By_Employee_id": content["Assigned_By_Employee_id"],
            "Assigned_To_Employee_id": content["Assigned_To_Employee_id"]
        }
        const response = await TASK_API.post("/create", data, {
            headers: {
                'panelid': GetCredentials().panelid
            }
        })
        if (response.data.body.resType === 'error') {
            throw new Error(response.data.body.resMessage.split(":")[1]);
        }
        return { TaskId: response.data.body.TaskId, ...content };

    } catch (err) {
        console.error("Error in sending data at post-create-task:", err);
        throw new Error(err.message)
    }
});



export const VIEW_TASK = createAsyncThunk("get-all-tasks", async (content) => {
    try {
        const REQ_PAGE = content.PAGE;
        const ENCRYPTED_DATA = await EncryptData(content);

        const res = await TASK_API.get(`/get_list?page=${ENCRYPTED_DATA.PAGE}`);
        const PAGE_DATA = res.data.body.data;
        return { page: REQ_PAGE, count: res.data.body.tasks_count, data: PAGE_DATA };

    } catch (err) {
        console.log(err);
        console.log("Error in fetching data at get-all-task");
        throw err;
    }
});

export const SEARCH_EMPLOYEE = createAsyncThunk("get-search-employee", async (content) => {
    // try {
    //     const ENCRYPTED_DATA = await EncryptData(content);
    //     const res = await EMPLOYEE_API.get(`/single_details?id=${ENCRYPTED_DATA.ID}`);
    //     if (res.data.body.error) {
    //         return [];
    //     }
    //     const EMP_DATA = JSON.parse(res.data.body);
    //     EMP_DATA["Employee Email"] = decrypt(EMP_DATA["Employee Email"]);
    //     console.log(EMP_DATA)
    //     return [EMP_DATA];
    // } catch (err) {
    //     console.log(err);
    //     console.log("Error in fetching data at get-search-employee");
    //     throw err;
    // }
});





const Task = createSlice({
    name: "employee",
    initialState: {
        content_loading: false, total_count: 0, form_loading: false, content: [], search_content: []
    }
    , extraReducers: (builder) => {
        builder.addCase(CREATE_TASK.pending, (state, action) => {
            state.form_loading = true;
        })

        builder.addCase(CREATE_TASK.fulfilled, (state, action) => {
            state.form_loading = false;
            state.total_count += 1;
            const newTask = {
                "Task_Id": action.payload.TaskId,
                "TaskTitle": action.payload.Task_title,
                "DueDate": action.payload.End_Date,
                "AssignedBy": action.payload["Assigned_By_Name"],
                "Status": action.payload.Status,
                "Priority": action.payload.Priority
            }
            state.search_content.push(newTask)
            const page_count = Math.ceil(state.total_count / 10);
            const pageIndex = state.content.findIndex(page => page.page === page_count);
            if (pageIndex !== -1) {
                console.log("Page exists: ", state.content[pageIndex]);
                if (state.content[pageIndex].data.length < 11) {
                    state.content[pageIndex].data.push(newTask);
                }
            }
        });

        builder.addCase(CREATE_TASK.rejected, (state, action) => {
            state.form_loading = false;
        })


        // view all employee 

        builder.addCase(VIEW_TASK.pending, (state, action) => {
            state.content_loading = true;
        })
        builder.addCase(VIEW_TASK.fulfilled, (state, action) => {
            const { page, data, count } = action.payload
            state.total_count = count
            state.content_loading = false;
            state.search_content = [...state.search_content, ...data]
            state.content.push({ page, data });
        })
        builder.addCase(VIEW_TASK.rejected, (state, action) => {
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

export default Task.reducer;


