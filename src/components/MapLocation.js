import React from 'react';

const MapLocation = (props) => {
    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2484.874548129793!2d7.142439!3d51.478817!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8b0648ae16f5376!2sSteakhaus%20El%20Dorado!5e0!3m2!1sde!2sau!4v1572429786228!5m2!1sde!2sau"
            width="100%"
            height={props.height}
            frameBorder="0"
            allowFullScreen
            title='EL Dorado GoogleMaps'
        ></iframe>
    )
}

export default MapLocation;