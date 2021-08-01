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

    return (
        <div className="main">
            <LeftPanel first_name={authUser.first_name} last_name={authUser.last_name} email={authUser.email} />
            <MainPanel />
        </div>
    )
}

export default Home;