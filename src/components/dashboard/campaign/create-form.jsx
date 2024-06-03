import React, { useRef } from 'react'
import { Dialog } from '@mui/material'
import Button from '../../../layouts/form/button'
import Input from '../../../layouts/form/input'
import Dropdown from '../../../layouts/form/dropdown'
import TextArea from '../../../layouts/form/text-area'
import CAMPAIGN_CONTENT from "../../../assets/campaign.json"
export default function CreateForm({ showModal, DISPATCH }) {
    const employee_name = useRef();
    const employee_id = useRef();
    const employee_email = useRef();
    const employee_password = useRef();
    const employee_designation = useRef();
    const employee_department = useRef();
    const employee_privation_period = useRef();


    return (
        <Dialog
            open={showModal}
            maxWidth="lg"
            fullScreen={true}
            fullWidth={true}
            sx={{
                '& .MuiPaper-root': {
                    width: '80%',
                    height: 650,
                    maxWidth: 'none'
                },
            }}>
            <div className="card card-default">
                <div className="card-header">
                    <h3 className="card-title">Add a new Campaign</h3>
                    <div className="card-tools">
                        <button
                            type="button"
                            className="btn btn-tool visible"
                            onClick={() => DISPATCH({ type: "CLOSE" })}
                            fdprocessedid="kxhf0x"
                        >
                            <i className="fas fa-times" />
                        </button>
                    </div>
                </div>
                <div className="card-body">

                    <Input ref={employee_id} label="Campaign Name" placeholder="Enter the campaign name..." type="text" />

                    <TextArea label="Description" placeholder="Enter description for campaign..." rows={6} />
                    <div className='row'>
                        <div className='col-md-6'>
                            <Input label="Advertiser" placeholder="Enter advertiser..." />
                        </div>
                        <div className='col-md-6'>
                            <Input label="Payout" placeholder="Enter Payout..." />
                        </div>
                        <div className='col-md-6'>
                            <Input label="LP" placeholder="Enter LP..." />
                        </div>
                        <div className='col-md-6'>
                            <Dropdown label="Platform" options={CAMPAIGN_CONTENT.platform} />
                        </div>
                    </div>


                    <div className="flex-center">
                        <Button text="Submit" onClick={() => DISPATCH({ type: "CLOSE" })} />
                    </div>
                </div>
            </div>
        </Dialog >
    )
}
