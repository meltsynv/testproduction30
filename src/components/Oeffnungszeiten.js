import React from 'react'

const Oeffnungszeiten = () => {
    return (
        <div className='title'>
            <h1 className='title-name'>Öffnungszeiten:</h1>
            <h1>Montag - Freitag</h1>
            <p>11:30 - 15:00 Uhr, 17:00 - 22:30 Uhr</p>

            <h1>Mittwoch:</h1>
            <p>Ruhetag</p>

            <h1>Sonn- und Feiertags:</h1>
            <p>11:30 - 22:30 Uhr</p>
        </div>
    );
}

export default Oeffnungszeiten;