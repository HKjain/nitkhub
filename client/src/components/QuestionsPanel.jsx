import React, { useState } from 'react';
import QABox from './QABox';
import axios from 'axios'


function QuestionsPanel({ fullname, question, answers, resetAnswers }) {

    axios.defaults.baseURL = 'http://www.localhost:3001'

    return (
        <div className="timeline">
            {question &&
                <>
                <div className="box" style={{textAlign : 'center'}}>All Questions</div>
                {question.map((question) => <QABox key={question.id} answer={question} isQuestion={"1"} />)}
                </>
            }
            {!question &&
                < h5 > No Questions Yet!</h5>
            }
        </div >
    );
}

export default QuestionsPanel;