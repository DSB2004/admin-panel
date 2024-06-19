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
        console.log(action)
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
        return state;
    }

    // const [INDEX, SETINDEX] = useState(0);

    const [STATE, DISPATCH] = useReducer(reducer, { id: null, form: null, content: null })
    const CAMPAIGN_STATE = useSelector(state => state.Campaign);

    // const CONTENT



    const ACTION_LIST = (element) => [
        { content: "Doable", onClick: () => DISPATCH({ type: "OPTION", subContent: "Doable", id: element.id }) },
        { content: "Doable at Condition", onClick: () => DISPATCH({ type: "OPTION", subContent: "Doable at condition", id: element.id }) },
        { content: "Not Doable", onClick: () => DISPATCH({ type: "OPTION", subContent: "Not Doable", id: element.id }) },
        { content: "Edit", onClick: () => DISPATCH({ type: "EDIT", id: element.id }) },
        { content: "Integrate", onClick: () => DISPATCH({ type: "OPTION", subContent: "Integrate", id: element.id }) },
    ]



    return (
        <>


            <CreateForm showModal={STATE.form === "ADD"} DISPATCH={DISPATCH} />
            <EditForm showModal={STATE.form === 'EDIT'} campaign_id={STATE.id} DISPATCH={DISPATCH} />
            <OptionForm showModal={STATE.form === "OPTION"} content={STATE.content} campaign_id={STATE.id} DISPATCH={DISPATCH} />
            <ViewCampaign showModal={STATE.form === "VIEW"} campaign_id={STATE.id} DISPATCH={DISPATCH} />

            < div className="card table-card" >

                <div className="card-header">
                    <div className="card-title" style={{ width: "260px" }} >
                        <SearchBar placeholder="Search by Campaign ID" />
                    </div>
                    <div className="card-tools">
                        <Button text="Add Campaign" className="btn-sm" onClick={() => DISPATCH({ type: "ADD" })} />
                    </div>
                </div>

                {
                    !CAMPAIGN_STATE.content_loading ? <>
                        <div className="card-body table-scroll">
                            <div id="example2_wrapper" className="dataTables_wrapper dt-bootstrap4">

                                <div className="row">
                                    <div className="col-sm-12">
                                        <table id="example2" className="table table-bordered table-hover dataTable dtr-inline" aria-describedby="example2_info">
                                            <thead>
                                                {
                                                    Campaign.header.map(element => <THead text={element} key={`tabl-header-${element}`} />)
                                                }
                                            </thead>
                                            <tbody>


                                                {
                                                    CAMPAIGN_STATE.content.map((element, index) => {
                                                        return (
                                                            <>
                                                                <tr className="odd">
                                                                    <td className="sorting_1 dtr-control" tabIndex={0} onClick={() => DISPATCH({ type: "VIEW" })} >
                                                                        {element.campaign_name}</td>
                                                                    <td>{element.Payout}</td>
                                                                    <td>{element.Advertiser}</td>
                                                                    <td>{element.Status}</td>
                                                                    <td className="sorting_1 dtr-control">
                                                                        <ActionButton
                                                                            actionList={ACTION_LIST(element)} />
                                                                    </td>


                                                                </tr>
                                                            </>)
                                                    }
                                                    )
                                                }



                                            </tbody>

                                        </table>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </> :
                        <>
                            <RiLoader2Fill className='content-loader loader' />
                        </>
                }



            </div >
        </>
    )
}
