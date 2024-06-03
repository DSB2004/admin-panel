import { configureStore } from "@reduxjs/toolkit";
import Employee from "./reducers/employee.reducer";
import Task from "./reducers/task.reducer"
import Campaign from "./reducers/campaign.reducer";

const Store = configureStore({
    reducer: {
        Employee,
        Task,
        Campaign,
    }
});

export default Store;
