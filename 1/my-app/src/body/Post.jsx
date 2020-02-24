import React from 'react';
import s from './Posts.module.css';
import {NavLink} from 'react-router-dom';

const Post = (props) => {
  return (
    <div>
      <div className={s.Post}>
          <div className={s.photo}>
              <img  alt=''/>
          </div>
        <NavLink to={'/Posts/'+props.id}>
          <div className={s.NameMessage}>
              <div className={s.Name}>
                  {props.name}
              </div>
              <div className={s.Messages}>
                  {props.message}
              </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Post;
