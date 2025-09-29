import React from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

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


    <div className="bg-[#F4EDE6]">
      <div className="flex justify-evenly items-center h-32 w-full my-auto ">
        {/* Stories */}
        <Link to="/storytime">
        <div className="flex flex-col items-center ">
          <img
            className="w-[70px] h-[70px] rounded-full object-cover"
            src="images/stories.PNG"
            alt="Stories"
          />
          <p className="text-sm mt-2">Stories</p>
        </div>
        </Link>

        {/* Rewards */}
        <Link to="/quizreward">
        <div className="flex flex-col items-center">
          <img
            className="w-[70px] h-[70px] rounded-full object-cover"
            src="images/awards.PNG"
            alt="Rewards"
          />
          <p className="text-sm mt-2">Rewards</p>
        </div>
        </Link>

        {/* Parental */}
        <div className="flex flex-col items-center">
          <img
            className="w-[70px] h-[70px] rounded-full object-cover"
            src="images/parental.PNG"
            alt="Parental"
          />
          <p className="text-sm mt-2">Parental</p>
        </div>

        {/* Home */}
        <Link to="/dashboard">
        <div className="flex flex-col items-center">
          <img
            className="w-[70px] h-[70px] rounded-full object-cover"
            src="images/home.PNG"
            alt="Home"
          />
          <p className="text-sm mt-2">Home</p>
        </div>
        </Link>

        {/* Doodles */}
        <Link to="/screendrawing">
        <div className="flex flex-col items-center">
          <img
            className="w-[70px] h-[70px] rounded-full object-cover"
            src="images/sun.PNG"
            alt="Doodles"
          />
          <p className="text-sm mt-2">Doodles</p>
        </div>
        </Link>
        

        {/* Puzzles */}
        <Link to="/quiz">
        <div className="flex flex-col items-center">
          <img
            className="w-[70px] h-[70px] rounded-full object-cover"
            src="images/puzzles.PNG"
            alt="Puzzles"
          />
          <p className="text-sm mt-2">Puzzles</p>
        </div>
        </Link>

        {/* Logout */}
        <Link to="/login">
        <div className="flex flex-col items-center">
          <img
            className="w-[70px] h-[70px] rounded-full object-cover"
            src="images/logout.PNG"
            alt="Logout"
          />
          <p className="text-sm mt-2">Logout</p>
        </div>
      
      </Link>
      </div>

      <section
        className="mt-4 relative bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center py-24"
        style={{
          backgroundImage: "url('images/mixed.png')",
        }}
      >
        {/* Background Opacity Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Change to bg-white/40 if you want a light overlay */}

        {/* Content stays sharp and visible */}
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-[Pacifico] text-white mb-8">
            Play. Doodle. Grow!
          </h1>

          <div className="flex gap-6 justify-center">
            <Link to="/paperdrawing">
            <button className="bg-[#F4C721] text-black font-semibold px-6 py-3 rounded-md hover:opacity-80">
              PAPER MODE
            </button>
            </Link>
            <Link to="screendrawing">
            <button className="bg-[#F4C721] text-black font-semibold px-6 py-3 rounded-md hover:opacity-80">
              SCREEN MODE
            </button>
            </Link>
          </div>
        </div>
        
      </section>
      




      
      <div className="mt-4 flex justify-center items-center gap-8 px-8 py-10">
  {/* Left: Image */}
  <div className="w-3/4 flex justify-center">
    <img
      src="images/screen.png"
      alt="AI Screen"
      className="max-w-full h-auto "
      
    />
  </div>

  {/* Right: Text Box */}
  <div
  className="w-1/2 h-60 p-6 rounded-2xl border border-gray-200 flex items-center"
  style={{ boxShadow: "inset 0px 0px 50px 0px #00000050" }}
>
    <p className="text-lg font-medium text-gray-800 text-center">
      The AI Platform transforms doodles into interactive learning. Using
      machine learning, it personalizes activities, rewards creativity,
      and adapts to each child, making imagination the starting point for
      fun, discovery, and knowledge.
    </p>
  </div>
</div>

      </div>
    </>
  );
};

export default Welcome2;
