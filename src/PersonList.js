import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import API from './api'

function PersonList() {
  const [persons, setPersons]=useState([]);
  
  useEffect(()=>{
    API.get(`users`)
    .then(res => {
      const persons = res.data;
      setPersons( persons );
    })
  },[])
  

  return (
    <ul>
      {
        persons
          .map(person =>
            <li key={person.id}>{person.name}</li>
          )
      }
    </ul>
  )

}

export default PersonList