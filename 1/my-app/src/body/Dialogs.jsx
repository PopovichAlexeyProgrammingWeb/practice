import React from 'react';
import s from './Posts.module.css';
import Posts from './Posts.jsx';
import picture from './../images/1.jpg'
import {NavLink} from 'react-router-dom';
import p from './Posts.jsx';



const DialogItem = (props) => {
  return (
    <div>
        <div className={s.Iriska}>
            <NavLink to={'/dialog/'+props.id}>{props.name}</NavLink>
        </div>
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
    let dialogs = [
      {id:1, name: 'Sudar'},
      {id:2, name: 'Reception'},
      {id:3, name: 'Poland'},
      {id:4, name: 'Proscowya'},
      {id:5, name: 'Xiaomi'},
      {id:6, name: 'Ios'}
    ]

    let messages = [
      {id:1, message: 'fmsbfbjdsbfjsd'},
      {id:2, message: 'Receptiondsfsdfsdfsdfsd'},
      {id:3, message: 'Polandsfddfsfdfsdfsdf'},
      {id:4, message: 'Proscowyasdfsdfsdfsd'},
      {id:5, message: 'Xiaomisdfsdfsdfsdfsd'},
      {id:6, message: 'Iosdsfsdfsdfsdf'}
    ]

    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages.map( m => <Message message={m.message}/>);

    return (
      <div className={s.Fibra}>
            <div>
              {dialogsElements}
            </div>
            <div>
              {messagesElements}
            </div>
      </div>
    )
}

export default Dialogs;
