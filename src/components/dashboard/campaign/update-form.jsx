import React from 'react'
import { Dialog } from '@mui/material'
export default function UpdateForm({ showModal, id, DISPATCH }) {
    return (
        <Dialog
            open={showModal}
            maxWidth="lg"
            sx={{
                '& .MuiPaper-root': {
                    width: '80%',
                    height: 650,
                    maxWidth: 'none'
                },
            }}>

            <div className="card card-default">
                <div className="card-header">
                    <h3 className="card-title">Update Campaign</h3>
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
            </div>
        </Dialog>
    )
}
