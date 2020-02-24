import React from 'react';
import s from './Posts.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
  return (
    <div className={s.Iriska}>
        <NavLink to={'/dialog/'+props.id}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={s.Guzlo}>
      {props.message}
    </div>
  )
}

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map( d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.messages.map( m => <Message message={m.message}/>);

    return (
        <div>
            <div>
                Dialogs
            </div>
            <div className={s.Fibra}>
                <div>
                    {dialogsElements}
                </div>
                <div>
                    {messagesElements}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
