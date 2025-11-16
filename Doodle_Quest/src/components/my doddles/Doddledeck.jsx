// import React from 'react'

// const Doddledeck = () => {
//   return (
//     <div className="bg-[#F4EDE6] min-h-screen">
//        <nav className="nav flex bg-opacity-90 h-16 text-white gap-80 top item items-center">
       
//         <div className="text-center font-orbitron text-xl ml-7 font-bold 
//            bg-gradient-to-r 
//            from-[#EDFFF5] 
//            to-[rgba(133,213,237,0.74)] 
//            bg-clip-text 
//            text-transparent">
//             DoodleQuest
//         </div>
//         <div className="text-5xl font-robotoSlab" >
//             Doddle Deck
//         </div>
//         <div className="flex gap-9 ml-6">
//             <div className="home">
//                <img src="/src/assets/home.png" alt="" width="40"/>

//             </div>
//             <div className="post">
//                <img src="/src/assets/post.png" alt="" width ="40" />
//             </div>
//         </div>
//       </nav>

//       <div className="container grid grid-cols-[150px_300px_190px_190px_190px] m-auto mt-20">
//         <div className="col1 grid grid-rows-[50px_200px_200px] text-center ">
//             <div className = "border border-black font-bold text-center pt-2 font-robotoSlab bg-white">
//                 DATE
//             </div>
//             <div className="border border-black pt-20 ">
//                 10/10/26
//             </div>
//             <div className="border border-black pt-20">
//                 10/9/26
//             </div>
//         </div>

//          <div className="col1 grid grid-rows-[50px_200px_200px]">
//             <div className = "border border-black font-bold text-center font-robotoslab pt-2 bg-white">
//                 DOODLES
//             </div>
//             <div className="border border-black pt-7 pl-6">
//                <img src="src/assets/draw1.png" alt="Doodling" width="250"/>
//             </div>
//             <div className="border-black border pt-5 pl-6 ">
//                 <img src="src/assets/draw2.png" alt="Doodling" width="250" />
//             </div>
//         </div>

//          <div className="col1 grid grid-rows-[50px_200px_200px]">
//             <div className = "border border-black font-bold text-center font-robotoSlab pt-2 bg-white">
//                 STORY
//             </div>
//             <div className="border border-black text-center">
//                 <div className="mt-9 ml-3 mr-3">Snow White and the Seven Dwards</div>
                

//                 <div className="btn"><button className="pl-4 pr-4 mt-11 rounded-md border-black border text-sm   bg-green-500  shadow-gray-600 shadow-md " >Read Now</button></div>
//             </div>
//             <div  className="border border-black text-center " >
//                 <div className="mt-9 ml-3 mr-3"> Beauty and the Beast </div>
                
//                  <div className="btn ">
//                     <button className="pl-4 pr-4 mt-16 rounded-md border-black border text-sm   bg-green-500 shadow-gray-600 shadow-md"> Read Now</button>
                   
//                  </div>
//             </div>
//         </div>

//          <div className="col1 grid grid-rows-[50px_200px_200px]">
//             <div className = "border border-black font-bold  text-center pt-2 font-robotoSlab bg-white">
//                 QUIZ
//             </div>
//             <div className="border border-black p-6 text-center">
//                  <div className="text-3xl mt-6">8/10</div>
//                  <div className="btn2 "><button className="pl-4 pr-4 mt-11 rounded-md border-black border text-sm   bg-[#FFA500]  shadow-gray-600 shadow-md">Retake</button></div>
//             </div>
//             <div className="border border-black p-6 text-center">
//                 <div className="text-3xl mt-6">9/10</div>
//                  <div className="btn2  "> <button className="pl-4 pr-4 mt-11 rounded-md border-black border text-sm   bg-[#FFA500]  shadow-gray-600 shadow-md ">Retake</button></div>
//             </div>
//         </div>

//          <div className="col1 grid grid-rows-[50px_200px_200px]">
//             <div className = "  border border-black font-bold text-center font-robotoSlab pt-2 bg-white">
//                 REWARDS
//             </div>
//             <div className="border border-black text-center pr-7 pt-2 ">
//                <img src="src/assets/reward.png" alt=""  width="300" className="i" />
//             </div>
//             <div className="text-center pt-8 pl-7  border border-black">
//                <img src="src/assets/reward1.png" alt="" width="130" />
//             </div>
//         </div>

//     </div>


//     </div>
//   )
// }

// export default Doddledeck

import React, { useState, useEffect } from 'react';
import { useAuth } from '@clerk/clerk-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Doddledeck = () => {
  const { getToken } = useAuth();
  const [history, setHistory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // This function runs when the component loads
    const fetchHistory = async () => {
      try {
        const token = await getToken();
        if (!token) return;

        // 1. Ask your backend for all history
        const response = await axios.get(
          'http://localhost:3000/api/storage/history',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // 2. Save the data in state
        setHistory(response.data);
      } catch (err) {
        setError('Failed to fetch history.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, [getToken]);

  // A helper function to format the date
  const formatDate = (dateString) => {
    if (!dateString) return '---';
    return new Date(dateString).toLocaleDateString();
  };

  // Helper variables to safely get data
  const doodle1 = history?.doodles[0];
  const doodle2 = history?.doodles[1];
  const quiz1 = history?.quizzes[0];
  const quiz2 = history?.quizzes[1];

  return (
    <div className="bg-[#F4EDE6] min-h-screen pb-10">
      {/* --- Your Navbar (Unchanged) --- */}
    <nav className="bg-[#2C2A4A] px-6 py-2 flex items-center justify-between shadow-lg text-white">
        <img
          src="/src/assets/doodle-quest-logo.png"
          alt="DoodleQuest Logo"
          className="h-12"
        />
        <h1 className="font-['Roboto_Slab'] text-5xl tracking-wider">
          Doodle Deck
        </h1>
        <div className="flex items-center space-x-4">
          <button className="w-16 h-16 rounded-full flex items-center justify-center p-2 hover:bg-gray-200 transition">
            <img src="/src/assets/home-icon.png" alt="Home" />
          </button>
          <button className="w-16 h-16 rounded-full flex items-center justify-center p-2.5 hover:bg-orange-500 transition">
            <img src="/src/assets/click.png" alt="Back" />
          </button>
        </div>
      </nav>

      {/* --- Dynamic Content Area --- */}
      <div className="container m-auto mt-20 flex flex-col items-center">
        {loading && (
          <h2 className="text-center text-2xl font-bold">Loading...</h2>
        )}
        {error && (
          <h2 className="text-center text-2xl font-bold text-red-600">
            {error}
          </h2>
        )}
        
        {/* Render the table ONLY when history is loaded */}
        {history && (
          <div className="grid grid-cols-[150px_300px_190px_190px_190px] ">
            {/* === Column 1: DATE === */}
            <div className="col1 grid grid-rows-[50px_200px_200px] text-center">
              {/* ✅ UPDATED BG */}
              <div className="border border-black font-bold text-center pt-2 font-robotoSlab bg-pink-200">
                DATE
              </div>
              <div className="border border-black pt-20">
                {formatDate(doodle1?.createdAt)}
              </div>
              <div className="border border-black pt-20">
                {formatDate(doodle2?.createdAt)}
              </div>
            </div>

            {/* === Column 2: DOODLES === */}
            <div className="col1 grid grid-rows-[50px_200px_200px]">
              {/* ✅ UPDATED BG */}
              <div className="border border-black font-bold text-center font-robotoslab pt-2 bg-blue-200">
                DOODLES
              </div>
              {/* ✅ UPDATED BG to white */}
              <div className="border border-black p-4 flex items-center justify-center bg-white">
                {doodle1 ? (
                  <img src={doodle1.imageUrl} alt="Doodling" className="w-full h-full object-contain"/>
                ) : (
                  <p>No Doodle</p>
                )}
              </div>
              {/* ✅ UPDATED BG to white */}
              <div className="border-black border p-4 flex items-center justify-center bg-white">
                {doodle2 ? (
                  <img src={doodle2.imageUrl} alt="Doodling" className="w-full h-full object-contain" />
                ) : (
                  <p>No Doodle</p>
                )}
              </div>
            </div>

            {/* === Column 3: STORY === */}
            <div className="col1 grid grid-rows-[50px_200px_200px]">
              {/* ✅ UPDATED BG */}
              <div className="border border-black font-bold text-center font-robotoSlab pt-2 bg-green-200">
                STORY
              </div>
              <div className="border border-black text-center">
                <div className="mt-9 ml-3 mr-3">Snow White</div>
                <div className="btn">
                  <button className="pl-4 pr-4 mt-11 rounded-md border-black border text-sm bg-green-500 shadow-gray-600 shadow-md">Read Now</button>
                </div>
              </div>
              <div className="border border-black text-center">
                <div className="mt-9 ml-3 mr-3">Beauty and the Beast</div>
                <div className="btn">
                  <button className="pl-4 pr-4 mt-16 rounded-md border-black border text-sm bg-green-500 shadow-gray-600 shadow-md">Read Now</button>
                </div>
              </div>
            </div>

            {/* === Column 4: QUIZ === */}
            <div className="col1 grid grid-rows-[50px_200px_200px]">
              {/* ✅ UPDATED BG */}
              <div className="border border-black font-bold text-center pt-2 font-robotoSlab bg-yellow-200">
                QUIZ
              </div>
              <div className="border border-black p-6 text-center">
                {quiz1 ? (
                  <>
                    <div className="text-3xl mt-6">
                      {quiz1.score}/{quiz1.totalQuestions}
                    </div>
                    <div className="btn2">
                      <button className="pl-4 pr-4 mt-11 rounded-md border-black border text-sm bg-[#FFA500] shadow-gray-600 shadow-md">Retake</button>
                    </div>
                  </>
                ) : (
                  <p className="mt-6">No Quiz Taken</p>
                )}
              </div>
              <div className="border border-black p-6 text-center">
                {quiz2 ? (
                  <>
                    <div className="text-3xl mt-6">
                      {quiz2.score}/{quiz2.totalQuestions}
                    </div>
                    <div className="btn2">
                      <button className="pl-4 pr-4 mt-11 rounded-md border-black border text-sm bg-[#FFA500] shadow-gray-600 shadow-md">Retake</button>
                    </div>
                  </>
                ) : (
                  <p className="mt-6">No Quiz Taken</p>
                )}
              </div>
            </div>

            {/* === Column 5: REWARDS === */}
            <div className="col1 grid grid-rows-[50px_200px_200px]">
              {/* ✅ UPDATED BG */}
              <div className="border border-black font-bold text-center font-robotoSlab pt-2 bg-purple-200">
                REWARDS
              </div>
              <div className="border border-black text-center pr-7 pt-2">
                <img src="src/assets/reward.png" alt="" width="300" className="i" />
              </div>
              <div className="text-center pt-8 pl-7 border border-black">
                <img src="src/assets/reward1.png" alt="" width="130" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Doddledeck;