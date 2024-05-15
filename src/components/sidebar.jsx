import React, { useState } from 'react'
import NavItemDrop from '../layouts/nav/nav-item-drop'
import NavItemLink from '../layouts/nav/nav-item-link'
import NavItem from '../layouts/nav/nav-item'
import NavSearch from '../layouts/nav/nav-search'
import NavUser from '../layouts/nav/nav-user'
import NavHead from '../layouts/nav/nav-head'
// import "../../style/sidebar.css"
export default function Sidebar() {

    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4 react-dashboard-sidebar">
            <NavHead />
            <div className="sidebar">
                <NavUser />
                <NavSearch />
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                        data-accordion="false">
                        <NavItemDrop text="Dashboard">
                            <NavItemLink text="Task" to="/" />
                            <NavItemLink text="User" to="/" />
                            <NavItemLink text="Resources" to="/" />
                        </NavItemDrop>
                        <NavItemDrop text="Credentials">
                            <NavItemLink text="Link" to="/" />
                            <NavItemLink text="Docs" to="/" />
                        </NavItemDrop>
                        <NavItem to="/" text="HR" />
                        <NavItem to="/" text="LogOut" />
                    </ul>
                </nav>
            </div>
        </aside >

    )
}
