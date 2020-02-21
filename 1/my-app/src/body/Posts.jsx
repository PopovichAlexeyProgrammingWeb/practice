import React from 'react';
import s from './Posts.module.css';
import Post from './Post.jsx';

const Posts = () => {
  return (
    <div className={s.Posts}>
      <div>
        Posts.
      </div>
      <div >
        <Post name='Пижма' message='central voczal' id='1'/>
      </div>
      <div >
        <Post name='Свобода' message='конкатинация vocal' id='2'/>
      </div>
      <div >
        <Post name='Портер' message='пересвет voczal' id='3'/>
      </div>
      <div >
        <Post name='Пен' message=' Excepteur sint occaecat  voczal' id='4'/>
      </div>
      <div >
        <Post name='Конкатинация' id='5' message='tur. Excepteur sint occaecat cupidatat non proident, sunt in culpa'/>
      </div>
      <div >
        <Post name='Почвавед' id='6' message='sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa '/>
      </div>
      <div >
        <Post name='Пристук' id='7' message='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'/>
      </div>
    </div>
  );
}

export default Posts;
