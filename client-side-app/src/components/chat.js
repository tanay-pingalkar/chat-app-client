import React,{useEffect,useState} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import './main.css';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './message.js';

let socket;
const Chat=({location})=>{
    const [name, setName]=useState('');
    const [room, setRoom]=useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT='localhost:500';
    useEffect(()=>{
        const {name, room}=queryString.parse(location.search);
        setRoom(room);
        setName(name);
        socket=io(ENDPOINT);
        socket.emit('join',{name,room});
        return ()=>{
            socket.emit('disconnect');
            socket.off();
        }
        
    },[ENDPOINT,location.search]);
    useEffect(() => {
        socket.on('message', message => {
          setMessages(messages => [ ...messages, message ]);
        });
        
        socket.on("roomData", ({ users }) => {
          setUsers(users);
        });
        
    }, []);
    
    
    
    const sendMessage = (event) => {
        event.preventDefault();
        
        
        if(message) {
          socket.emit('sendMessage', message, () => setMessage(''));
        }
    }
    
    return(
        <div class='div-1'>
            <div class='div-2'>
                <h4 class='nav-div-2'>{`${name}, welcome to the room`}<br></br>{room}<br></br>start gossip!</h4>
                <ScrollToBottom class='aoto'>
                    <div class='ag'>
                                
                        {messages.map((message, i) => <Message user={message.user} name={name} text={message.text}/>)}
                                
                    </div>
                </ScrollToBottom>   
                <div class='fixed'><input value={message} onChange={(e)=>setMessage(e.target.value)}onKeyPress={e=>e.key==='Enter'?sendMessage(e):null}placeholder='send message'/></div>
            </div>
        </div>
    );
}

export default Chat;
