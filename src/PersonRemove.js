import React from 'react'
import { useState } from 'react';
import API from './api'




function PersonRemove() {
    const [id, setId] = useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        API.delete(`users/${id}`)
        .then(res => {
            console.log(res);
            console.log(res.data);
          })   
    }
    
    return    (
    <div>
        <form onSubmit={handleSubmit}>
        <label>
            Person ID:
            <input type="number" name="id" value={id} onChange={
                (e)=> setId(e.target.value)
            } />
        </label>
        <button type="submit">Delete</button>
        </form>
    </div>
    )
    
}

export default PersonRemove

 