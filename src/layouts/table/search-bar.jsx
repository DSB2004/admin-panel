import React, { forwardRef, useEffect, useState } from 'react'
import { EmployeeSearchSuggestion } from '../../utils/employee-auto-suggestion';

const SearchBar = ({
    dropdownOption,
    handleSearch
}) => {


    const [searchType, setSearchType] = useState({
        "label": "None",
        "placeholder": "First select a type for search ..."
    },);
    const [searchVal, setSearchVal] = useState("");
    const [possible, setPossible] = useState([]);


    const handleChange = async () => {
        const result = await EmployeeSearchSuggestion({ type: searchType?.key, val: searchVal?.label });
        setPossible(result)
    }



    useEffect(() => {
        if (searchType.key === undefined) {
            setPossible([])
            setSearchVal()
        }
        const Event = setTimeout(() => {
            if (searchVal?.label !== "" && searchType?.key !== undefined) {
                handleChange()
            }
        }, 500)
        return () => clearTimeout(Event);
    }
        , [searchVal, searchType])



    const makeSearch = () => {
        if (handleSearch) {
            if (searchType?.key && searchVal?.value) {
                setPossible([])
                handleSearch({ key: searchType?.key, value: searchVal?.value });
            }
            else {
                console.log("Provide search key")
            }
        }
    };



    return (
        <>
            <div className="input-group input-group-sm relative" >
                <div className="btn-group border-none" title='Search By'>
                    <button type="button" className="btn btn-sm btn-default dropdown-toggle dropdown-icon" data-toggle="dropdown" aria-expanded="false">
                    </button>
                    <div className="dropdown-menu" style={{}}>
                        {
                            dropdownOption?.map(ele =>
                                <div className="dropdown-item" href="#"
                                    onClick={() => setSearchType(ele)}
                                >{ele.label}</div>
                            )
                        }
                    </div>
                </div>

                <input
                    disabled={searchType.key === undefined}
                    type="text"
                    onChange={(e) => setSearchVal({ label: e.target.value, value: e.target.value })}
                    placeholder={searchType?.placeholder}
                    className="form-control"
                    value={searchVal?.label}
                    fdprocessedid="99y5lc"
                />


                <span className="input-group-append">
                    <button type="button" onClick={() => { makeSearch() }} className="btn btn-primary" fdprocessedid="aw1205">Search</button>
                </span>

                <div className='suggestion'>
                    {
                        possible.map(ele => <div
                            className="suggestion-div"
                            onClick={() => {
                                setSearchVal(ele)
                                setPossible([ele])
                            }
                            }
                        >{ele.label}</div>)
                    }


                </div>
            </div>

            <div className='margin-10-0'></div>
        </>
    )
}


export default SearchBar;