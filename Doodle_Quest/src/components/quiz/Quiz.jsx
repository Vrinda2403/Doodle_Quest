import React from 'react'
import grass from '../../assets/grass.png'

const Quiz = () => {
  return (
    <div className='flex bg-gradient-to-b from-[#A9C2E9] to-blue-100 min-h-screen'>
        <div>
         <img src={grass} alt="" className='absolute bottom-0' />
        </div>
    </div>
  )
}

export default Quiz  