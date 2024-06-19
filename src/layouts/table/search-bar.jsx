import React, { forwardRef } from 'react'

const SearchBar = forwardRef(({ SearchFunction, placeholder }, ref) => {
    return (
        <div className="input-group input-group-sm">
            <input ref={ref} type="text" placeholder={placeholder} className="form-control" fdprocessedid="99y5lc" />
            <span className="input-group-append">
                <button type="button" onClick={() => { SearchFunction() }} className="btn btn-primary" fdprocessedid="aw1205">Search</button>
            </span>
        </div>
    )
})


export default SearchBar;