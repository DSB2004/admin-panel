import React from 'react'
import USER from "../../assets/user.webp"
import "./comments.css"
export default function Comments({ content }) {
    return (
        <div className='comment'>
            <div className='comment-intro'>
                <img src={USER} alt="" className='comment-img' />
                <h5>
                    {content.username}
                </h5>
            </div>

            <p className='comment-content'>{content.comment}</p>

        </div>
    )
}
