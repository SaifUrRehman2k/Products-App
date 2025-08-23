import React, { useEffect, useState } from 'react'
import Button from '../../components/button'
import Input from '../../components/Input'
import './login.css'
import { useNavigate } from 'react-router'

const Login = () => {
    const navigate = useNavigate()
    const [users, setUsers] = useState([]) 
    useEffect(()=> {
        fetch('https://fakestoreapi.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
        .catch(error => console.log(error))
    })
    const [emailValue, setEmailValue] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    // const pass = 'admin'

    const updateEmailValue = (e) => {
        setEmailValue(e.target.value)
    }
    const updatePasswordValue = (e) => {
        setPassword(e.target.value)
    }

    const validateLogin = (e) => {
        e.preventDefault();
        const userFound = users.find(user => user.email === emailValue && user.password === password)
        if (userFound) {
            setMessage(<p className='success message'>Login Successful</p>) 
            localStorage.setItem('user', JSON.stringify(userFound))
            setTimeout(navigate('/myAccount'), 1000)
        } else {
            setMessage(<p className='error message'>Login Failed, Please check the Email and Password</p>)
        }
    }

    return (
        <>
            <div className='loginSection'>
                <p className='loginLine'>Sign in to continue. </p>

                <div className='inputs'>
                    {/* <Input type='text' placeHolder='Name' inputID='NAME' inputName='Name' /> */}
                    <Input type='email' placeHolder='jondoe23@gmailcom' inputID='EMAIL' updatedVal={updateEmailValue} />
                    <Input type='password' placeHolder='Password' inputID='PASS'  updatedVal={updatePasswordValue} />
                    <a href="#" className='forgetBtn'>Forget password</a>
                </div>

                <div className='btns'>
                    <Button name='Login' btnClass='login' btnFucntiion={validateLogin} />
                    {/* <Button title='Create account' btnClass='holo' /> */}
                </div>
                <div className='messageArea'>{message}</div>

                {/* {isVerified !== null && (
          <p>{isVerified ? 'Verified' : 'not Verified'} </p>
        )} */}


            </div>
        </>
    )
}

export default Login
