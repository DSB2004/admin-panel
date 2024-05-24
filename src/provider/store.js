import { configureStore } from "@reduxjs/toolkit";
import Employee from "./reducers/employee.reducer";
import Task from "./reducers/task.reducer"

const Store = configureStore({
    reducer: {
        Employee,
        Task
    }
});

export default Store;
