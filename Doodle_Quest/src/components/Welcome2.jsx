
import React from 'react'
import { ChevronDown } from 'lucide-react';

const Welcome2 = () => {
  return (
    <>
    <div className="w-full bg-[#1F1B2E] flex items-center justify-between px-6 py-3 ">
      
      
      <h1
        className="
          font-[Orbitron] 
          font-bold 
          text-[28px]
          bg-gradient-to-r 
          from-[#dffcff] 
          to-[#4da6c8] 
          text-transparent 
          bg-clip-text
          mx-9
        "
      >
        DoodleQuest
      </h1>

     
      <div className="flex items-center gap-2 ">
        <img 
          src="images/capboy.jpg"   
          alt="Boy" 
          className="w-8 h-8 rounded-full"
        />

        <ChevronDown className="w-4 h-4 mr-2 text-white" />
        
      </div>
      </div>
    
 


      <div className='flex justify-evenly'>
        <div className='flex flex-col w-[80px] h-[80px] rounded-full object-cover items-center overflow-hidden'>
          <img src="images/stories.png" alt="Stories" />
          <h2>Stories</h2>
        </div>
        <div className='flex flex-col w-[80px] h-[80px] rounded-full object-cover items-center overflow-hidden'>
          <img className="object-contain bg-transparent rounded-xl" src="images/rewards.png" alt="Rewards" />
          <h2>Rewards</h2>
        </div>
        <div className='flex flex-col w-[80px] h-[80px] rounded-full object-cover items-center'>
          <img src="images/parental.png" alt="Parental" />
          <h2>Parental</h2>
        </div>
        <div className='flex flex-col w-[80px] h-[80px] rounded-full object-cover items-center'>
          <img src="images/home.png" alt="Home" />
          <h2>Home</h2>
        </div>
        <div className='flex flex-col w-[80px] h-[80px] rounded-full object-cover items-center'>
          <img src="images/doodles.png" alt="Doodles" />
          <h2>Doodles</h2>
        </div>
        <div className='flex flex-col w-[80px] h-[80px] rounded-full object-cover items-center'>
          <img src="images/puzzles.png" alt="Puzzles" />
          <h2>Puzzles</h2>
        </div>
        <div className='flex flex-col w-[80px] h-[80px] rounded-full object-cover items-center'>
          <img src="images/logout.png" alt="Log out" />
          <h2>Log out</h2>
        </div>
      </div> 

      {/* Background Image */}
     
    <section
      className="mt-7 relative bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center py-24"
      style={{
        backgroundImage: "url('images/mixed.png')", // 🔁 replace with your actual image
      }}
    >
      

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl font-[Pacifico] text-white mb-8">
          Play. Doodle. Grow!
        </h1>

        <div className="flex gap-6 justify-center">
          <button className="bg-[#F4C721] text-black font-semibold px-6 py-3 rounded-md hover:opacity-80">
            PAPER MODE
          </button>
          <button className="bg-[#F4C721] text-black font-semibold px-6 py-3 rounded-md hover:opacity-80">
            SCREEN MODE
          </button>
        </div>
      </div>
      </section>
      <div className='flex justify-center items-center'>
        <div className='w-1/2'>
            <img src="images/screen.png"></img>
        </div>
           <div className="w-1/2 h-60 p-6 bg-[#E1E1E1B2] rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.2)] border border-gray-200 text-center">
      <p className="text-lg font-medium  text-gray-800 ">
        The AI Platform transforms doodles into interactive learning. Using
        machine learning, it personalizes activities, rewards creativity, and
        adapts to each child, making imagination the starting point for fun,
        discovery, and knowledge.
      </p>
    </div>
        


        
      </div>
      

    </>
  )
}

export default Welcome2


