// 
import React from 'react'

const Header = ({text,bg,count}) => {
  return (
    <div className = {`${bg} h-12 w-64 flex items-center pl-4 pr-4 uppercase text-white rounded-md  justify-between `}>{text}
    <span className ='bg-white text-black h-5 w-5 text-center rounded-full '>{count}</span>
    </div>
  )
}

export default Header