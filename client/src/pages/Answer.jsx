import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom'
import LeftPanel from '../components/LeftPanel';
import AnswerPanel from '../components/AnswerPanel';
import { AuthContext } from '../helpers/AuthContext'
import axios from 'axios'

function AnswerPage(props) {

    const history = useHistory()
    const { authState, authUser } = useContext(AuthContext)

    if (authState === false) {
        history.push('/')
    }

    const [answers, setAnswers] = useState([])

    const { id } = useParams()

    const answer = () => {
        axios.get(`/answer/get/${id}`, {
            headers: {
                token: localStorage.getItem("token")
            }
        }).then((resp) => {
            setAnswers(resp.data)
        })
    }

    useEffect(() => {
        answer()
    }, [])

    var fullname = ''
    if (authState) {
        fullname = (authUser.first_name) + " " + (authUser.last_name)
    }


    return (
        <div className="main">
            <LeftPanel fullname={fullname} email={authUser.email} />
            <AnswerPanel key={id} answers={answers} />
        </div>
    )
}

export default AnswerPage;