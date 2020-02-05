import React from 'react';
import './main.css';
import Header from './../header/header.jsx';
import Navigation from './../navigation/navigation.jsx';
import Body from './../body/body.jsx';
import Footer from './../footer/footer.jsx';

const Main = () => {
  return (
    <div className='main'>
      <div className='header'><Header/></div>
      <div className='navigation'><Navigation/></div>
      <div className='body'><Body/></div>
      <div className='footer'><Footer/></div>
    </div>
);
}


export default Main;
