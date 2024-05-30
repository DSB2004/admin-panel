import { Route, Routes } from "react-router-dom";
import React from "react";
import Welcome from "../components/common/welcome";
import Dashboard from "../pages/dashboard"


import TASK from "../components/dashboard/task/task"
import EMPLOYEE from "../components/dashboard/hr/employee/employee";
import CAMPAIGN from "../components/dashboard/campaign/campaign";

// import EmployeeTable from "../components/hr/employee/employee-table";


const DASHBOARD_ROUTES = () => {

    return (<>
        <Routes>

            <Route path="/" element={<Dashboard />} >
                {/* INDEX ROUTE */}
                <Route index element={<Welcome />} />
                {/* ADMIN ROUTE */}
                <Route path="task" element={<TASK />} />

                <Route path="resources" element={<h1>Resources</h1>} />

                <Route path="campaign" element={<CAMPAIGN />} />
                {/* HR ROUTE */}
                <Route path="HR">
                    <Route path="employee">
                        <Route index element={<EMPLOYEE />} />
                    </Route>
                    <Route path="leaves">

                    </Route>

                    <Route path="designation">

                    </Route>
                    <Route path="department">

                    </Route>
                </Route>

                {/* <Route path="settings"> */}
                {/* <Route path="credentials" element={ } /> */}
                {/* </Route> */}
            </Route>

        </Routes>
    </>)
}

export default DASHBOARD_ROUTES;