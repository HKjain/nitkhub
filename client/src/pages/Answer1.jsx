import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom'
import LeftPanel from '../components/LeftPanel';
import AnswerPanel from '../components/AnswerPanel';
import { AuthContext } from '../helpers/AuthContext'

function AnswerPage(props) {

    const history = useHistory()
    const { authState, authUser } = useContext(AuthContext)

    if (authState === false) {
        history.push('/')
    }


    var fullname = ''
    if (authState) {
        fullname = (authUser.first_name) + " " + (authUser.last_name)
    }

    return (
        <div className="main">
            <LeftPanel fullname={fullname} email={authUser.email} />
            <AnswerPanel fullname={fullname} />
        </div>
    )
}

export default AnswerPage;