import React from 'react';
import './Sidebar.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCircle } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <ul className='sidebar-ul'>
            <li style={{marginTop: "70px"}}>
                <Link to='/new-event'><FontAwesomeIcon className='sidebar-icon' icon={faPlus} /> Create New Event</Link>
            </li>
            <li>
                <Link to='/'><FontAwesomeIcon className='sidebar-icon icon-color-1' icon={faCircle} /> Active Events</Link>
            </li>
            <li>
                <Link to='/'><FontAwesomeIcon className='sidebar-icon icon-color-2' icon={faCircle} /> Old Events</Link>
            </li>
            <li>
                <Link to='/'><FontAwesomeIcon className='sidebar-icon icon-color-3' icon={faCircle} /> Draft Events</Link>
            </li>
        </ul>
    )
}

export default Sidebar
