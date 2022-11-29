import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Country = (props) => {
    const addStyle = {border: '1px solid'}
    const buttonStyle = {background: 'purple',height: '40px',width: '150px'}
    const {name,population,flag,area,languages,region,subregion,timezones,startOfWeek,fifa} = props.country;
    const history = useHistory();
    const details = (Country) => {
    history.push(`/countryDetails/${Country}`)
          }

    return (
        <div style={addStyle}>
            <h1>Name:{name.common}</h1>
            <h1>Official Name:{name.official}</h1>
            <p><Link to={`/countryDetails/${name.common}`}>countryDetails  of {name.common}</Link></p> 
            <button style={buttonStyle} onClick={() =>details(name.common)}>Country Details</button> 

        </div>
    );
};

export default Country;