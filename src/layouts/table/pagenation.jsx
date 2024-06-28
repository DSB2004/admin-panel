import React, { useReducer, useEffect } from 'react'

export default function Pagenation({ TOTAL, CURRENT_PAGE, SET_PAGE }) {

    const handlePreviousClick = () => {
        SET_PAGE(Math.max(1, CURRENT_PAGE - 1));
    };

    const handleNextClick = () => {
        SET_PAGE(Math.min(Math.ceil(TOTAL / 10), CURRENT_PAGE + 1));
    };

    return (
        <div className='row'>

            <div class="col-sm-12 col-md-5">
                <p className="dataTables_info" id="example2_info" role="status" aria-live="polite">
                    Showing {(CURRENT_PAGE - 1) * 10 + 1} to {Math.min((CURRENT_PAGE - 1) * 10 + 10, TOTAL)} of {TOTAL} entries
                </p>
            </div>

            <div className='col-sm-12 col-md-7'>
                <div className="dataTables_paginate paging_simple_numbers">

                    <ul className="pagination">

                        <li className="paginate_button page-item previous">
                            <div
                                onClick={handlePreviousClick}
                                className="page-link"
                                tabIndex={0}
                            >
                                Previous
                            </div>
                        </li>



                        <li className={`paginate_button page-item ${CURRENT_PAGE === 1 ? 'active' : ''}`}><a href="#" aria-controls="example2" data-dt-idx={1} tabIndex={0} onClick={() => SET_PAGE(1)} className="page-link">1</a></li>

                        {
                            CURRENT_PAGE !== 1 && CURRENT_PAGE !== Math.ceil(TOTAL / 10) && CURRENT_PAGE - 1 !== 1 ? <>
                                <li className="paginate_button page-item"><a href="#" aria-controls="example2" data-dt-idx={1} tabIndex={0} onClick={() => SET_PAGE(CURRENT_PAGE - 1)} className="page-link">{CURRENT_PAGE - 1}</a></li>
                            </> :
                                <>

                                </>
                        }



                        {
                            CURRENT_PAGE !== 1 && CURRENT_PAGE !== Math.ceil(TOTAL / 10) ? <>
                                <li className="paginate_button page-item active"><a href="#" aria-controls="example2" data-dt-idx={1} tabIndex={0} onClick={() => SET_PAGE(CURRENT_PAGE)} className="page-link">{CURRENT_PAGE}</a></li>
                            </> :
                                <>
                                    <li className="paginate_button page-item"><a href="#" aria-controls="example2" data-dt-idx={1} tabIndex={0} className="page-link">...</a></li>
                                </>
                        }

                        {
                            CURRENT_PAGE !== 1 && CURRENT_PAGE !== Math.ceil(TOTAL / 10) && CURRENT_PAGE + 1 !== Math.ceil(TOTAL / 10) ? <>
                                <li className="paginate_button page-item"><a href="#" aria-controls="example2" data-dt-idx={1} tabIndex={0} onClick={() => SET_PAGE(CURRENT_PAGE + 1)} className="page-link">{CURRENT_PAGE + 1}</a></li>
                            </> :
                                <>

                                </>
                        }



                        <li className={`paginate_button page-item ${CURRENT_PAGE === Math.ceil(TOTAL / 10) ? 'active' : ''}`}><a href="#" aria-controls="example2" data-dt-idx={1} tabIndex={0} onClick={() => SET_PAGE(Math.ceil(TOTAL / 10))} className="page-link">{Math.ceil(TOTAL / 10)}</a></li>



                        <li className="paginate_button page-item next">
                            <div
                                onClick={handleNextClick}
                                className="page-link"
                                tabIndex={0}
                            >
                                Next
                            </div>
                        </li>
                    </ul>
                </div>
                {/* </div> */}
            </div >
        </div>
    )
}
