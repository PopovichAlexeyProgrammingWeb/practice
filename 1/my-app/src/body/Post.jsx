import React from 'react';
import s from './Posts.module.css';
import picture from './../images/1.jpg'

const Post = () => {
  return (
    <div className={s.Post}>
      <div className={s.photo}>
        <img src={picture} alt='fish'/>
      </div>
      <div className={s.NameMessage}>
        <div className={s.Name}>
            Name
        </div>
        <div className={s.Messages}>
            Messages
        </div>
      </div>
    </div>
  );
}

export default Post;
