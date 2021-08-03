import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom'
import LeftPanel from '../components/LeftPanel';
import MainPanel from '../components/MainPanel';
import { AuthContext } from '../helpers/AuthContext'

function Home(props) {

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
            <MainPanel fullname={fullname} />
        </div>
    )
}

export default Home;