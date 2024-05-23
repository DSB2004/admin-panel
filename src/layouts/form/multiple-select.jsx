import React from 'react'

export default function MultipleSelect() {
    return (
        <div className="col-md-6">

            <div className="form-group">
                <label>Multiple</label>
                <select className="select2 select2-hidden-accessible" multiple data-placeholder="Select a State" style={{ width: '100%' }} data-select2-id={7} tabIndex={-1} aria-hidden="true">
                    <option>Alabama</option>
                    <option>Alaska</option>
                    <option>California</option>
                    <option>Delaware</option>
                    <option>Tennessee</option>
                    <option>Texas</option>
                    <option>Washington</option>
                </select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id={8} style={{ width: '100%' }}><span className="selection"><span className="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={-1} aria-disabled="false"><ul className="select2-selection__rendered"><li className="select2-search select2-search--inline"><input className="select2-search__field" type="search" tabIndex={0} autoComplete="off" autoCorrect="off" autoCapitalize="none" spellCheck="false" role="searchbox" aria-autocomplete="list" placeholder="Select a State" style={{ width: '578px' }} /></li></ul></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span>
            </div>
        </div>
    )
}
