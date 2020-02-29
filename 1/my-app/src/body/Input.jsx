import React from 'react'
import PropTypes from 'prop-types'
import './Form.css'

const  Input = (props) => {
  return(
    <div>
      <input className='intut' type={props.type} name={props.name} placeholder={props.placeholder}></input>
    </div>
  )
}

export default Input;
