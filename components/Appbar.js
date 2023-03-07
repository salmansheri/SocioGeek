import Link from 'next/link'
import React from 'react'
import Avatar from './Avatar'

const Appbar = () => {
  return (
    <div className="bg-white h-auto px-[500px] flex items-center justify-between">
    <div>
    <Link href="/">
    <img className="h-[70px]" src="/img/logo.svg" />

    </Link>
    

    </div>
    <div className="flex gap-10 items-center">
    <a href="/login" className="hover:font-semibold">Login</a>
    <a href="/register" className="hover:font-semibold">Register</a>
    <a href="/profile" className="hover:font-semibold"><Avatar /></a>
    
    

    </div>
 
  
    
    </div>
  )
}

export default Appbar