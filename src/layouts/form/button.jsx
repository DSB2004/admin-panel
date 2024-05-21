import React from 'react'

export default function Button({ text, onClick, className }) {
    return (
        <button
            onClick={() => {

                if (onClick) {
                    onClick();
                }
            }
            }
            type="button" class={`${className} btn btn-primary btn-block`} fdprocessedid="chtrn">
            {text}
        </button>
    )
}
