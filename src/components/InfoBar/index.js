import React from 'react';
import './style.css';
import onlineicon from '../../images/onlineicon.png';
import closeicon from '../../images/closeIcon.png';


/**
* @author
* @function InfoBar
**/

export const InfoBar = ({room}) => {
  return(
    <>
    <div className='infoBar'>
        <div className='leftInnerContainer'>
            <img className='onlineIcon' src={onlineicon} alt=''/>
            <h2>{room}</h2>
        </div>
        <div className='rightInnerContainer'>
          <a href='/'><img className='closeIcon' src={closeicon} alt='' /></a>
        </div>
    </div>
    </>
   )

 }