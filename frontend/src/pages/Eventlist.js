import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EventList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const response = await axios.get('http://localhost:2017/events');
            setEvents(response.data);
        };
        fetchEvents();
    }, []);

    return (
        <div>
            <h1>Event List</h1>
            <ul>
                {events.map(event => (
                    <li key={event._id}>
                        <h2>{event.title}</h2>
                        <p>{event.date} at {event.time}</p>
                        <p>{event.location}</p>
                        <p>{event.description}</p>
                        <button onClick={() => deleteEvent(event._id)}>Delete</button>
                        <button onClick={() => editEvent(event)}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const deleteEvent = async (id) => {
    await axios.deletehttp//localhost:2017/events/${id});
    setEvents(events.filter(event => event._id !== id));
};

const editEvent = (event) => {
    // Implement edit functionality here
};

export default EventList;