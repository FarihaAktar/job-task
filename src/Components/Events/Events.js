import React, { useEffect, useState } from 'react'
import ShowEvent from '../ShowEvent/ShowEvent'
import './Events.css'

const Events = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/allEvents')
            .then(res => res.json())
            .then(data => {
                setEvents(data);
            })
    }, [])

    console.log(events)
    return (
        <div className='all-events'>
            {
                events.map(event => <ShowEvent key={event._id} event={event}></ShowEvent>)
            }

        </div>


    )
}

export default Events
