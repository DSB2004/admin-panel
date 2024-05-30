import React, { useEffect, useReducer, useState } from 'react'
import Button from '../../../layouts/form/button'
import THead from '../../../layouts/table/table-header'
import Campaign from "../../../assets/campaign.json"
import CampaignRow from '../../../layouts/table/campaign-row'
import Pagenation from "../../common/pagenation"
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
                    <div className="card-tools">
                        <Button text="Add More Campaign" className="btn-sm"
                            onClick={() => DISPATCH({ type: "ADD" })}
                        />
                    </div>
                </div>
                <div className="card-body">
                    <div id="jsGrid1" className="jsgrid" >
                        <div className="jsgrid-grid-body scrollbar-hidden">
                            <table className="jsgrid-table table" >
                                <thead>
                                    {Campaign.header.map((element, index) => <THead width={Campaign.width[index]} text={element} key={`TABLE-HEADER-TASK-${index}`} />)}
                                </thead>
                                <tbody >
                                    {
                                        CAMPAIGN_STATE.content.slice(INDEX, INDEX + 10).map(
                                            element => {
                                                return <CampaignRow DISPATCH={DISPATCH} key={element.id} content={element} />
                                            }
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                        <Pagenation changeIndex={SETINDEX} STATE={CAMPAIGN_STATE.content} />
                    </div>
                </div>
            </div >
        </>
    )
}
