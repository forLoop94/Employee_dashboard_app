import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../redux/employee/employeeSlice'
import { useNavigate } from 'react-router-dom';

const Analytics = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const employees = useSelector((state) => state.employee.employees);

  const baseURL = "http://localhost:5000/api";

  const unauthorizedUser = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`${baseURL}/users`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        if (response.status === 401) {
          navigate("/login")
          throw new Error("Unauthorized"); // or handle as needed
        } else {
          throw new Error('Request failed with status ' + response.status);
        }
      }
    } catch (error) {
      console.log("Fetch error:", error.message);
      throw new Error("Unauthorized")
    }
  };

  useEffect(() => {
    unauthorizedUser();
    dispatch(getUsers())
  }, [])

  if(!employees) {
    return;
  }

  return (
    <section>
      {employees.map(emp => (
        <article key={emp._id}>
          <h1>{emp.name}</h1>
        </article>
      ))}
    </section>
  )
}

export default Analytics