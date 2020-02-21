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

const Dialog = (props) => {
    return (
        <div>
            <div>
                Dialog
            </div>
        </div>
    )
}

export default Dialog;
