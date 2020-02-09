import React from 'react';
import s from './body.css';
import Homepage from './../Homepage/Homepage.jsx';
import Aboutme from './Aboutme.jsx'
import Posts from './Posts.jsx'
import Services from './Services.jsx'
import Contacts from './Contact.jsx'
import Portfolio from './Portfolio.jsx'
import {Route} from 'react-router-dom'

const Body = () => {
  return (
    <div className={s.Act}>
      <Route path='/Homepage' component={Homepage} activeClassName={s.active}/>
      <Route path='/Aboutme' component={Aboutme}/>
      <Route path='/Services' component={Services}/>
      <Route path='/Portfolio' component={Portfolio}/>
      <Route path='/Contacts' component={Contacts}/>
      <Route path='/Posts' component={Posts}/>
    </div>
);
}

export default Body;
