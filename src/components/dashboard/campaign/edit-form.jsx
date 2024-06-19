import React, { useEffect, useRef, useState } from 'react'
import { Dialog } from '@mui/material'
import Button from '../../../layouts/form/button'
import Input from '../../../layouts/form/input'
import Dropdown from '../../../layouts/form/dropdown'
import TextArea from '../../../layouts/form/text-editor'
import CAMPAIGN_CONTENT from "../../../assets/campaign.json"
export default function EditForm({ showModal, campaign_id, DISPATCH }) {
    const campaign_name = useRef();
    const campaign_description = useRef();
    const campaign_advertiser = useRef();
    const campaign_payout = useRef();
    const campaign_platform = useRef();
    const campaign_lp = useRef();


    const [EDIT_CONTENT, SET_CONTENT] = useState();

    useEffect(() => {
        if (campaign_id) {

            const content = CAMPAIGN_CONTENT.test;
            // console.log(content)
            content['platform'] = CAMPAIGN_CONTENT.platform.filter(ele => ele.value === content['platform'])[0];
            console.log(content)
            SET_CONTENT(content)

        }
    }, [campaign_id])

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
                    <h3 className="card-title">Edit Campaign</h3>
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

                    <Input ref={campaign_name} value={EDIT_CONTENT && EDIT_CONTENT['campaign name']} label="Campaign Name" placeholder="Enter the campaign name..." type="text" />

                    <TextArea label="Description" ref={campaign_description} value={EDIT_CONTENT && EDIT_CONTENT['description']} placeholder="Enter description for campaign..." rows={6} />
                    <div className='row'>
                        <div className='col-md-6'>
                            <Input label="Advertiser" ref={campaign_advertiser} value={EDIT_CONTENT && EDIT_CONTENT['advertiser']} placeholder="Enter advertiser..." />
                        </div>
                        <div className='col-md-6'>
                            <Input label="Payout" ref={campaign_payout} value={EDIT_CONTENT && EDIT_CONTENT['payout']} placeholder="Enter Payout..." />
                        </div>
                        <div className='col-md-6'>
                            <Input ref={campaign_lp} label="LP" value={EDIT_CONTENT && EDIT_CONTENT['lp']} placeholder="Enter LP..." />
                        </div>
                        <div className='col-md-6'>
                            <Dropdown ref={campaign_platform} label="Platform" value={EDIT_CONTENT && EDIT_CONTENT['platform']} options={CAMPAIGN_CONTENT['platform']} />
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
