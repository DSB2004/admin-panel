import React, { useEffect, useReducer, useState, useRef } from 'react'
import Button from '../../../layouts/form/button'
import THead from '../../../layouts/table/table-header'
import Task from "../../../assets/task.json"
import ActionButton from '../../../layouts/table/action-button'
import SearchBar from '../../../layouts/table/search-bar'
import { RiLoader2Fill } from "react-icons/ri";
import CreateForm from './create-form'
import EditForm from './edit-form'
import Pagenation from '../../../layouts/table/pagenation'
import { useSelector } from 'react-redux'
import ViewForm from './view-task'
import { VIEW_TASK } from '../../../provider/reducers/task.reducer'
import { useDispatch } from 'react-redux'
export default function TASK() {


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


  const DISPATCH_ACTION = useDispatch();

  const TASK_STATE = useSelector(state => state.Task);

  const ACTION_LIST = (id) => [
    { content: "View", onClick: () => DISPATCH({ type: "VIEW", id: id }) },
    { content: "Edit", onClick: () => DISPATCH({ type: "EDIT", id: id }) },
    { content: "Mark As Completed", onClick: () => console.log("Mark As Completed") },
    { content: "Mark in Progress", onClick: () => console.log("Mark in Progress") },
    { content: "Delete", onClick: () => console.log("Delete") },
  ];

  const [PAGE, SET_PAGE] = useState(1);
  const [STATE, DISPATCH] = useReducer(reducer, { id: null, type: null });
  const SearchID = useRef();
  const [loading, set_loading] = useState(false);
  const [CONTENT, SET_CONTENT] = useState(TASK_STATE.content);



  const handlePageChange = async (PAGE) => {
    if (PAGE) {
      set_loading(true);
      const CACHE_DATA = TASK_STATE.content.find(ele => ele.page === PAGE);
      if (!CACHE_DATA) {
        console.log('API called');
        try {
          const res = await DISPATCH_ACTION(VIEW_TASK({ PAGE })).unwrap();
          const { data } = res;
          SET_CONTENT(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      } else {
        SET_CONTENT(CACHE_DATA.data);
      }
      set_loading(false);
    }
  };

  useEffect(() => {
    handlePageChange(PAGE)
  }, [PAGE, TASK_STATE.content]);


  return (
    <>

      {
        STATE.type === "ADD" ? <>
          <CreateForm showModal={STATE.type === "ADD"} toggleModal={() => DISPATCH({ type: "CLOSE" })} />
        </> : <></>
      }
      {
        STATE.type === "VIEW" ? <>
          <ViewForm showModal={STATE.type === "VIEW"} DISPATCH={DISPATCH} task_id={STATE.id} />
        </> : <></>
      }
      {
        STATE.type === "EDIT" ? <>
          <EditForm showModal={STATE.type === "EDIT"} task_id={STATE.id} toggleModal={() => DISPATCH({ type: "CLOSE" })} />
        </> : <></>
      }
      {/* HEADER */}

      < section className="content-header" >
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <SearchBar placeholder="Search by Task ID" />
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <Button text="Add Task" className="btn-sm margin-top-10" onClick={() => DISPATCH({ type: "ADD" })} />
              </ol>
            </div>
          </div>
        </div>
      </section >

      {/* HEADER */}
      {
        !loading ?
          <>
            <section className='content overflow-content'>
              <div class="container-fluid">
                <div className='row'>
                  <div className='col-12'>
                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">Task Details</h3>
                      </div>
                      <div className="card-body table-scroll">
                        <div id="example2_wrapper" className="dataTables_wrapper dt-bootstrap4">
                          <div className="row">
                            <div className="col-sm-12 col-md-6" />
                            <div className="col-sm-12 col-md-6" />
                          </div>
                          <div className="row">
                            <div className="col-sm-12">
                              <table id="example2" className="table table-bordered table-hover dataTable dtr-inline" aria-describedby="example2_info">
                                <thead>

                                  <tr>
                                    {Task.header.map(element => <THead text={element} key={`tabl-header-${element}`} />)}
                                  </tr>

                                </thead>
                                <tbody>
                                  {CONTENT && CONTENT.length > 0 && CONTENT.map((element, index) => (
                                    <tr className={index % 2 === 0 ? "even" : "odd"} key={element.emp_id}>
                                      <td className="sorting_1 dtr-control" tabIndex={0}>
                                        {element["TaskTitle"]}
                                      </td>
                                      <td>{element["AssignedBy"]}</td>

                                      <td>{element['Priority']}</td>
                                      <td>{element["DueDate"]}</td>
                                      <td>{element['Status']}</td>
                                      <td>{element['Option']}
                                        <ActionButton actionList={ACTION_LIST(element['Task_Id'])} />

                                      </td>

                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <Pagenation TOTAL={TASK_STATE.total_count} SET_PAGE={SET_PAGE} CURRENT_PAGE={PAGE} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </> :
          <>
            <RiLoader2Fill className='content-loader loader' />
          </>
      }
    </>
  )
}

