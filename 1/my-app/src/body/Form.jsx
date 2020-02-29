import React from 'react'
import Input from './Input.jsx'
import './Form.css'

const  Form = () => {
  return(
    <div>
        <form className="form">
            <div className='input'>
                <Input type="text" name="firstname" placeholder="Фамилия"/>
                <Input type="text" name="lastname" placeholder="Имя"/>
                <Input type="email" name="email" placeholder="E-mail"/>
                <Input type="password" name="password" placeholder="Пароль"/>
                <button className='registration'>Регистрация</button>
            </div>
        </form>
    </div>
  )
}

export default Form;
