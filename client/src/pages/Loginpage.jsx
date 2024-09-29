import React from 'react'
import {Form, Input} from 'antd'
import {Link} from 'react-router-dom'

const Loginpage = () => {
  
  const onFinishHandler = (value) =>{
    console.log(value)
}

  return (
    <>
    <div className="form-container">
       
        <Form layout='vertical' onFinish={onFinishHandler}  className='register-form'>
        <h3 className='text-center'> Login Form</h3>
            <Form.Item label='Email' name="email">
                <Input type='email' required/>
            </Form.Item>
            <Form.Item label='Password' name="password">
                <Input type='password' required/>
            </Form.Item>
           
            <Link to='/regsiter' className='ms-2 ps-2'>Don't have an account ?</Link>
            <button className='btn btn-primary'>Login</button>

        </Form>
    </div>
    </>
  )
}

export default Loginpage