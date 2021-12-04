import React,{useState,useEffect} from 'react';
import io from 'socket.io-client';
import querystring from 'query-string';
import {InfoBar} from '../InfoBar'
import './style.css';
import {Input} from '../Input/index';
import { Messages } from '../Messages';
import { TextContainer } from '../TextContainer';


let socket;

export const Chat = ({location}) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [users,setUsers]=useState([]);
  const [messages, setMessages] = useState([]);
  const ENDPOINT ='https://chat-room-application.herokuapp.com/';

  useEffect(()=>{
     const {name,room} = querystring.parse(location.search);

      socket = io(ENDPOINT, { transports : ['websocket'] });

     setName(name);
     setRoom(room);
    
     socket.emit('join',{name,room},()=>{});

     return ()=>{
       socket.emit('disconnect');
       socket.off();
     }

  },[ENDPOINT,location.search])

  useEffect(()=>{
     socket.on('message',(message)=>{
       setMessages([...messages,message]);
     })

     socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  },[messages,room])

//function to send messages

const sendMessage = (event)=>{
  event.preventDefault();
  if(message)
  {
    socket.emit('sendMessage',message,()=>setMessage(''));
  }
}

console.log(message,messages);

  return(
    <>
          <div className='outercontainer'>
            <div className='container'>
              {/* <input value={message} onChange={(e)=>setMessage(e.target.value)}
              onKeyPress={(e)=>e.key === 'Enter'?sendMessage(e):null}
              /> */}
              <InfoBar room={room} />
              <Messages name={name} messages={messages}/>
              <Input message={message} setMessage={setMessage}  sendMessage={sendMessage}/>
            </div>
            <TextContainer users={users} />
          </div>
    </>
   )

 }