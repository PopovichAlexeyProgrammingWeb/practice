import React from 'react';
import s from './Posts.module.css';
import picture from './../images/1.jpg'

const Post = () => {
  return (
    <div className={s.post}>
      <div className={s.photo}>
        <img src={picture} alt='fish'/>
      </div>
      <div className={s.Namelog}>
        <div>
          <p>ghfgh</p>
        </div>
      </div>
      <div className={s.Messageslog}>
        <div>
          <p>fghfg</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
