import { useState } from 'react'
import React from 'react'
import Form from './form'

export default function Dashboard() {
    const [formDisplay, toggleDisplay] = useState(true)
    return (
        <>
            <Form display={formDisplay} toggleDisplay={toggleDisplay} />
            <div className='content-wrapper'>
                <div className="card">
                    <div className="card-header">
                        <div className="card-tools">
                            <button type="button" class="btn btn-block btn-primary btn-sm" fdprocessedid="al3vs" onClick={() => { toggleDisplay(true) }}>Add More Task</button>
                        </div>
                    </div>
                    {/* /.card-header */}
                    <div className="card-body">
                        <div
                            id="jsGrid1"
                            className="jsgrid"
                            style={{ position: "relative", height: "100%", width: "100%" }}
                        >
                            <div className="jsgrid-grid-header jsgrid-header-scrollbar">
                                <table className="jsgrid-table">
                                    <tbody>
                                        <tr className="jsgrid-header-row">
                                            <th
                                                className="jsgrid-header-cell jsgrid-header-sortable"
                                                style={{ width: 150 }}
                                            >
                                                Name
                                            </th>
                                            <th
                                                className="jsgrid-header-cell jsgrid-align-right jsgrid-header-sortable"
                                                style={{ width: 50 }}
                                            >
                                                Age
                                            </th>
                                            <th
                                                className="jsgrid-header-cell jsgrid-header-sortable jsgrid-header-sort jsgrid-header-sort-asc"
                                                style={{ width: 200 }}
                                            >
                                                Address
                                            </th>
                                            <th
                                                className="jsgrid-header-cell jsgrid-align-center jsgrid-header-sortable"
                                                style={{ width: 100 }}
                                            >
                                                Country
                                            </th>
                                            <th
                                                className="jsgrid-header-cell jsgrid-align-center jsgrid-header-sortable"
                                                style={{ width: 100 }}
                                            >
                                                Is Married
                                            </th>
                                        </tr>
                                        <tr className="jsgrid-filter-row" style={{ display: "none" }}>
                                            <td className="jsgrid-cell" style={{ width: 150 }}>
                                                <input type="text" />
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-right"
                                                style={{ width: 50 }}
                                            >
                                                <input type="number" />
                                            </td>
                                            <td className="jsgrid-cell" style={{ width: 200 }}>
                                                <input type="text" />
                                            </td>


                                        </tr>
                                        <tr className="jsgrid-insert-row" style={{ display: "none" }}>
                                            <td className="jsgrid-cell" style={{ width: 150 }}>
                                                <input type="text" />
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-right"
                                                style={{ width: 50 }}
                                            >
                                                <input type="number" />
                                            </td>
                                            <td className="jsgrid-cell" style={{ width: 200 }}>
                                                <input type="text" />
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-center"
                                                style={{ width: 100 }}
                                            >
                                                <select>
                                                    <option value={0} />
                                                    <option value={1}>United States</option>
                                                    <option value={2}>Canada</option>
                                                    <option value={3}>United Kingdom</option>
                                                    <option value={4}>France</option>
                                                    <option value={5}>Brazil</option>
                                                    <option value={6}>China</option>
                                                    <option value={7}>Russia</option>
                                                </select>
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-center"
                                                style={{ width: 100 }}
                                            >
                                                <input type="checkbox" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="jsgrid-grid-body" style={{ height: "816.8px" }}>
                                <table className="jsgrid-table">
                                    <tbody>
                                        <tr className="jsgrid-row">
                                            <td className="jsgrid-cell" style={{ width: 150 }}>
                                                Kirsten Mayo
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-right"
                                                style={{ width: 50 }}
                                            >
                                                71
                                            </td>
                                            <td className="jsgrid-cell" style={{ width: 200 }}>
                                                100-8640 Orci, Avenue
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-center"
                                                style={{ width: 100 }}
                                            >
                                                United States
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-center"
                                                style={{ width: 100 }}
                                            >
                                                <input type="checkbox" disabled="" />
                                            </td>
                                        </tr>
                                        <tr className="jsgrid-alt-row">
                                            <td className="jsgrid-cell" style={{ width: 150 }}>
                                                Caryn Maldonado
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-right"
                                                style={{ width: 50 }}
                                            >
                                                40
                                            </td>
                                            <td className="jsgrid-cell" style={{ width: 200 }}>
                                                108-282 Nonummy Ave
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-center"
                                                style={{ width: 100 }}
                                            >
                                                United States
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-center"
                                                style={{ width: 100 }}
                                            >
                                                <input type="checkbox" disabled="" />
                                            </td>
                                        </tr>
                                        <tr className="jsgrid-row">
                                            <td className="jsgrid-cell" style={{ width: 150 }}>
                                                Vladimir Tate
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-right"
                                                style={{ width: 50 }}
                                            >
                                                26
                                            </td>
                                            <td className="jsgrid-cell" style={{ width: 200 }}>
                                                130-1291 Non, Rd.
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-center"
                                                style={{ width: 100 }}
                                            >
                                                United States
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-center"
                                                style={{ width: 100 }}
                                            >
                                                <input type="checkbox" disabled="" />
                                            </td>
                                        </tr>
                                        <tr className="jsgrid-alt-row">
                                            <td className="jsgrid-cell" style={{ width: 150 }}>
                                                Randall Reeves
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-right"
                                                style={{ width: 50 }}
                                            >
                                                44
                                            </td>
                                            <td className="jsgrid-cell" style={{ width: 200 }}>
                                                1819 Non Street
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-center"
                                                style={{ width: 100 }}
                                            >
                                                United Kingdom
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-center"
                                                style={{ width: 100 }}
                                            >
                                                <input type="checkbox" disabled="" />
                                            </td>
                                        </tr>
                                        <tr className="jsgrid-row">
                                            <td className="jsgrid-cell" style={{ width: 150 }}>
                                                Adria Todd
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-right"
                                                style={{ width: 50 }}
                                            >
                                                68
                                            </td>
                                            <td className="jsgrid-cell" style={{ width: 200 }}>
                                                1889 Tincidunt Road
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-center"
                                                style={{ width: 100 }}
                                            >
                                                China
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-center"
                                                style={{ width: 100 }}
                                            >
                                                <input type="checkbox" disabled="" />
                                            </td>
                                        </tr>
                                        <tr className="jsgrid-alt-row">
                                            <td className="jsgrid-cell" style={{ width: 150 }}>
                                                Allegra Hull
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-right"
                                                style={{ width: 50 }}
                                            >
                                                22
                                            </td>
                                            <td className="jsgrid-cell" style={{ width: 200 }}>
                                                245-8891 Donec St.
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-center"
                                                style={{ width: 100 }}
                                            >
                                                France
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-center"
                                                style={{ width: 100 }}
                                            >
                                                <input type="checkbox" disabled="" />
                                            </td>
                                        </tr>
                                        <tr className="jsgrid-row">
                                            <td className="jsgrid-cell" style={{ width: 150 }}>
                                                Jerome Harper
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-right"
                                                style={{ width: 50 }}
                                            >
                                                31
                                            </td>
                                            <td className="jsgrid-cell" style={{ width: 200 }}>
                                                2464 Porttitor Road
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-center"
                                                style={{ width: 100 }}
                                            >
                                                Brazil
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-center"
                                                style={{ width: 100 }}
                                            >
                                                <input type="checkbox" disabled="" />
                                            </td>
                                        </tr>
                                        <tr className="jsgrid-alt-row">
                                            <td className="jsgrid-cell" style={{ width: 150 }}>
                                                Akeem Conrad
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-right"
                                                style={{ width: 50 }}
                                            >
                                                60
                                            </td>
                                            <td className="jsgrid-cell" style={{ width: 200 }}>
                                                282-495 Sed Ave
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-center"
                                                style={{ width: 100 }}
                                            >
                                                Canada
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-center"
                                                style={{ width: 100 }}
                                            >
                                                <input type="checkbox" disabled="" />
                                            </td>
                                        </tr>
                                        <tr className="jsgrid-row">
                                            <td className="jsgrid-cell" style={{ width: 150 }}>
                                                Kaden Hernandez
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-right"
                                                style={{ width: 50 }}
                                            >
                                                79
                                            </td>
                                            <td className="jsgrid-cell" style={{ width: 200 }}>
                                                366 Ut St.
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-center"
                                                style={{ width: 100 }}
                                            >
                                                United Kingdom
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-center"
                                                style={{ width: 100 }}
                                            >
                                                <input type="checkbox" disabled="" />
                                            </td>
                                        </tr>
                                        <tr className="jsgrid-alt-row">
                                            <td className="jsgrid-cell" style={{ width: 150 }}>
                                                Brenna Rodriguez
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-right"
                                                style={{ width: 50 }}
                                            >
                                                77
                                            </td>
                                            <td className="jsgrid-cell" style={{ width: 200 }}>
                                                3687 Imperdiet Av.
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-center"
                                                style={{ width: 100 }}
                                            >
                                                China
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-center"
                                                style={{ width: 100 }}
                                            >
                                                <input type="checkbox" disabled="" />
                                            </td>
                                        </tr>
                                        <tr className="jsgrid-row">
                                            <td className="jsgrid-cell" style={{ width: 150 }}>
                                                Bree Johnston
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-right"
                                                style={{ width: 50 }}
                                            >
                                                31
                                            </td>
                                            <td className="jsgrid-cell" style={{ width: 200 }}>
                                                372-5942 Vulputate Avenue
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-center"
                                                style={{ width: 100 }}
                                            >
                                                Canada
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-center"
                                                style={{ width: 100 }}
                                            >
                                                <input type="checkbox" disabled="" />
                                            </td>
                                        </tr>
                                        <tr className="jsgrid-alt-row">
                                            <td className="jsgrid-cell" style={{ width: 150 }}>
                                                Casey Reese
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-right"
                                                style={{ width: 50 }}
                                            >
                                                60
                                            </td>
                                            <td className="jsgrid-cell" style={{ width: 200 }}>
                                                383-3675 Ultrices, St.
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-center"
                                                style={{ width: 100 }}
                                            >
                                                France
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-center"
                                                style={{ width: 100 }}
                                            >
                                                <input type="checkbox" disabled="" />
                                            </td>
                                        </tr>
                                        <tr className="jsgrid-row">
                                            <td className="jsgrid-cell" style={{ width: 150 }}>
                                                Wallace Christian
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-right"
                                                style={{ width: 50 }}
                                            >
                                                43
                                            </td>
                                            <td className="jsgrid-cell" style={{ width: 200 }}>
                                                416-8816 Mauris Avenue
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-center"
                                                style={{ width: 100 }}
                                            >
                                                United Kingdom
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-center"
                                                style={{ width: 100 }}
                                            >
                                                <input type="checkbox" disabled="" />
                                            </td>
                                        </tr>
                                        <tr className="jsgrid-alt-row">
                                            <td className="jsgrid-cell" style={{ width: 150 }}>
                                                George Holt
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-right"
                                                style={{ width: 50 }}
                                            >
                                                27
                                            </td>
                                            <td className="jsgrid-cell" style={{ width: 200 }}>
                                                4162 Cras Rd.
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-center"
                                                style={{ width: 100 }}
                                            >
                                                China
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-center"
                                                style={{ width: 100 }}
                                            >
                                                <input type="checkbox" disabled="" />
                                            </td>
                                        </tr>
                                        <tr className="jsgrid-row">
                                            <td className="jsgrid-cell" style={{ width: 150 }}>
                                                Hu Hendrix
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-right"
                                                style={{ width: 50 }}
                                            >
                                                65
                                            </td>
                                            <td className="jsgrid-cell" style={{ width: 200 }}>
                                                428-5404 Tempus Ave
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-center"
                                                style={{ width: 100 }}
                                            >
                                                Russia
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-center"
                                                style={{ width: 100 }}
                                            >
                                                <input type="checkbox" disabled="" />
                                            </td>
                                        </tr>
                                        <tr className="jsgrid-alt-row">
                                            <td className="jsgrid-cell" style={{ width: 150 }}>
                                                Hannah Juarez
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-right"
                                                style={{ width: 50 }}
                                            >
                                                61
                                            </td>
                                            <td className="jsgrid-cell" style={{ width: 200 }}>
                                                4744 Sapien, Rd.
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-center"
                                                style={{ width: 100 }}
                                            >
                                                Canada
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-center"
                                                style={{ width: 100 }}
                                            >
                                                <input type="checkbox" disabled="" />
                                            </td>
                                        </tr>
                                        <tr className="jsgrid-row">
                                            <td className="jsgrid-cell" style={{ width: 150 }}>
                                                Ruby Rocha
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-right"
                                                style={{ width: 50 }}
                                            >
                                                62
                                            </td>
                                            <td className="jsgrid-cell" style={{ width: 200 }}>
                                                5212 Sagittis Ave
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-center"
                                                style={{ width: 100 }}
                                            >
                                                Canada
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-center"
                                                style={{ width: 100 }}
                                            >
                                                <input type="checkbox" disabled="" />
                                            </td>
                                        </tr>
                                        <tr className="jsgrid-alt-row">
                                            <td className="jsgrid-cell" style={{ width: 150 }}>
                                                Illiana Kirby
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-right"
                                                style={{ width: 50 }}
                                            >
                                                31
                                            </td>
                                            <td className="jsgrid-cell" style={{ width: 200 }}>
                                                527-3553 Mi Ave
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-center"
                                                style={{ width: 100 }}
                                            >
                                                Canada
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-center"
                                                style={{ width: 100 }}
                                            >
                                                <input type="checkbox" disabled="" />
                                            </td>
                                        </tr>
                                        <tr className="jsgrid-row">
                                            <td className="jsgrid-cell" style={{ width: 150 }}>
                                                Lydia Castillo
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-right"
                                                style={{ width: 50 }}
                                            >
                                                59
                                            </td>
                                            <td className="jsgrid-cell" style={{ width: 200 }}>
                                                5280 Placerat, Ave
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-center"
                                                style={{ width: 100 }}
                                            >
                                                Russia
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-center"
                                                style={{ width: 100 }}
                                            >
                                                <input type="checkbox" disabled="" />
                                            </td>
                                        </tr>
                                        <tr className="jsgrid-alt-row">
                                            <td className="jsgrid-cell" style={{ width: 150 }}>
                                                Zachery Atkins
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-right"
                                                style={{ width: 50 }}
                                            >
                                                30
                                            </td>
                                            <td className="jsgrid-cell" style={{ width: 200 }}>
                                                549-2208 Auctor. Road
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-center"
                                                style={{ width: 100 }}
                                            >
                                                United States
                                            </td>
                                            <td
                                                className="jsgrid-cell jsgrid-align-center"
                                                style={{ width: 100 }}
                                            >
                                                <input type="checkbox" disabled="" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="jsgrid-pager-container">
                                <div className="jsgrid-pager">
                                    Pages:{" "}
                                    <span className="jsgrid-pager-nav-button jsgrid-pager-nav-inactive-button">
                                        <a href="javascript:void(0);">First</a>
                                    </span>{" "}
                                    <span className="jsgrid-pager-nav-button jsgrid-pager-nav-inactive-button">
                                        <a href="javascript:void(0);">Prev</a>
                                    </span>{" "}
                                    <span className="jsgrid-pager-page jsgrid-pager-current-page">1</span>
                                    <span className="jsgrid-pager-page">
                                        <a href="javascript:void(0);">2</a>
                                    </span>
                                    <span className="jsgrid-pager-page">
                                        <a href="javascript:void(0);">3</a>
                                    </span>
                                    <span className="jsgrid-pager-page">
                                        <a href="javascript:void(0);">4</a>
                                    </span>
                                    <span className="jsgrid-pager-page">
                                        <a href="javascript:void(0);">5</a>
                                    </span>{" "}
                                    <span className="jsgrid-pager-nav-button">
                                        <a href="javascript:void(0);">Next</a>
                                    </span>{" "}
                                    <span className="jsgrid-pager-nav-button">
                                        <a href="javascript:void(0);">Last</a>
                                    </span>{" "}
                                    &nbsp;&nbsp; 1 of 5{" "}
                                </div>
                            </div>
                            <div
                                className="jsgrid-load-shader"
                                style={{
                                    display: "none",
                                    position: "absolute",
                                    inset: 0,
                                    zIndex: 1000
                                }}
                            />
                            <div
                                className="jsgrid-load-panel"
                                style={{
                                    display: "none",
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    zIndex: 1000
                                }}
                            >
                                Please, wait...
                            </div>
                        </div>
                    </div>
                    {/* /.card-body */}
                </div>


            </div>
        </>
    )
}
