import React, { useEffect, useReducer, useState } from 'react'
import Button from '../../../layouts/form/button'
import THead from '../../../layouts/table/table-header'
import Campaign from "../../../assets/campaign.json"
import Pagenation from '../../../layouts/table/pagenation'
import ActionButton from '../../../layouts/table/action-button'
import SearchBar from '../../../layouts/table/search-bar';

import { useSelector } from 'react-redux'

import { RiLoader2Fill } from "react-icons/ri";
import CreateForm from './create-form'
// import UpdateForm from './edit-form'
import EditForm from './edit-form'
import ViewCampaign from './view-campaign'
import OptionForm from './option-form'


export default function TASK() {

    const reducer = (state, action) => {
        const { type, id, subContent } = action
        // console.log(type, id, subContent)
        if (type === "VIEW") {
            return { id: id, form: "VIEW", content: null }
        }
        else if (type === "OPTION") {
            return { id: id, form: "OPTION", content: subContent }
        }
        else if (type === "ADD") {
            return { form: "ADD", id: null, content: null }
        }
        else if (type === "EDIT") {
            return { id: id, form: "EDIT", content: null }
        }
        else if (type === "CLOSE") {
            return { id: null, form: null, content: null }
        }
        console.log(state)
        return state;
    }


    const [STATE, DISPATCH] = useReducer(reducer, { id: null, form: null, content: null })
    const CAMPAIGN_STATE = useSelector(state => state.Campaign);



    const ACTION_LIST = (element) => [
        { content: "View", onClick: () => DISPATCH({ type: "VIEW", id: element.id }) },
        { content: "Doable", onClick: () => DISPATCH({ type: "OPTION", subContent: "Doable", id: element.id }) },
        { content: "Doable at Condition", onClick: () => DISPATCH({ type: "OPTION", subContent: "Doable at condition", id: element.id }) },
        { content: "Not Doable", onClick: () => DISPATCH({ type: "OPTION", subContent: "Not Doable", id: element.id }) },
        { content: "Edit", onClick: () => DISPATCH({ type: "EDIT", id: element.id }) },
        { content: "Integrate", onClick: () => DISPATCH({ type: "OPTION", subContent: "Integrate", id: element.id }) },
    ]



    return (
        <>

            {STATE.form === "ADD" && <CreateForm showModal={STATE.form === "ADD"} DISPATCH={DISPATCH} />}
            {STATE.form === "VIEW" && <ViewCampaign showModal={STATE.form === "VIEW"} campaign_id={STATE.id} DISPATCH={DISPATCH} />}
            {STATE.form === "OPTION" && <OptionForm showModal={STATE.form === "OPTION"} content={STATE.content} campaign_id={STATE.id} DISPATCH={DISPATCH} />}
            {STATE.form === "EDIT" && <EditForm showModal={STATE.form === 'EDIT'} campaign_id={STATE.id} DISPATCH={DISPATCH} />}

            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <SearchBar placeholder="Search by Campaign ID" SearchFunction={() => console.log('hello')} />
                        </div>

                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <Button text="Add Campaign" className="btn-sm margin-top-10" onClick={() => DISPATCH({ type: "ADD" })} />
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            {/* HEADER */}
            {
                !CAMPAIGN_STATE.content_loading ?
                    <>
                        <section className='content'>
                            <div class="container-fluid">
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className="card">
                                            <div className="card-header">
                                                <h3 className="card-title">Campaign Details</h3>
                                            </div>
                                            <div className="card-body table-scroll">
                                                <div id="example2_wrapper" className="dataTables_wrapper dt-bootstrap4"><div className="row"><div className="col-sm-12 col-md-6" /><div className="col-sm-12 col-md-6" /></div><div className="row"><div className="col-sm-12"><table id="example2" className="table table-bordered table-hover dataTable dtr-inline" aria-describedby="example2_info">
                                                    <thead>

                                                        <tr>
                                                            {Campaign.header.map(element => <THead text={element} key={`tabl-header-${element}`} />)}
                                                        </tr>

                                                    </thead>

                                                    <tbody>
                                                        {CAMPAIGN_STATE && CAMPAIGN_STATE.content?.length > 0 && CAMPAIGN_STATE.content.map((element, index) => (
                                                            <tr className={index % 2 === 0 ? "even" : "odd"} key={element.id}>
                                                                <td className="sorting_1 dtr-control" tabIndex={0}>
                                                                    {element["campaign_name"]}
                                                                </td>
                                                                <td>{element["Payout"]}</td>
                                                                <td>{element["Advertiser"]}</td>
                                                                <td>{element['Status']}</td>

                                                                <td>
                                                                    <ActionButton actionList={ACTION_LIST(element)} />
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                                </div>
                                                </div>
                                                </div>
                                            </div>
                                            {/* <Pagenation TOTAL={EMPLOYEE_STATE.total_count} SET_PAGE={SET_PAGE} CURRENT_PAGE={PAGE} /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </> :
                    <>
                        <RiLoader2Fill className='content-loader loader' />
                    </>
            }
        </>
    )
}

