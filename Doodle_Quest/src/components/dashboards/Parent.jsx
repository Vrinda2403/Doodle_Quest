import React from 'react'
import './index.css'



const Parent = () => {
  return (
    <div className="bg-[#F4EDE6]">
      <nav className="nav flex bg-opacity-90 h-16 text-white gap-72 top item items-center">
        <div
          className="text-center font-orbitron text-xl ml-7 font-bold 
           bg-gradient-to-r 
           from-[#EDFFF5] 
           to-[rgba(133,213,237,0.74)] 
           bg-clip-text 
           text-transparent"
        >
          DoodleQuest
        </div>
        <div className="text-5xl font-robotoSlab">Guardian's Hub</div>
        <div className="flex gap-9 ml-6">
          <div className="home">
            <img src="/src/assets/home.png" alt="" width="40" />
          </div>
          <div className="post">
            <img src="/src/assets/post.png" alt="" width="40" />
          </div>
        </div>
      </nav>

      <div className="images flex justify-around mt-5">
        <div className="img1">
          <img
            src="/src/assets/image3.png"
            alt=""
            width="250"
            className="ml-11 mt-10"
          />
        </div>
        <div className="img2">
          <img src="src/assets/image1.png" alt="" width="250" className="mt-0" />
        </div>
        <div>
          <img
            src="src/assets/image2.png"
            alt=""
            width="250"
            className="mr-11 mt-10"
          />
        </div>
      </div>

      <div className="progress mt-11">
        <div className="heading text-[#4A0303] font-robotoSlab text-5xl text-center">
          Progress Hub
        </div>

        <div className="content bg-[#E1E1EB] mt-10 grid grid-cols-[230px_500px_500px] gap-11 ">
<div className="grid grid-cols-[50px_160px] bg-[#27384C] text-white text-xl">
  {/* Left column (dots) */}
  <div className="bg-[#082031] flex flex-col items-center pt-11 gap-20">
    {/* Active dot */}
    <div className="bg-white rounded-md p-1 mt-3">
      <img src="src/assets/dot.png" alt="" width="14" className="invert" />
    </div>
    {/* Normal dots */}
    <img src="src/assets/dot.png" alt="" width="14" className="mt-6" />
    <img src="src/assets/dot.png" alt="" width="14" className="mt-9"/>
    <img src="src/assets/dot.png" alt="" width="14" className="mt-11" />
    <img src="src/assets/dot.png" alt="" width="14" className="mt-3" />
  </div>

  {/* Right column (labels) */}
  <div className="flex flex-col justify-start pt-11 gap-20">
    <p className="pl-5 pt-2 pb-2 bg-white text-black font-bold rounded-md shadow-md">
      DRAWINGS
    </p>
    <p className="ml-5">STORY LISTENED</p>
    <p className="ml-5">PUZZLE ANALYSIS</p>
    <p className="ml-5">SCREEN TIME</p>
    <p className="ml-5">PAPER TIME</p>
  </div>
</div>



          {/* Cards Section */}
          <div className="grid grid-rows-[370px_300px] mt-6">
            <div className="img">
              <img src="src/assets/user.png" alt="" width="490" />
            </div>

            <div className="grid grid-cols-[250px_250px] gap-2">
              <div className="grid grid-rows-[150px_150px] gap-2">
                {/* First Card */}
                <div className="w-56 h-36 bg-[#EBDAC5] rounded-lg border border-black relative ">
                  <p className="mt-2 ml-2 text-sm">Total Drawing</p>
                  <p className="mt-3 ml-3 text-2xl font-bold">47</p>
                  <p className="mt-3 ml-3 text-sm">This week</p>
                  <p className="mt-3 ml-3 text-sm text-[#277B23]">
                    +12% from last week
                  </p>
                  <div className="bg-[#A9C1E4] w-11 h-11 left-44 rounded-md absolute top-1 p-1">
                    <img src="src/assets/pin.png" alt="" className="" width="40" />
                  </div>
                </div>

                {/* Second Card */}
                <div className="w-56 h-36 bg-[#EBDAC5] rounded-lg border border-black relative ">
                  <p className="mt-2 ml-2 text-sm">Puzzle Solved</p>
                  <p className="mt-3 ml-3 text-2xl font-bold">24</p>
                  <p className="mt-3 ml-3 text-sm">This week</p>
                  <p className="mt-3 ml-3 text-sm text-[#277B23]">
                    +12% from last week
                  </p>
                  <div className="bg-[#F5EEA9] w-11 h-11 left-44 rounded-md absolute top-1 p-1">
                    <img src="src/assets/puzzle.png" alt="" className="" width="40" />
                  </div>
                </div>
              </div>

              <div className="grid grid-rows[250px_250px]">
                <div className="grid grid-rows-[150px_150px] gap-2">
                  {/* Third Card */}
                  <div className="w-56 h-36 bg-[#C8E1A5] rounded-lg border border-black relative">
                    <p className="mt-2 ml-2 text-sm"> Story Listened</p>
                    <p className="mt-3 ml-3 text-2xl font-bold">10</p>
                    <p className="mt-3 ml-3 text-sm">This week</p>
                    <p className="mt-3 ml-3 text-sm text-[#277B23]">
                      +12% from last week
                    </p>
                    <div className="bg-[#C6A7E8] w-11 h-11 left-44 rounded-md absolute top-1 p-1">
                      <img
                        src="src/assets/copy.png"
                        alt=""
                        className=""
                        width="40"
                      />
                    </div>
                  </div>

                  {/* Fourth Card */}
                  <div className="d2 w-56 h-36 bg-[#85DCE4] rounded-lg border border-black relative">
                    <p className="mt-2 ml-2 text-sm">Screen Time</p>
                    <p className="mt-3 ml-3 text-2xl font-bold">470 Min</p>
                    <p className="mt-3 ml-3 text-sm">This week</p>
                    <p className="mt-3 ml-3 text-sm text-[#277B23]">
                      +12% from last week
                    </p>
                    <div className="bg-[#93F898] w-11 h-11 left-44 rounded-md absolute top-1 p-1">
                      <img
                        src="src/assets/laptop.png"
                        alt=""
                        className=""
                        width="40"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column with 2 images */}
          <div className="grid grid-rows-[370px_360px] mt-6">
            <div>
              <img src="src/assets/division.png" alt="" width="400" />
            </div>
            <div>
              <img src="src/assets/total.png" alt="" width="400" />
            </div>
          </div>
        </div>
      </div>

      <div className=" w-11/12 m-auto mt-8 h-52 text-center  rounded-lg bg-[#D7D3D3] p-9 font-robotoSlab">
      <p className="text-2xl mb-4"> <span className="text-red-800">⚠️Warning:</span> Encourage regular breaks for movement, outdoor play, and face-to-face interaction.</p>
      <p className="text-2xl"><span className="text-green-600">🌟Good News:</span>
 Your child is doing amazing! Their creativity and imagination are growing beautifully with every doodle they make.      </p>
      </div>
      <div className="bg-[#203851] h-16 mt-6"></div>
    </div>

  )
}

export default Parent
