import React, { useEffect, useReducer, useState } from 'react'
import Button from '../../../layouts/form/button'
import THead from '../../../layouts/table/table-header'
import Campaign from "../../../assets/campaign.json"
import CampaignRow from '../../../layouts/table/campaign-row'
import Pagenation from '../../../layouts/table/pagenation'
import { useSelector } from 'react-redux'

import CreateForm from './create-form'
import UpdateForm from './update-form'
import ViewCampaign from './view-campaign'


export default function TASK() {

    const reducer = (state, action) => {
        const { type, payload } = action
        if (type === "VIEW") {
            return { id: payload, form: "VIEW" }
        }
        else if (type === "ADD") {
            return { form: "ADD", id: null }
        }
        else if (type === "UPDATE") {
            return { id: payload, form: "UPDATE" }
        }
        else if (type === "CLOSE") {
            return { id: null, form: null }
        }
        return state;
    }
    const [INDEX, SETINDEX] = useState(0);
    const [STATE, DISPATCH] = useReducer(reducer, { id: null, form: null })
    const CAMPAIGN_STATE = useSelector(state => state.Campaign);



    return (
        <>


            <CreateForm showModal={STATE.form === "ADD"} DISPATCH={DISPATCH} />
            <UpdateForm showModal={STATE.form === "UPDATE"} id={STATE.id} DISPATCH={DISPATCH} />
            <ViewCampaign showModal={STATE.form === "VIEW"} id={STATE.id} DISPATCH={DISPATCH} />

            <div className="card">

                <div className="card-header">
                    <h3 className="card-title">Campaign Table</h3>
                    <div className="card-tools">
                        <Button text="Add  Campaign" className="btn-sm" onClick={() => DISPATCH({ type: "ADD" })} />
                    </div>
                </div>

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
                                            CAMPAIGN_STATE.content.slice(INDEX, INDEX + 10).map((element, index) => {
                                                if (index % 2 === 0) {
                                                    return (
                                                        <>
                                                            <tr className="odd">
                                                                <td className="sorting_1 dtr-control" tabIndex={0}>
                                                                    {element.campaign_name}</td>
                                                                <td>{element.Payout}</td>
                                                                <td>{element.Advertiser}</td>
                                                                <td>{element.Status}</td>
                                                                {/* <td>{element.Description}</td> */}

                                                            </tr>
                                                        </>)
                                                }
                                                else {
                                                    return (
                                                        <>
                                                            <tr className="odd">
                                                                <td className="sorting_1 dtr-control" tabIndex={0}>
                                                                    {element.campaign_name}</td>
                                                                <td>{element.Payout}</td>
                                                                <td>{element.Advertiser}</td>
                                                                <td>{element.Status}</td>
                                                                {/* <td>{element.Description}</td> */}

                                                            </tr>
                                                        </>)
                                                }
                                            })
                                        }



                                    </tbody>
                                    {/* <tfoot>
                                        {
                                            Campaign.header.map(element => <THead text={element} key={`tabl-header-${element}`} />)
                                        }
                                    </tfoot> */}
                                </table>

                            </div>
                        </div>
                    </div>
                </div>

                <Pagenation STATE_CONTENT={CAMPAIGN_STATE.content} TOGGLE_INDEX={SETINDEX} />

            </div >
        </>
    )
}
