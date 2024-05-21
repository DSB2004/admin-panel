import React from 'react'

export default function Text({ placeholder, icon, ref }) {
    return (
        <div className="input-group mb-3">
            <input
                type="text"
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
}
