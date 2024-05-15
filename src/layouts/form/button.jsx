import React from 'react'

export default function Button({ text, onClick }) {
    console.log(text)
    return (
        <button
            onClick={() => {

                if (onClick) {
                    onClick();
                }
            }
            }
            type="button" class="btn btn-block btn-default btn-flat fit-content" fdprocessedid="chtrn">
            {text}
        </button>
    )
}
