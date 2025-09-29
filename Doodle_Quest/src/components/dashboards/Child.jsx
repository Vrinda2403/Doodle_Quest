import React from 'react'

const Child = () => {
  return (
    <div>
         <nav className="nav flex bg-opacity-90 h-16 text-white justify-between top item items-center">
       
        <div className="text-center font-orbitron">
            DoodleQuest
        </div>
        <div >
            Guardian's Hub
        </div>
        <div className="flex gap-5">
            <div className="home">
               <img src="/src/assets/home.png" alt="" width="40"/>

            </div>
            <div className="post">
               <img src="/src/assets/post.png" alt="" width ="40" />
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Child