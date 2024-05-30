import React, { useEffect, useState } from 'react'
import { Dialog } from '@mui/material'
import { useSelector } from 'react-redux'
import TextArea from '../../../layouts/form/text-area';

export default function ViewCampaign({ showModal, id, DISPATCH }) {


    const CAMPAIGN_DATA = useSelector(state => state.Campaign.content.filter(element => element.id === id)[0]);
    useEffect(() => { console.log(CAMPAIGN_DATA) }, [CAMPAIGN_DATA])

    const [val, setVal] = useState("")

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

                    <div className="card-body">
                        <div>

                            <h1 className='view-campaign'>{CAMPAIGN_DATA && CAMPAIGN_DATA.campaign_name}</h1>
                            <h4 className='view-campaign'>Description</h4>
                            <p className='view-campaign'>{CAMPAIGN_DATA && CAMPAIGN_DATA.Description} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, culpa. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, cupiditate Pariatur, culpa. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, cupiditate.</p>


                            <h4 className='view-campaign'>Activity</h4>

                            <div className="container">
                                <div></div>
                                <TextArea placeholder="Add a comment" />
                            </div>

                            <div>
                                Testing testimony
                            </div>
                        </div>


                    </div>




                </div>
            </div>
        </Dialog>
    )
}
