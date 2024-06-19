import React, { useEffect, useState } from 'react'
import { Dialog } from '@mui/material'
import '../../../style/view-campaign.css'
import { useSelector } from 'react-redux'
import TextArea from '../../../layouts/form/text-editor';
import CAMPAIGN_CONTENT from "../../../assets/campaign.json"
import Comments from '../../../layouts/comments/comments';
import Button from '../../../layouts/form/button';
import Input from '../../../layouts/form/input'
import THead from '../../../layouts/table/table-header';


export default function ViewCampaign({ showModal, campaign_id, DISPATCH }) {

    const [val, setVal] = useState("");
    const description_style =
        { height: '400px', border: 'none', outline: 'none', overflowY: 'auto' }

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

            <div className="card card-default overflow-hidden">
                <div className="card-header">
                    <h3 className="card-title">View Campaign</h3>
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

                <div className="card-body view-campaign">

                    <div className='view-campaign-section larger'>
                        <h2 className='view-campaign-name'>{CAMPAIGN_CONTENT.test['campaign name']}</h2>
                        <h6 className='view-campaign-label'>Description</h6>
                        <div className='view-campaign-label'>
                            <TextArea
                                style={description_style}
                                readOnly={true}
                                modules={{ toolbar: false }}
                                value={CAMPAIGN_CONTENT.test.description} />

                        </div>

                        <h6 className='view-campaign-label'>Comments</h6>
                        <div className='view-campaign-label'>

                            <Input placeholder="Add a comment..."></Input>
                            <Button text="Submit"></Button>
                        </div>
                        <div className='comment-section'>

                            {
                                CAMPAIGN_CONTENT.comments.map(ele => <Comments content={ele} />)
                            }
                        </div>
                    </div>
                    <div className='view-campaign-section'>

                        <h6 className='view-campaign-label'>Details</h6>
                        <div className='campaign-description'>

                            <div className='campaign-description-container'>
                                <div className='campaign-description-key'>Name</div>
                                <div>{CAMPAIGN_CONTENT.test['campaign name']}</div>
                            </div>

                            <div className='campaign-description-container'>
                                <div className='campaign-description-key'>Platform</div>
                                <div>{CAMPAIGN_CONTENT.test.platform}</div>
                            </div>

                            <div className='campaign-description-container'>
                                <div className='campaign-description-key'>Advertiser</div>
                                <div>{CAMPAIGN_CONTENT.test.advertiser}</div>
                            </div>

                            <div className='campaign-description-container'>
                                <div className='campaign-description-key'>Payout</div>
                                <div>{CAMPAIGN_CONTENT.test.payout}</div>
                            </div>

                            <div className='campaign-description-container'>
                                <div className='campaign-description-key'>LP</div>
                                <div>{CAMPAIGN_CONTENT.test.lp}</div>
                            </div>


                        </div>
                        <div className='description-action'>
                            <Button text="Edit Task"></Button>
                            <Button text="Delete Task" className="btn-danger"></Button>
                        </div>
                    </div>
                </div>

            </div>
        </Dialog >
    )
}
