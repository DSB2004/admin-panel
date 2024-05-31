import React, { useReducer, useEffect } from 'react'

export default function Pagenation({ STATE_CONTENT, TOGGLE_INDEX }) {

    const reducer = (state, action) => {
        const { type, payload } = action;
        switch (type) {
            case "ADD":
                return state + payload < STATE_CONTENT.length ? state + payload : state;
            case "SUB":
                return state - payload >= 0 ? state - payload : 0;
            case "SET":
                return payload < STATE_CONTENT.length ? payload : state;
            default:
                return state;
        }
    }

    const [INDEX, DISPATCH] = useReducer(reducer, 0);

    useEffect(() => {
        TOGGLE_INDEX(INDEX);
    }, [INDEX]);
    return (

        <div className='pagenation_container'>

            <div className='pagenation_inner_container'>
                <p className="dataTables_info " id="example2_info" role="status" aria-live="polite">
                    Showing {INDEX + 1} to {Math.min(INDEX + 10, STATE_CONTENT.length)} of {STATE_CONTENT.length} entries
                </p>
            </div>

            <div className='pagenation_inner_container'>

                <ul className="pagination">
                    <li className="paginate_button page-item previous" id="example2_previous">
                        <div href="#" aria-controls="example2" data-dt-idx={0} tabIndex={0}
                            onClick={() => DISPATCH({ type: "SUB", payload: 10 })}
                            className="page-link">Previous</div>
                    </li>

                    <li className="paginate_button page-item active">
                        <div href="#" aria-controls="example2" data-dt-idx={1} tabIndex={0}
                            className="page-link">{Math.ceil(INDEX / 10 + 1)}
                        </div>
                    </li>

                    <li className="paginate_button page-item ">
                        <div href="#" aria-controls="example2" data-dt-idx={2} tabIndex={0}
                            onClick={() => DISPATCH({ type: "ADD", payload: 10 })}
                            className="page-link">
                            {Math.ceil(INDEX / 10 + 2) <= Math.ceil(STATE_CONTENT.length / 10 + 1) ?
                                <>
                                    {Math.ceil(INDEX / 10 + 2)}
                                </> :
                                <>
                                    _
                                </>
                            }
                        </div>
                    </li>

                    <li className="paginate_button page-item ">
                        <div href="#" aria-controls="example2" data-dt-idx={3} tabIndex={0} className="page-link">......</div>
                    </li>

                    <li className="paginate_button page-item ">
                        <div href="#" aria-controls="example2" data-dt-idx={4} tabIndex={0} className="page-link" onClick={() => DISPATCH({ type: "SET", payload: STATE_CONTENT.length - 10 })}>{Math.ceil(STATE_CONTENT.length / 10)}</div>
                    </li>

                    <li className="paginate_button page-item">
                        <div href="#" aria-controls="example2" data-dt-idx={5} tabIndex={0} className="page-link" onClick={() => DISPATCH({ type: "SET", payload: STATE_CONTENT.length - 1 })}>{Math.ceil(STATE_CONTENT.length / 10 + 1)}</div>
                    </li>


                    <li className="paginate_button page-item next" id="example2_next">
                        <div href="#" aria-controls="example2" data-dt-idx={7} tabIndex={0} className="page-link" onClick={() => DISPATCH({ type: "ADD", payload: 10 })}>Next</div>
                    </li>
                </ul >


            </div >

        </div >
    )
}
