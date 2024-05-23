import { createSlice } from "@reduxjs/toolkit";
import DATA from "../../assets/test.json";

const Employee = createSlice({
    name: "employee",
    initialState: { loading: false, content: DATA.employee },
    reducers: {
        getEmployee: (state, action) => {
            // Define your reducer logic here
        }
    }
});

export default Employee.reducer;
export const { getEmployee } = Employee.actions;
