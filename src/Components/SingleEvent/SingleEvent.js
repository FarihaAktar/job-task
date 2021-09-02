import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './SingleEvent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';

const SingleEvent = () => {
    const {id} = useParams();
    const [event, setEvent] = useState({});

    useEffect(() => {
        fetch('http://localhost:4000/singleEvent/' + id )
            .then(res => res.json())
            .then(data => setEvent(data[0]))
    }, []);

    return (
        <div className='single-event-section'>
            <Sidebar />
            <div className='single-event'>
                <h2>{event.title}</h2>
                <p>Event Type</p>
                <div className='event-detail'>
                    <h4 style={{marginBottom:"10px"}}> <FontAwesomeIcon className='single-event-icon' icon={faHome} /> {event.location}</h4>
                    <h4> <FontAwesomeIcon className='single-event-icon' icon={faCalendarDay} />{event.date}</h4>
                    <div className='description'>
                        <p>{event.description}</p>
                    </div>
                    <div className='people'>
                        <h3>Attendees</h3>
                        <p style={{marginTop:"15px"}}>{event.people}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SingleEvent
