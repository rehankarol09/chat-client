import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';


/**
* @author
* @function Join
**/

export const Join = (props) => {

  const [name, setName] = useState('');
  const [room, setRoom] = useState('');


  return (
    <>
      <div className="joinoutercontainer">
        <div className='joininnercontainer'>
          <h1 className='heading'>Join</h1>
          <div><input type='text' placeholder='Name' className='joinInput' onChange={(e) => setName(e.target.value)} /></div>
          <div><input type='text' placeholder='Room' className='joinInput' onChange={(e) => setRoom(e.target.value)} /></div>
          <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
            <button className='button mt-20' type='submit'>Signin</button>
          </Link>
        </div>

      </div>
    </>
  )

}