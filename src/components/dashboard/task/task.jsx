import React, { useEffect, useState } from 'react'
import Button from '../../../layouts/form/button'
import THead from '../../../layouts/table/table-header'
import Task from "../../../assets/task.json"
import TaskRow from '../../../layouts/table/task-row'
import Form from './form'
import Pagenation from "../../common/pagenation"
import { useSelector } from 'react-redux'

export default function TASK() {
    const [INDEX, SETINDEX] = useState(0);
    const [showModal, toggleModal] = useState(false);
    const TASK_STATE = useSelector(state => state.Task)
    return (
        <>
            <Form showModal={showModal} toggleModal={toggleModal} />
                        <Button text="Add More Task" className="btn-sm" onClick={() => toggleModal(true)} />
           
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">DataTable with minimal features &amp; hover style</h3>
        </div>
        <div className="card-body">
          <div id="example2_wrapper" className="dataTables_wrapper dt-bootstrap4"><div className="row"><div className="col-sm-12 col-md-6" /><div className="col-sm-12 col-md-6" /></div><div className="row"><div className="col-sm-12"><table id="example2" className="table table-bordered table-hover dataTable dtr-inline" aria-describedby="example2_info">
                  <thead>
                    <tr><th className="sorting sorting_asc" tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">Rendering engine</th><th className="sorting" tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1} aria-label="Browser: activate to sort column ascending">Browser</th><th className="sorting" tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1} aria-label="Platform(s): activate to sort column ascending">Platform(s)</th><th className="sorting" tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1} aria-label="Engine version: activate to sort column ascending">Engine version</th><th className="sorting" tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1} aria-label="CSS grade: activate to sort column ascending">CSS grade</th></tr>
                  </thead>
                  <tbody>
                    <tr className="odd">
                      <td className="sorting_1 dtr-control" tabIndex={0}>Presto</td>
                      <td>Nintendo DS browser</td>
                      <td>Nintendo DS</td>
                      <td>8.5</td>
                      <td>C/A<sup>1</sup></td>
                    </tr><tr className="even">
                      <td className="sorting_1 dtr-control" tabIndex={0}>Tasman</td>
                      <td>Internet Explorer 4.5</td>
                      <td>Mac OS 8-9</td>
                      <td>-</td>
                      <td>X</td>
                    </tr><tr className="odd">
                      <td className="sorting_1 dtr-control" tabIndex={0}>Tasman</td>
                      <td>Internet Explorer 5.1</td>
                      <td>Mac OS 7.6-9</td>
                      <td>1</td>
                      <td>C</td>
                    </tr><tr className="even">
                      <td className="sorting_1 dtr-control" tabIndex={0}>Tasman</td>
                      <td>Internet Explorer 5.2</td>
                      <td>Mac OS 8-X</td>
                      <td>1</td>
                      <td>C</td>
                    </tr><tr className="odd">
                      <td className="dtr-control sorting_1" tabIndex={0}>Trident</td>
                      <td>Internet
                        Explorer 4.0
                      </td>
                      <td>Win 95+</td>
                      <td> 4</td>
                      <td>X</td>
                    </tr><tr className="even">
                      <td className="dtr-control sorting_1" tabIndex={0}>Trident</td>
                      <td>Internet
                        Explorer 5.0
                      </td>
                      <td>Win 95+</td>
                      <td>5</td>
                      <td>C</td>
                    </tr><tr className="odd">
                      <td className="dtr-control sorting_1" tabIndex={0}>Trident</td>
                      <td>Internet
                        Explorer 5.5
                      </td>
                      <td>Win 95+</td>
                      <td>5.5</td>
                      <td>A</td>
                    </tr><tr className="even">
                      <td className="dtr-control sorting_1" tabIndex={0}>Trident</td>
                      <td>Internet
                        Explorer 6
                      </td>
                      <td>Win 98+</td>
                      <td>6</td>
                      <td>A</td>
                    </tr><tr className="odd">
                      <td className="dtr-control sorting_1" tabIndex={0}>Trident</td>
                      <td>Internet Explorer 7</td>
                      <td>Win XP SP2+</td>
                      <td>7</td>
                      <td>A</td>
                    </tr><tr className="even">
                      <td className="dtr-control sorting_1" tabIndex={0}>Trident</td>
                      <td>AOL browser (AOL desktop)</td>
                      <td>Win XP</td>
                      <td>6</td>
                      <td>A</td>
                    </tr></tbody>
                  <tfoot>
                    <tr><th rowSpan={1} colSpan={1}>Rendering engine</th><th rowSpan={1} colSpan={1}>Browser</th><th rowSpan={1} colSpan={1}>Platform(s)</th><th rowSpan={1} colSpan={1}>Engine version</th><th rowSpan={1} colSpan={1}>CSS grade</th></tr>
                  </tfoot>
                </table></div></div><div className="row"><div className="col-sm-12 col-md-5"><div className="dataTables_info" id="example2_info" role="status" aria-live="polite">Showing 41 to 50 of 57 entries</div></div><div className="col-sm-12 col-md-7"><div className="dataTables_paginate paging_simple_numbers" id="example2_paginate"><ul className="pagination"><li className="paginate_button page-item previous" id="example2_previous"><a href="#" aria-controls="example2" data-dt-idx={0} tabIndex={0} className="page-link">Previous</a></li><li className="paginate_button page-item "><a href="#" aria-controls="example2" data-dt-idx={1} tabIndex={0} className="page-link">1</a></li><li className="paginate_button page-item "><a href="#" aria-controls="example2" data-dt-idx={2} tabIndex={0} className="page-link">2</a></li><li className="paginate_button page-item "><a href="#" aria-controls="example2" data-dt-idx={3} tabIndex={0} className="page-link">3</a></li><li className="paginate_button page-item "><a href="#" aria-controls="example2" data-dt-idx={4} tabIndex={0} className="page-link">4</a></li><li className="paginate_button page-item active"><a href="#" aria-controls="example2" data-dt-idx={5} tabIndex={0} className="page-link">5</a></li><li className="paginate_button page-item "><a href="#" aria-controls="example2" data-dt-idx={6} tabIndex={0} className="page-link">6</a></li><li className="paginate_button page-item next" id="example2_next"><a href="#" aria-controls="example2" data-dt-idx={7} tabIndex={0} className="page-link">Next</a></li></ul></div></div></div></div>
        </div>
      </div>
        </>
    )
}
