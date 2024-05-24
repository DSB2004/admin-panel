import React, { useEffect, useDeferredValue } from 'react'

export default function AutoSuggestion({ value }) {
    useEffect(() => {
        const Event = setTimeout(() => {
            console.log("API: ", value);
        }, 200)
        return () => clearTimeout(Event);
    }
        , [value])
    return (
        <div className='suggestion'>{value}</div>
    )
}
