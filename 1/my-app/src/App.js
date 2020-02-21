import './App.css';
import './body/body.css';
import './header/header.css';
import Header from './header/header.jsx';
import Navigation from './navigation/navigation.jsx';
import Body from './body/body.jsx';
import Footer from './footer/footer.jsx';
import {BrowserRouter} from 'react-router-dom'
import React from 'react';



const App = (props) => {

  return (
    <BrowserRouter>
      <div className='App'>
        <div className='header'><Header/></div>
        <div className='navigation'><Navigation/></div>
        <div className='body'><Body dialogs={props.dialogs} messages={props.messages} /></div>
        <div className='footer'><Footer/></div>
      </div>
    </BrowserRouter>
  );
}

export default App;
