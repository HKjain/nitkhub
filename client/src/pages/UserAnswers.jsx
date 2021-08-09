import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom'
import LeftPanel from '../components/LeftPanelProfile';
import AnswersPanel from '../components/AnswersPanel';
import { AuthContext } from '../helpers/AuthContext'
import axios from 'axios'

function UserAnswers(props) {

    const history = useHistory()
    const { authState, authUser } = useContext(AuthContext)

    if (authState === false) {
        history.push('/')
    }

    const [answers, setAnswers] = useState([])

    const id  = JSON.parse(localStorage.getItem("user_info")).id

    const answer = () => {
        axios.get(`/answer/getUserAnswers/${id}`, {
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
            <AnswersPanel key={id} answers={answers} />
        </div>
    )
}

export default UserAnswers;