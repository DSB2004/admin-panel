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
        console.log(response)
        if (response.data.body.resType === 'error') {
            throw new Error(response.data.body.resMessage.split(":")[1]);
        }
        return {
            TaskId: response.data.body.resMessage, ...content
        };

    } catch (err) {
        console.error("Error in sending data at post-create-task:", err);
        throw new Error(err.message)
    }
});



export const VIEW_TASK = createAsyncThunk("get-all-tasks", async (content) => {
    try {
        const REQ_PAGE = content.PAGE;
        const ENCRYPTED_DATA = await EncryptData(content);


        // {
        //     "Task_Id": "TECH20240628091042",
        //     "TaskTitle": "Testing Task abc",
        //     "DueDate": "2024-05-28",
        //     "AssignedBy": "sohan",
        //     "Status": "active",
        //     "Priority": "mid"
        // }

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
        console.log(PAGE_DATA);
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
        total_count: 0, content: [], search_content: []
    }
    , extraReducers: (builder) => {
        builder.addCase(CREATE_TASK.pending, (state, action) => {
            state.form_loading = true;
        })

        builder.addCase(CREATE_TASK.fulfilled, (state, action) => {
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

        })


        // view all employee 

        builder.addCase(VIEW_TASK.pending, (state, action) => {

        })
        builder.addCase(VIEW_TASK.fulfilled, (state, action) => {
            const { page, data, count } = action.payload
            state.total_count = count
            state.search_content = [...state.search_content, ...data]
            state.content.push({ page, data });
        })
        builder.addCase(VIEW_TASK.rejected, (state, action) => {

        })

    }
});

export default Task.reducer;


