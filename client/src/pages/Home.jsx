import React from 'react';
import LeftPanel from '../components/LeftPanel';
import MainPanel from '../components/MainPanel';

function Home(props) {
    return (
        <div className="main">
            <LeftPanel />
            <MainPanel />
        </div>
    )
}

export default Home;