import React from 'react';

const SelectComponent = () => {
    return (
        <div className="form-group" data-select2-id={29}>
            <label>Multiple</label>
            <select
                className="select2 select2-hidden-accessible"
                multiple
                data-placeholder="Select a State"
                style={{ width: "100%" }}
                data-select2-id={7}
                tabIndex={-1}
                aria-hidden="true"
            >
                <option data-select2-id={34}>Alabama</option>
                <option data-select2-id={35}>Alaska</option>
                <option data-select2-id={36}>California</option>
                <option data-select2-id={37}>Delaware</option>
                <option data-select2-id={38}>Tennessee</option>
                <option data-select2-id={39}>Texas</option>
                <option data-select2-id={40}>Washington</option>
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
                                data-select2-id={49}
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
                                data-select2-id={50}
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
    );
};

export default SelectComponent;
