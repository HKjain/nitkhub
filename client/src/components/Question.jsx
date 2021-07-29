import React, { useState } from 'react';
import Avatar from 'react-bootstrap-icons/dist/icons/person-circle'
import Bookmark from 'react-bootstrap-icons/dist/icons/bookmark-plus'
import BookmarkFill from 'react-bootstrap-icons/dist/icons/bookmark-plus-fill'

function Question({ question }) {

    const [isMarked, setIsMarked] = useState(false)


    return (
        <div className="question">
            <div className="question_head">
                <div className="details">
                    <Avatar size={45} className="sidebar_avatar" />
                    <div className="question_info">
                        <h4>{question.asked_by}</h4>
                        <p>{question.posted_on}</p>
                    </div>
                </div>
                <div className="bookmark_btn">
                    {
                        !isMarked &&
                        <Bookmark size={22} onClick={() => setIsMarked(!isMarked)} />
                    }
                    {
                        isMarked &&
                        <BookmarkFill size={22} onClick={() => setIsMarked(!isMarked)} />
                    }
                </div>
            </div>
            <div className="question_body">
                <p className="question_description">{question.description}</p>
                <a href="www.google.com">Answers &#x3e;</a>
            </div>
        </div>
    );
}

export default Question;