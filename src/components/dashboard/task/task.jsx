import React, { useEffect, useState } from 'react'
import Button from '../../../layouts/form/button'
import THead from '../../../layouts/table/table-header'
import Task from "../../../assets/task.json"
import ActionButton from '../../../layouts/table/action-button'
import SearchBar from '../../../layouts/table/search-bar'
import Form from './create-form'
import Pagenation from '../../../layouts/table/pagenation'
import { useSelector } from 'react-redux'

export default function TASK() {
  const [INDEX, SETINDEX] = useState(0);
  const [showModal, toggleModal] = useState(false);
  const TASK_STATE = useSelector(state => state.Task)
  return (
    <>
      <Form showModal={showModal} toggleModal={toggleModal} />

      <div className="card">
        <div className="card-header">
          <div className="card-title" style={{ width: "260px" }} >
            <SearchBar />
          </div>
          <div className="card-tools">
            <Button text="Add  Task" className="btn-sm" onClick={() => toggleModal(true)} />
          </div>
        </div>

        {/* table */}
        <div className="card-body table-scroll">
          <div id="example2_wrapper" className="dataTables_wrapper dt-bootstrap4">

            <div className="row">
              <div className="col-sm-12">
                <table id="example2" className="table table-bordered table-hover dataTable dtr-inline" aria-describedby="example2_info">
                  <thead>
                    {
                      Task.header.map(element => <THead text={element} key={`tabl-header-${element}`} />)
                    }
                  </thead>
                  <tbody>


                    {
                      TASK_STATE.content.slice(INDEX, INDEX + 10).map((element, index) => {
                        if (index % 2 === 0) {
                          return (
                            <>
                              <tr className="odd">
                                <td className="sorting_1 dtr-control" tabIndex={0}>{element.title}</td>
                                <td>{element.assig_by}</td>
                                <td>{element.priority}</td>
                                <td>{element.due_date}</td>
                                <td>{element.status}</td>
                                <td>{element.options}</td>
                                <td><ActionButton /></td>
                              </tr>
                            </>)
                        }
                        else {
                          return (
                            <>
                              <tr className="odd">
                                <td className="sorting_1 dtr-control" tabIndex={0}>{element.title}</td>
                                <td>{element.assig_by}</td>
                                <td>{element.priority}</td>
                                <td>{element.due_date}</td>
                                <td>{element.status}</td>
                                <td>{element.options}</td>
                                <td><ActionButton /></td>
                              </tr>
                            </>)
                        }
                      })
                    }



                  </tbody>
                  {/* <tfoot>
                    {
                      Task.header.map(element => <THead text={element} key={`tabl-header-${element}`} />)
                    }
                  </tfoot> */}
                </table>

              </div>
            </div>
          </div>
        </div>

        {/* table */}


        <Pagenation STATE_CONTENT={TASK_STATE.content} TOGGLE_INDEX={SETINDEX} />

      </div >
    </>
  )
}
