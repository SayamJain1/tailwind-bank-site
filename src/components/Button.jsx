import React from 'react'

const Button = ({styles}) => {
  return (
    <button className={`py-4 px-6 rounded-[10px] bg-blue-gradient font-poppins font-medium text-[16px] text-primary outline-none ${styles}`}>Get Started</button>
  )
}

export default Button