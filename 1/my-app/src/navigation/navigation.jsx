import React from 'react';
import './navigation.css';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
  return (
    <div className='navigation'>
      <div className='linksArroy'><NavLink to='/Homepage'>Главная</NavLink></div>
      <div className='linksArroy'><NavLink to='/Posts'>Посты</NavLink></div>
      <div className='linksArroy'><NavLink to='/Aboutme'>Обо мне</NavLink></div>
      <div className='linksArroy'><NavLink to='/Services'>Услуги</NavLink></div>
      <div className='linksArroy'><NavLink to='/Portfolio'>Портфолио</NavLink></div>
      <div className='linksArroy'><NavLink to='/Contacts'>Контакты</NavLink></div>
      <div className='linksArroy'><NavLink to='/Dialogs'>Сообщения</NavLink></div>
    </div>
  );
}

export default Navigation;
