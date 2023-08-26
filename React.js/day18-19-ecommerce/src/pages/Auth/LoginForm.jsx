import React from 'react'
import Login from '../../components/Auth/Login'

const LoginForm = () => {
  return (
    <div className='d-flex align-items-center'>
      <div className='w-50'>
    <Login/>
      </div>
    <figure className='w-50'>
      <img className='w-100' src="https://media.istockphoto.com/id/1473928511/photo/considering-buying-a-home-investing-in-real-estate-broker-signs-a-sales-agreement-agent-lease.webp?b=1&s=170667a&w=0&k=20&c=ifaTZAhEa2KmKcbP91as9ZPa9sZl3IjYGjljTj88twc=" alt="" />
    </figure>
    </div>
  )
}

export default LoginForm