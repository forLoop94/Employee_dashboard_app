import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getUsers } from '../redux/employee/employeeSlice'

const Analytics = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUsers())
  }, [])


  return (
    <form action="">
      <input type="file" placeholder='image' />
    </form>
  )
}

export default Analytics