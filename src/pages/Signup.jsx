import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {UserAuth} from '../context/AuthContext'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {user,signUp} = UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signUp(email, password)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    <div className="w-full h-screen">
    <img className="absolute w-full h-full object-cover" src="https://images.unsplash.com/photo-1581572962748-26d686aee61e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="Netflix background"/>
    <div className="bg-black/50 fixed top-0 left-0 w-full h-screen"></div>
    <div className="fixed w-full px-4 py-24 z-10">
      <div className="max-w-[480px] h-[480px] mx-auto  bg-black/75 rounded-xl text-[#F4F7F7]">
        <div className="max-w-[343px] mx-auto flex flex-col h-[480px] justify-center">
          <h1 className="text-3xl font-bold">Hello plantlover!</h1>
          <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
            <input onChange={(e) => setEmail(e.target.value)} className="rounded p-3 my-2 bg-gray-400 focus:outline-0 focus:ring-0" type="email" placeholder="Email" autoComplete="email"/>
            <input onChange={(e) => setPassword(e.target.value)} className="rounded p-3 my-2 bg-gray-400 focus:outline-0 focus:ring-0" type="password" placeholder="Password" autoComplete="current-password"/>
            <button className="bg-[#558A76] rounded hover:bg-[#101717] px-5 py-3 my-6 cursor-pointer text-[#F4F7F7] hover:text-white font-semibold">Sign up</button>
          </form>
          <p className="pt-3">
            <span className='text-gray-500'>
              Already subscribed?
            </span>{' '}
            <Link to='/login' className="font-semibold hover:text-[#558A76]">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default Signup
