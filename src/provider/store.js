import { configureStore } from "@reduxjs/toolkit";
import Employee from "./reducers/employee.reducer";

const Store = configureStore({
    reducer: {
        Employee
    }
});

export default Store;
