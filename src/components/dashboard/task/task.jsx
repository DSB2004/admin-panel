import React, { useEffect, useReducer, useState } from 'react'
import Button from '../../../layouts/form/button'
import THead from '../../../layouts/table/table-header'
import Task from "../../../assets/task.json"
import ActionButton from '../../../layouts/table/action-button'
import SearchBar from '../../../layouts/table/search-bar'

import CreateForm from './create-form'
import EditForm from './edit-form'
import Pagenation from '../../../layouts/table/pagenation'
import { useSelector } from 'react-redux'

export default function TASK() {
  const [INDEX, SETINDEX] = useState(0);
  const TASK_STATE = useSelector(state => state.Task);
  const reducer = (state, action) => {
    const { type, id } = action;
    if (type === "VIEW") {
      return { id: id, type: "VIEW" };
    } else if (type === "ADD") {
      return { id: null, type: "ADD" };
    } else if (type === "EDIT") {
      return { id: id, type: "EDIT" };
    } else if (type === "CLOSE") {
      return { id: null, type: null };
    }
    return state;
  };
  const ACTION_LIST = (ID) => [
    { content: "View", onClick: () => DISPATCH({ type: "VIEW", id: ID }) },
    { content: "Edit", onClick: () => DISPATCH({ type: "EDIT", id: ID }) },
    { content: "Mark As Completed", onClick: () => console.log("Mark As Completed") },
    { content: "Mark in Progress", onClick: () => console.log("Mark in Progress") },
    { content: "Delete", onClick: () => console.log("Delete") },

  ];
  const [STATE, DISPATCH] = useReducer(reducer, { id: null, type: null });
  return (
    <>
      {/* <Form showModal={showModal} toggleModal={toggleModal} /> */}
      <CreateForm showModal={STATE.type === "ADD"} toggleModal={() => DISPATCH({ type: "CLOSE" })} />
      <EditForm showModal={STATE.type === "EDIT"} task_id={STATE.id} toggleModal={() => DISPATCH({ type: "CLOSE" })} />

      <div className="card">
        <div className="card-header">
          <div className="card-title" style={{ width: "260px" }} >
            <SearchBar />
          </div>
          <div className="card-tools">
            <Button text="Add Task" className="btn-sm" onClick={() => DISPATCH({ type: "ADD" })} />
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
                                <td>
                                  <ActionButton actionList={ACTION_LIST(element.id)} />
                                </td>
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
                                <td>
                                  <ActionButton actionList={ACTION_LIST(element.id)} />
                                </td>
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
