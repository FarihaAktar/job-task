import React from 'react'
import Events from '../Events/Events'
import Sidebar from '../Sidebar/Sidebar';
import './Home.css'

const Home = () => {
    return (
        <div className='home-section'>
            <Sidebar/>
            <>
                <Events/>
            </>
        </div>
    )
}

export default Home
