import React from 'react'
import PhoneNumber from './phoneNumber'

const Impressum = () => {
    return (
      <div className="impressum">
        <p className="impress-brand">Steakhaus El Dorado</p>
        <p>Otto-Brenner-Straße 15</p>
        <p>44866 Bochum</p>
        <br />
        <p>Tel: <PhoneNumber/> </p>
      </div>
    );
}

export default Impressum;