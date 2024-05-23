import React, { forwardRef, useEffect, useState } from 'react';
import style from "./style.module.css";
import { FaCaretDown } from "react-icons/fa";

const Dropdown = forwardRef(({ label, options = [], onChange }) => {
  const [showSelect, toggleSelect] = useState(false);
  const [selectedVal, setSelectedVal] = useState("Select " + label);
  const [searchVal, setSearchVal] = useState("");
  useEffect(() => {
    if (onChange) {
      onChange(selectedVal)
    }
    toggleSelect(false)
  }, [selectedVal])
  return (
    <div className={`form-group`} style={{ marginBottom: '10px' }}>
      <label>{label}</label>
      <div className={`form-control ${style.relative}`} onClick={() => toggleSelect(!showSelect)}>
        {selectedVal}
        <FaCaretDown className={style.toggleBtn} />
      </div>
      {showSelect && (
        <div className={style.select_wrapper}>
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            onChange={(e) => setSearchVal(e.target.value)}
            value={searchVal}
          />

          <div className={style.option_wrapper}>
            {
              options.filter(option =>
                option.label.toLowerCase().includes(searchVal.toLowerCase())
              ).map((element, index) => (
                <div
                  key={index}
                  className={style.option}
                  onClick={() => {
                    setSelectedVal(element.value);
                    setSearchVal("");
                  }}
                >
                  {element.label}
                </div>
              ))
            }
          </div>

        </div>
      )}
    </div>
  );
});

export default Dropdown;
