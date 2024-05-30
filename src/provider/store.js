import { configureStore } from "@reduxjs/toolkit";
import Employee from "./reducers/employee.reducer";
import Task from "./reducers/task.reducer"
import Campaign from "./reducers/campaign.reducer";
import Auth from "./reducers/auth.reducer"
const Store = configureStore({
    reducer: {
        Employee,
        Task,
        Campaign,
        Auth
    }
});

export default Store;
