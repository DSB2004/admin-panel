import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import GetCredentials from "../../utils/get_credentials.util";
import EncryptData from "../../utils/encrypt_data.util";
import TASK_API from "../../api/task.api";
import TASK from "../../assets/task.json"

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
        return "New Task Created"

    } catch (err) {
        console.error("Error in sending data at post-create-task:", err);
        throw new Error(err.message)
    }
});



export const GET_TASKS = createAsyncThunk("get-all-tasks", async (content) => {
    try {
        const REQ_PAGE = content.PAGE;
        const ENCRYPTED_DATA = await EncryptData(content);

        const res = await TASK_API.get(`/get_list?page=${ENCRYPTED_DATA.PAGE}`);
        const PAGE_DATA = res.data.body.data;

        for (let element of PAGE_DATA) {
            const status = TASK.status.find(ele => ele.value === element['Status']);
            if (status) {
                element['Status'] = status.label
            }
            else {
                element['Status'] = "Not Found"
            }
            const priority = TASK.priority.find(ele => ele.value === element['Priority']);
            if (priority) {
                element['Priority'] = priority.label
            }
            else {
                element['Priority'] = "Not Found"
            }
        }
        return { page: REQ_PAGE, count: res.data.body.tasks_count, data: PAGE_DATA };

    } catch (err) {

        console.log("Error in fetching data at get-all-task");
        throw new Error("Error in getting task list");
    }
});



const Task = createSlice({
    name: "employee",
    initialState: {
        total_count: 0
    }
    , extraReducers: (builder) => {
        builder.addCase(CREATE_TASK.fulfilled, (state, action) => {
            state.total_count += 1;
        });
        builder.addCase(GET_TASKS.fulfilled, (state, action) => {
            const { count } = action.payload
            state.total_count = count;
        })

    }
});

export default Task.reducer;


