import React from 'react'

export default function Button({ text, onClick, className, type }) {
    return (
        <button
            onClick={() => {

                if (onClick) {
                    onClick();
                }
            }
            }
            type={type ? type : "button"} class={`${className} btn btn-primary btn-block`}
            fdprocessedid="chtrn">
            {text}
        </button>
    )
}
