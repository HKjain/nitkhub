import React, { useState } from 'react';
import QABox from './QABox';
import axios from 'axios'


function AnswersPanel({ answers }) {

    axios.defaults.baseURL = 'http://www.localhost:3001'

    return (
        <div className="timeline">
            {answers &&
                <>
                <div className="box" style={{textAlign : 'center'}}>All Answers</div>
                {answers.map((answer) => <QABox key={answer.id} answer={answer} isQuestion={"0"} />)}
                </>
            }
            {!answers &&
                < h5 > No Answers Yet!</h5>
            }
        </div >
    );
}

export default AnswersPanel;