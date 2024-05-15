import React from 'react'

export default function MultiSelect() {
    return (
        <div className="form-group" data-select2-id={53}>
            <label>Multiple</label>
            <select
                className="select2 select2-hidden-accessible"
                multiple=""
                data-placeholder="Select a State"
                style={{ width: "100%" }}
                data-select2-id={7}
                tabIndex={-1}
                aria-hidden="true"
            >
                <option data-select2-id={55}>Alabama</option>
                <option data-select2-id={56}>Alaska</option>
                <option data-select2-id={57}>California</option>
                <option data-select2-id={58}>Delaware</option>
                <option data-select2-id={59}>Tennessee</option>
                <option data-select2-id={60}>Texas</option>
                <option data-select2-id={61}>Washington</option>
            </select>
            <span
                className="select2 select2-container select2-container--default select2-container--below"
                dir="ltr"
                data-select2-id={8}
                style={{ width: "100%" }}
            >
                <span className="selection">
                    <span
                        className="select2-selection select2-selection--multiple"
                        role="combobox"
                        aria-haspopup="true"
                        aria-expanded="false"
                        tabIndex={-1}
                        aria-disabled="false"
                    >
                        <ul className="select2-selection__rendered">
                            <li
                                className="select2-selection__choice"
                                title="California"
                                data-select2-id={65}
                            >
                                <span
                                    className="select2-selection__choice__remove"
                                    role="presentation"
                                >
                                    ×
                                </span>
                                California
                            </li>
                            <li
                                className="select2-selection__choice"
                                title="Tennessee"
                                data-select2-id={66}
                            >
                                <span
                                    className="select2-selection__choice__remove"
                                    role="presentation"
                                >
                                    ×
                                </span>
                                Tennessee
                            </li>
                            <li className="select2-search select2-search--inline">
                                <input
                                    className="select2-search__field"
                                    type="search"
                                    tabIndex={0}
                                    autoComplete="off"
                                    autoCorrect="off"
                                    autoCapitalize="none"
                                    spellCheck="false"
                                    role="searchbox"
                                    aria-autocomplete="list"
                                    placeholder=""
                                    style={{ width: "0.75em" }}
                                />
                            </li>
                        </ul>
                    </span>
                </span>
                <span className="dropdown-wrapper" aria-hidden="true" />
            </span>
        </div>

    )
}
