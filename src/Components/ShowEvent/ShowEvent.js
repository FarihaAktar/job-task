import React from 'react';
import { Link } from 'react-router-dom';
import './ShowEvent.css'

const ShowEvent = ({ event }) => {
    return (
        <Link to={'/single-event/'+ event._id}>
            <div className='show-event'>
                <h3>{event.title}</h3>
                <div className='flex'>
                    <p style={{ marginRight: "10px" }}>{event.location}</p>
                    <p>{event.date}</p>
                </div>
            </div>
        </Link>
    )
}

export default ShowEvent
