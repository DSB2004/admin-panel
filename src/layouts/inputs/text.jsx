import React, { forwardRef } from 'react'

const Text = forwardRef(({ placeholder, icon, type = "text" }, ref) => {
    return (
        <div className="input-group mb-3">
            <input
                type={type}
                ref={ref}
                className="form-control"
                placeholder={placeholder}
                fdprocessedid="tksub"
            />
            <div className="input-group-append">
                <div className="input-group-text">
                    {icon ? <>
                        {icon}
                    </> : <>

                        <span className="fas fa-lock" />
                    </>
                    }
                </div>
            </div>
        </div>
    )
})


export default Text;
