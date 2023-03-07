import React from 'react'

const Avatar = ({size}) => {
  let width = 0; 
  if (size === 'big') {
    width = '18'
  } else {
    width = '12'
    
  }
 
  return (
    <div className={`w-12 overflow-hidden rounded-full`}>
    <img
    className="rounded-full h-12 w-12"
      
      src="/img/my_photo.jpg"
      alt="avatar"
    />
  </div>
  )
}

export default Avatar