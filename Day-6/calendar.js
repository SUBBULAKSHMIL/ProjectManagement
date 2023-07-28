import React, { useState, useCallback } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import { Link } from 'react-router-dom';
 
export default function CalendarMy() {
    const [value, setValue] = useState();
 
    const onChange = useCallback(
        (value) => {
            setValue(value);
        },
        [setValue],
    );
 
    return (
        <div className='cal' style={{'backgroundColor':'teal'}}>
            <h1>Calendar</h1>
            <Calendar onChange={onChange} value={value} />
        </div>
    );
}