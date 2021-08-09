import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom'
import LeftPanel from '../components/LeftPanelProfile';
import QuestionsPanel from '../components/QuestionsPanel';
import { AuthContext } from '../helpers/AuthContext'
import axios from 'axios'

function UserQuestions(props) {

    const history = useHistory()
    const { authState, authUser } = useContext(AuthContext)

    if (authState === false) {
        history.push('/')
    }

    const [question, setQuestion] = useState([])
    
    const id  = JSON.parse(localStorage.getItem("user_info")).id

    const answer = () => {
        axios.get(`/question/get/${id}`, {
            headers: {
                token: localStorage.getItem("token")
            }
        }).then((resp) => {
            setQuestion(resp.data)
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
            <QuestionsPanel key={id} question={question} />
        </div>
    )
}

export default UserQuestions;