import React from 'react'

export default function Button({ text, onClick, style, className, type, disable }) {
    return (
        <button
            onClick={() => {

                if (onClick) {
                    onClick();
                }
            }
            }
            style={style}
            disabled={disable}
            type={type ? type : "button"}
            class={`${className} btn ${disable ? '' : 'btn-primary'} btn-block`}
            fdprocessedid="chtrn">
            {text}
        </button>
    )
}
