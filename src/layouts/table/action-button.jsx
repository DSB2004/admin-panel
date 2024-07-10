import React from "react";

const ActionButton = ({ actionList }) => {
    return (

        <div className="btn-group">
            <button type="button" className="btn btn-primary" fdprocessedid="t28amo">Action</button>
            <button type="button" className="btn btn-primary dropdown-toggle dropdown-icon" data-toggle="dropdown" fdprocessedid="t27eta" aria-expanded="false">
                <span className="sr-only">Toggle Dropdown</span>
            </button>
            <div className="dropdown-menu" role="menu" style={{}}>

                {actionList && actionList.map((element, index) =>
                    <div key={index} className="dropdown-item" onClick={() => {
                        if (element.onClick && typeof (element.onClick) === 'function') {
                            element.onClick();
                        }
                        else {
                            console.log("No function alloted");
                        }
                    }}>
                        {element.content}
                    </div>)
                }




            </div>
        </div>
    );
}


export default ActionButton;