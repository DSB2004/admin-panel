import { Dialog } from "@mui/material";
import Dropdown from "../../../layouts/form/dropdown";
import TextArea from "../../../layouts/form/text-area";
import Button from "../../../layouts/form/button";

const OptionForm = ({ showModal, DISPATCH, content }) => {
    return (
        <>
            <Dialog
                open={showModal}
                maxWidth="lg"
                sx={{
                    '& .MuiPaper-root': {
                        height: 'auto',
                        width: 550
                    },
                }}
            >
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
                        <h3 className="option-label"> {content}</h3>

                        {
                            content === 'Doable at condition' ?
                                <>
                                    <div className="row">
                                        <TextArea rows={4} placeholder="Condition... " />
                                    </div>
                                    <br />
                                </>
                                :
                                <>
                                </>
                        }
                        <div className="row">
                            <TextArea rows={4} placeholder="Any Comments... (optional)" />
                        </div>
                        <br />
                        <Button text="Update Task"></Button>
                    </div>
                </div>
            </Dialog>
        </>
    )
}

export default OptionForm;