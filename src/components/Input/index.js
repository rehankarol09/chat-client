import React from 'react';
import './style.css'

/**
* @author
* @function Input
**/

export const Input = ({message,setMessage,sendMessage}) => {
  return(
    <>
    <form>
        <input
        type='text'
        placeholder="Enter a message"
        className='input'
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
        onKeyPress={(e)=>e.key==='Enter'?sendMessage(e):null}

        />
        <button className='sendButton' onClick={e=>sendMessage(e)}>Send Message</button>
    </form>
    </>
   )

 }