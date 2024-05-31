import React, { useEffect, useReducer } from 'react'
import PageBtn from '../../layouts/table/page_btn'
export default function Pagenation123({ changeIndex, STATE }) {
    const reducer = (state, action) => {
        const { type, payload } = action;
        switch (type) {
            case "ADD":
                const addResult = state + payload * 10;
                return addResult < STATE.length ? addResult : state;
            case "SUB":
                const subResult = state - payload * 10;
                return subResult >= 0 ? subResult : state;
            case "SET":
                const setResult = payload * 10;
                return setResult;
            default:
                return state;
        }
    }
    const [INDEX, DISPATCH] = useReducer(reducer, 0);
    useEffect(() => changeIndex(INDEX), [INDEX])
    return (
        <div className='pagenation_div'>

            <PageBtn onClick={() => DISPATCH({ type: "SUB", payload: 1 })}
            >
                Previous
            </PageBtn>
            <PageBtn>
                {Math.floor(INDEX / 10) + 1}

            </PageBtn>
            {
                (Math.floor(INDEX / 10) + 1) === (Math.floor(STATE.length / 10) + 1) ?
                    <></> :
                    <>
                        <PageBtn onClick={() => DISPATCH({ type: "ADD", payload: 1 })}
                        >
                            {Math.floor(INDEX / 10) + 2}
                        </PageBtn>
                        <PageBtn
                        >
                            ......
                        </PageBtn>
                        <PageBtn onClick={() => DISPATCH({ type: "SET", payload: Math.floor(STATE.length / 10) })}
                        >
                            {Math.floor(STATE.length / 10) + 1}
                        </PageBtn>
                    </>
            }
            <PageBtn onClick={() => DISPATCH({ type: "ADD", payload: 1 })}>
                Next
            </PageBtn>

        </div>
    )
}
