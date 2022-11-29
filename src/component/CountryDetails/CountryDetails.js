import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = (props) => {
    const {cName} = useParams();
    const [country,setCountry] = useState({})
    const {name,flag,area,population} = country;
    useEffect(() =>{
        const url = (`https://restcountries.com/v3.1/all/${cName}`);
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data))
    },[])
    return (
        <div>
            <h1>Name:{name}</h1>
            <h1>Flag:{flag}</h1>
            <h1>Area:{area}</h1>
            <h1>Population:{population}</h1>
            
        </div>
    );
};

export default CountryDetails;