import React from 'react'
import './index.css'

const Parent = () => {
  return (
    <div className="bg-[#F4EDE6]">
<nav className="nav flex bg-opacity-90 h-16 text-white gap-72 top item items-center">
       
        <div className="text-center font-orbitron text-xl ml-7 font-bold 
           bg-gradient-to-r 
           from-[#EDFFF5] 
           to-[rgba(133,213,237,0.74)] 
           bg-clip-text 
           text-transparent">
            DoodleQuest
        </div>
        <div className="text-5xl font-robotoSlab" >
            Guardian's Hub
        </div>
        <div className="flex gap-9 ml-6">
            <div className="home">
               <img src="/src/assets/home.png" alt="" width="40"/>

            </div>
            <div className="post">
               <img src="/src/assets/post.png" alt="" width ="40" />
            </div>
        </div>
      </nav>

      <div className="images flex justify-around mt-5">
        <div className="img1">
            <img src="/src/assets/image3.png" alt="" width="250" className="ml-11 mt-10"/>
        </div>
        <div className="img2">
            <img src="src/assets/image1.png" alt="" width="250" className="mt-0" />
        </div>
        <div>
            <img src="src/assets/image2.png" alt="" width="250" className="mr-11 mt-10" />
        </div>

      </div>

<div className="progress mt-11">
     <div className="heading text-[#4A0303] font-robotoSlab text-5xl text-center" >
        Progress Hub
     </div>
     <div className="content bg-[#E1E1EB] mt-10  grid grid-cols-[230px_500px_500px] gap-11 ">
            <div className="grid grid-cols-[50px_160px]">
                <div className="bg-[#082031]"></div>
                <div className="bg-[#27384C] ">
                </div>    
            </div>
            <div className="grid grid-rows-[370px_300px] mt-6">
                <div className="img">
                     <img src="src/assets/user.png" alt="" width="490"/>
                </div>
                <div className="grid grid-cols-[250px_250px] gap-2">
                    <div className="grid grid-rows-[150px_150px] gap-2">
                           <div className="d1">
                            <img src="src/assets/d1.png" alt="" width="230px" />
                           </div>
                           <div className="d2">
                            <img src="src/assets/d2.png" alt="" width="230px" />
                           </div>
                    </div>

                    <div className="grid grid-rows[250px_250px]">
                         <div className="grid grid-rows-[150px_150px] gap-2">
                           <div className="d1">
                            <img src="src/assets/d3.png" alt="" width="230px" />
                           </div>
                           <div className="d2">
                            <img src="src/assets/d4.png" alt="" width="230px" />
                           </div>
                    </div>

                    </div>
                </div>
               

            </div>
            <div className="grid grid-rows-[370px_360px] mt-6">
                <div>
                    <img src="src/assets/division.png" alt="" width="400" />
                </div>
                <div>
                    <img src="src/assets/total.png" alt=""  width="400"/>
                </div>
            </div>
     </div>


</div>
      <div className="">
        <img src="src/assets/" alt="" />

      </div>

    </div>
  )
}

export default Parent
