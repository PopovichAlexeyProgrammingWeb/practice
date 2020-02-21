import React from 'react';
import s from './Posts.module.css';
import Posts from './Posts.jsx';
import picture from './../images/1.jpg'
import {NavLink} from 'react-router-dom';



const Post = (p) => {
  return (
    <div className={s.Post}>
        <div className={s.photo}>
            <img  alt=''/>
        </div>
      <NavLink to={'/Posts/'+p.id}>
        <div className={s.NameMessage}>
            <div className={s.Name}>
                {p.name}
            </div>
            <div className={s.Messages}>
                {p.message}
            </div>
        </div>
      </NavLink>
    </div>
  );
}


export default Post;
