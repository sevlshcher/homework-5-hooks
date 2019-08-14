import React, { useState} from "react";

/*
    Напишите компонент с двуми инпутами и кнопкой

    Если инпуты заполнены - при нажатии на кнопку показывается сообщение об успехе

    У сообщения об успехе должно быть поле data-testid='success'
    Сообжение должно содержать текст "Вы вошли"

    Email инпут должен иметь поле data-testid='input-email'
    Password инпут должен иметь поле data-testid='input-password'
    Кнопка логина должна иметь поле data-testid='submit'

    ##  Дополнительное задание:

    У вас получится несколько useState.
    В качестве дополнительной тренировки попробуйте использовать useReducer
    вместо нескольких useState

    Прочитайте документацию:
    https://reactjs.org/docs/hooks-reference.html#usereducer
*/

export const Form = () => {
    const [email, changeEmail] = useState(),
        [password, changePassword] = useState(),
        [submit, trueSubmit] = useState(false)

    const handleChangeEmail = e => {
        changeEmail(e.target.value)
    }

    const handleChangePassword = e => {
        changePassword(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (email && password) trueSubmit(true)
    }

    
    return (
        <React.Fragment>
            <input 
                className="email"
                data-testid="email-input" 
                value={email} 
                onChange={handleChangeEmail} 
            />
            <input 
                className="password"
                data-testid="password-input" 
                value={password} 
                onChange={handleChangePassword} 
            />
            <button 
                type="button" 
                data-testid="submit" 
                onClick={handleSubmit}
            />
            {submit && <div data-testid="success-message">Вы вошли</div>}
        </React.Fragment>
    )
};
