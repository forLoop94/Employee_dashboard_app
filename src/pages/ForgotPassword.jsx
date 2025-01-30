import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { forgotPassword } from '../redux/auth/authSlice';

const ForgotPassword = () => {
  const {userId, resetString} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [data, setData] = useState({
    userId,
    resetString,
    newPassword: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    dispatch(forgotPassword(data)).then(() => {
      navigate("/")
    });
  }

  const handleChange = (e) => {
    const { name, value} = e.target;

    setData({
      ...data,
      [name]: value
    })
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input hidden type="text" placeholder='Enter new password' />
        <input hidden type="text" placeholder='Enter new password' />
        <input type="text" placeholder='Enter new password' name='newPassword' value={data.newPassword} onChange={handleChange}/>
        <button type='submit'>Submit</button>
      </form>
    </section>
  )
}

export default ForgotPassword