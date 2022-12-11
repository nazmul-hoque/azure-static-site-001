import React from 'react'
import { useState } from 'react'
import api from './api';

function PersonAdd() {
  const [user, setUser]= useState({name:'', id:''});

  const handleSubmit = event => {
    event.preventDefault();

    api.post(`users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Person Name:
          <input type="text" name="name" value={user.name} onChange={(e)=> setUser({name:e.target.value})} />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default PersonAdd



