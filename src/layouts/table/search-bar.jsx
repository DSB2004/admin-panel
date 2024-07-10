import React, { useEffect, useState } from 'react'
import "../../style/suggestion.css"
const SearchBar = ({
    dropdownOption,
    handleSearch,
    suggesstionFunction
}) => {


    // the search val should be a string or number always as it is use to pass the required value from the auto suggestion 

    const [searchVal, setSearchVal] = useState("");

    // this input val is used for getting data from input bar of search

    const [inputVal, updateInputVal] = useState("");
    // use to set all the possible suggesstion given by the auto suggestion function
    const [possible, setPossible] = useState([]);


    //  default case
    //  use to set the cases for auto suggestion to provide output 
    // always followes this object structure for searching 
    //  for reference (/assets/employee.json) check the search_key object 
    const [searchType, setSearchType] = useState(
        {
            "label": "All",
            "key": "all",
            "placeholder": "Showing all results ..."
        }
    );


    //  use to call the search function from parent
    //  component to make the search api call
    const makeSearch = () => {
        setPossible([])
        if (handleSearch) {
            if (searchType?.key === 'all') {
                handleSearch({});
            }
            else if (searchType?.key && searchVal !== '') {
                handleSearch({ key: searchType?.key, value: searchVal });
            }
            else {
                console.log("Provide search key")
            }
        }
    };


    //  use to call the auto suggestion function
    // always keep this async as the 
    // suggesstion function might have to call an backend api for data
    const handleChange = async (type, value) => {
        if (typeof (suggesstionFunction) === 'function') {
            const result = await suggesstionFunction({ type, value });
            setPossible(result)
        }
    }


    //  handle change event for searchType  and searchVal 
    // implement a throttling effect to reduce the suggestion overhead

    useEffect(() => {
        if (searchType.key === undefined || searchType.key === 'all') {
            setPossible([])
            updateInputVal("")
        }
        const Event = setTimeout(() => {

            handleChange(searchType?.key, inputVal);
        }, 500)
        return () => clearTimeout(Event);
    }
        , [inputVal, searchType])



    return (
        <>
            <div className="input-group input-group-sm relative" >
                <div className="btn-group border-none" title='Search By'>
                    <button type="button" className="btn btn-sm btn-default dropdown-toggle dropdown-icon" data-toggle="dropdown" aria-expanded="false">
                    </button>
                    <div className="dropdown-menu" style={{}}>
                        {
                            dropdownOption?.map((ele, index) =>
                                <div className="dropdown-item" key={'search-bar' + index} href="#"
                                    onClick={() => setSearchType(ele)}
                                >{ele.label}</div>
                            )
                        }
                    </div>
                </div>


                <input
                    disabled={searchType.key === "all"}
                    type="text"
                    onChange={(e) => updateInputVal(e.target.value)}
                    placeholder={searchType?.placeholder}
                    className="form-control"
                    value={inputVal}
                    fdprocessedid="99y5lc"
                />


                <span className="input-group-append">
                    <button type="button"
                        // disabled={ }
                        onClick={() => {
                            makeSearch()
                        }} className="btn btn-primary" fdprocessedid="aw1205">Search</button>
                </span>

                <div className='suggestion'>
                    {
                        possible.map((ele, index) => <div
                            key={"suggestion-key-" + index}
                            className="suggestion-div"
                            onClick={() => {
                                setSearchVal(ele.value)
                                updateInputVal(ele.label)
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