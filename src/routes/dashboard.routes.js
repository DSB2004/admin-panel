import { Route, Routes } from "react-router-dom";
import React from "react";
import Welcome from "../components/common/welcome";
import Dashboard from "../pages/dashboard"

// task 
import TaskTable from "../components/admin/task/task-table";

//employee
import EmployeeTable from "../components/hr/employee/employee-table";


const DASHBOARD_ROUTES = () => {

    return (<>
        <Routes>

            <Route path="/" element={<Dashboard />} >
                {/* INDEX ROUTE */}
                <Route index element={<Welcome />} />
                {/* ADMIN ROUTE */}
                <Route path="admin" key="admin">
                    <Route path="task">
                        <Route index element={<TaskTable />} />
                        {/* <Route path="add-more" element={<TaskForm />} /> */}
                    </Route>
                    <Route path="user">
                        {/* to be defined */}
                    </Route>
                    <Route path="resources">
                        {/* to be defined */}
                    </Route>
                </Route>
                {/* HR ROUTE */}
                <Route path="HR">
                    <Route path="employee">
                        <Route index element={<EmployeeTable />} />
                        {/* <Route path="add-more" element={<EmployeeForm />} /> */}
                    </Route>
                    <Route path="leaves">
                        {/* to be defined */}
                    </Route>

                    <Route path="designation">
                        {/* to be defined */}
                    </Route>
                    <Route path="department">
                        {/* to be defined */}
                    </Route>
                </Route>
            </Route>

        </Routes>
    </>)
}

export default DASHBOARD_ROUTES;