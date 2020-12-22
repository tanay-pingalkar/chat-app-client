import React from 'react';
import './main.css';

const Message=({user,name,text})=>{
    return(
        <div>
            {(user!==name)?(
                <div  class='message'><p class={'sender'}>{user}</p><p class={'says'}>says</p><p class={'sended'}>{text}</p></div>
            ):(
                <div class='left-2'><p class={'none'}>ok</p><p class={'left-1'}>{text}</p></div>
            )}
        </div>
    );

}
export default Message;