import React, { forwardRef } from 'react'

const SearchBar = forwardRef((ref) => {
    return (
        <div className="input-group input-group-sm">
            <input type="text" placeholder="Search by ID..." className="form-control" fdprocessedid="99y5lc" />
            <span className="input-group-append">
                <button type="button" className="btn btn-primary" fdprocessedid="aw1205">Go!</button>
            </span>
        </div>
    )
})


export default SearchBar;