import React from 'react'
import NavItemDrop from '../../layouts/nav/nav-item-drop'
import NavItemLink from '../../layouts/nav/nav-item-link'
import NavItem from '../../layouts/nav/nav-item'
import NavSearch from '../../layouts/nav/nav-search'
import NavUser from '../../layouts/nav/nav-user'
import NavHead from '../../layouts/nav/nav-head'
import RemoveCredentials from '../../utils/remove_credentials'
// import "../../style/sidebar.css"
export default function Sidebar() {

    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4 react-dashboard-sidebar"
            style={{ minHeight: "100vh" }}>
            <NavHead />
            <div className="sidebar">
                <NavUser />
                <NavSearch />
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                        data-accordion="false">
                        <NavItem text="Task" to="/task" />
                        <NavItem text="Resources" to="/resources" />
                        <NavItem text="Campaign" to="/campaign" />
                        <NavItemDrop text="HR">
                            <NavItemLink text="Employee" to="/hr/employee" />
                            <NavItemLink text="Leaves" to="/hr/leaves" />
                            <NavItemLink text="Designation" to="/hr/designation" />
                            <NavItemLink text="Department" to="/hr/department" />
                        </NavItemDrop>
                        <NavItemDrop text="Settings">
                            <NavItemLink text="Credentials" to="/settings/credentials" />
                        </NavItemDrop>
                        <NavItem text="LogOut" onClick={() => { RemoveCredentials() }} />
                    </ul>
                </nav>
            </div>
        </aside >

    )
}
