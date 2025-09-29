import React from 'react'

const Doddledeck = () => {
  return (
    <div className="bg-[#F4EDE6] min-h-screen">
       <nav className="nav flex bg-opacity-90 h-16 text-white gap-80 top item items-center">
       
        <div className="text-center font-orbitron text-xl ml-7 font-bold 
           bg-gradient-to-r 
           from-[#EDFFF5] 
           to-[rgba(133,213,237,0.74)] 
           bg-clip-text 
           text-transparent">
            DoodleQuest
        </div>
        <div className="text-5xl font-robotoSlab" >
            Doddle Deck
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

      <div className="container grid grid-cols-[150px_300px_190px_190px_190px] m-auto mt-20">
        <div className="col1 grid grid-rows-[50px_200px_200px] text-center ">
            <div className = "border border-black font-bold text-center pt-2 font-robotoSlab bg-white">
                DATE
            </div>
            <div className="border border-black pt-20 ">
                10/10/26
            </div>
            <div className="border border-black pt-20">
                10/9/26
            </div>
        </div>

         <div className="col1 grid grid-rows-[50px_200px_200px]">
            <div className = "border border-black font-bold text-center font-robotoslab pt-2 bg-white">
                DOODLES
            </div>
            <div className="border border-black pt-7 pl-6">
               <img src="src/assets/draw1.png" alt="Doodling" width="250"/>
            </div>
            <div className="border-black border pt-5 pl-6 ">
                <img src="src/assets/draw2.png" alt="Doodling" width="250" />
            </div>
        </div>

         <div className="col1 grid grid-rows-[50px_200px_200px]">
            <div className = "border border-black font-bold text-center font-robotoSlab pt-2 bg-white">
                STORY
            </div>
            <div className="border border-black text-center">
                <div className="mt-9 ml-3 mr-3">Snow White and the Seven Dwards</div>
                

                <div className="btn"><button className="pl-4 pr-4 mt-11 rounded-md border-black border text-sm   bg-green-500  shadow-gray-600 shadow-md " >Read Now</button></div>
            </div>
            <div  className="border border-black text-center " >
                <div className="mt-9 ml-3 mr-3"> Beauty and the Beast </div>
                
                 <div className="btn ">
                    <button className="pl-4 pr-4 mt-16 rounded-md border-black border text-sm   bg-green-500 shadow-gray-600 shadow-md"> Read Now</button>
                   
                 </div>
            </div>
        </div>

         <div className="col1 grid grid-rows-[50px_200px_200px]">
            <div className = "border border-black font-bold  text-center pt-2 font-robotoSlab bg-white">
                QUIZ
            </div>
            <div className="border border-black p-6 text-center">
                 <div className="text-3xl mt-6">8/10</div>
                 <div className="btn2 "><button className="pl-4 pr-4 mt-11 rounded-md border-black border text-sm   bg-[#FFA500]  shadow-gray-600 shadow-md">Retake</button></div>
            </div>
            <div className="border border-black p-6 text-center">
                <div className="text-3xl mt-6">9/10</div>
                 <div className="btn2  "> <button className="pl-4 pr-4 mt-11 rounded-md border-black border text-sm   bg-[#FFA500]  shadow-gray-600 shadow-md ">Retake</button></div>
            </div>
        </div>

         <div className="col1 grid grid-rows-[50px_200px_200px]">
            <div className = "  border border-black font-bold text-center font-robotoSlab pt-2 bg-white">
                REWARDS
            </div>
            <div className="border border-black text-center pr-7 pt-2 ">
               <img src="src/assets/reward.png" alt=""  width="300" className="i" />
            </div>
            <div className="text-center pt-8 pl-7  border border-black">
               <img src="src/assets/reward1.png" alt="" width="130" />
            </div>
        </div>

    </div>


    </div>
  )
}

export default Doddledeck
