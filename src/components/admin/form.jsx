import React from 'react'
import Dropdown from "../../layouts/form/dropdown"
import Input from '../../layouts/form/input'
import TextArea from '../../layouts/form/text-area'
import MultiSelect from '../../layouts/form/multi-select'
import Button from '../../layouts/form/button'
// import Dropdown from '../../layouts/form/dropdown'

export default function Form({ display, toggleDisplay }) {
    return (
        <>
            <div className='form-pop-up' style={{ display: display ? "block" : "none" }}>
                <div className="card card-default">
                    <div className="card-header">
                        <h3 className="card-title">Add More Take</h3>
                        <div className="card-tools">
                            <button
                                type="button"
                                className="btn btn-tool visible"
                                onClick={() => { toggleDisplay(false) }}
                                fdprocessedid="kxhf0x"
                            >
                                <i className="fas fa-times" />
                            </button>
                        </div>
                    </div>
                    {/* /.card-header */}
                    <div className="card-body">
                        <Input label="Task Title" placeholder="Enter the task title..." type="text" />
                        <TextArea label="Description" placeholder="Enter the description..." rows={5} />
                        <div className="row">
                            <div className="col-md-6">
                                <Input label="Start Date" placeholder="Enter the start date..." type="date" />
                            </div>
                            <div className="col-md-6">

                                <Input label="End Date" placeholder="Enter the end date..." type="date" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <Dropdown label="Status" option={[]} />
                            </div>
                            <div className="col-md-6">
                                <Dropdown label="Status" option={[]} />
                            </div>
                        </div>
                        <div className="flex-center">
                            <Button text="Submit" onClick={() => console.log("Hello World")} />
                        </div>
                    </div>
                </div>

            </div >

            {/* </div > */}
        </>
    )
}
