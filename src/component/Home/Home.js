import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Country from '../Country/Country';


const Home = () => {
  const addStyle={border:'1px solid red'}
const [countries,setCountry] = useState([]); 
  useEffect(() => {
fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())
.then(data => setCountry(data));
//console.log(countries);
  },[]);
  const history = useHistory();
  const click = () => {
   history.push("/done");
  }

    return (
      <div>
          <button onClick={click}>Done</button>     
        <h1 style={addStyle}>Country List:{countries.length}</h1>
      {
        countries.map(c =><Country country={c}></Country>)
      }
      
      </div>
    );
};

export default Home;