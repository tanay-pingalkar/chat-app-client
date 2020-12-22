import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './main.css';
const Join=()=>{
    const [name,setName]=useState('');
    const [room,setRoom]=useState('');
    return(
        <div class='join-div'>
            <div class='form'>
                <p>Join Gossip</p>
                <input placeholder='name' onChange={e=>setName(e.target.value)}/><br></br>
                <input placeholder='room name' onChange={(e)=>setRoom(e.target.value)}/><br></br>
                <Link onClick={(e)=>(!name || !room)? e.preventDefault():null} to={`/chat?name=${name}&workplace=${room}`}>
                  <button class='but'>Join</button>
                </Link>
            </div>
        </div>   
    );
}

export default Join;