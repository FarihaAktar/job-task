import React from 'react';
import './NewEvent.css'
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";

const NewEvent = () => {

    const { register, handleSubmit } = useForm();
    
    const onSubmit = data => {
        fetch('http://localhost:4000/addEvent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('event added successfully')
                }
            })
    };

    return (
        <div className='new-event-section'>
            <Sidebar />
            <div className='new-event'>
                <h2>New Event</h2>

                <form className='event-form' onSubmit={handleSubmit(onSubmit)}>
                    <input className='input-field' placeholder='Event title'  {...register("title")} />
                    <br />
                    <br />
                    <input className='input-field' placeholder='Location'  {...register("location")} />
                    <br />
                    <br />
                    <input className='input-field' placeholder='People'  {...register("people")} />
                    <br />
                    <br />
                    <input className='input-field' placeholder='Time and Date'  {...register("date")} />
                    <br />
                    <br />
                    <textarea className='text-field' placeholder='Add a description'  {...register("description")} />
                    <br />
                    <br />
                    <input className='submit-btn' type="submit" />
                </form>
            </div>

        </div>
    )
}

export default NewEvent
