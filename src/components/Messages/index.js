import React from 'react';
import {Message} from './Message/index';
import './style.css';
import Scrolltobottom from 'react-scroll-to-bottom';

/**
* @author
* @function 
**/

export const Messages  = ({messages,name}) => {
  return(
    <>
    <Scrolltobottom className='messages'>
        {messages.map((message,index)=><div key={index}> <Message name={name} message={message}/> </div>)}
    </Scrolltobottom>
    </>
   )

 }