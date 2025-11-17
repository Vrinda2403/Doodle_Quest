// import React, { useEffect } from 'react';
// import './index.css';
// import { useNavigate } from 'react-router-dom';
// import { useUser } from '@clerk/clerk-react'; // ✅ Clerk import

// const Parent = () => {
//   const navigate = useNavigate();
//   const { user } = useUser(); // ✅ get Clerk user state



//   const [screenTime, setScreenTime] = useState(0);
//   const [dailyLimit, setDailyLimit] = useState(120);
//   const [newLimit, setNewLimit] = useState("");
//   const userId = "child123"; // temp — later dynamic

//   // Fetch current screen time & limit from backend
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get(`http://localhost:3000/api/time/status/${userId}`);
//         setScreenTime(res.data.timeUsed);
//         setDailyLimit(res.data.dailyLimit);
//       } catch (err) {
//         console.log("Error fetching screen time:", err);
//       }
//     };
//     fetchData();

//     // Optionally refresh every minute
//     const interval = setInterval(fetchData, 60000);
//     return () => clearInterval(interval);
//   }, []);

//   // Handle limit change by parent
//   const handleLimitChange = async () => {
//     try {
//       const res = await axios.put("http://localhost:3000/api/time/limit", {
//         userId,
//         limitMinutes: Number(newLimit),
//       });
//       setDailyLimit(res.data.timer.dailyLimit);
//       setNewLimit("");
//       alert("✅ Screen time limit updated successfully!");
//     } catch (err) {
//       console.log("Error updating limit:", err);
//       alert("❌ Failed to update screen time limit");
//     }
//   };

//   return (
//     <div className="bg-[#F4EDE6]">
//       {/* Navbar */}
//       <nav className="nav flex bg-opacity-90 h-16 text-white gap-72 top item items-center">
//         <div
//           className="text-center font-orbitron text-xl ml-7 font-bold 
//            bg-gradient-to-r from-[#EDFFF5] to-[rgba(133,213,237,0.74)] 
//            bg-clip-text text-transparent"
//         >
//           DoodleQuest
//         </div>
//         <div className="text-5xl font-robotoSlab">Guardian's Hub</div>

//         {/* ✅ Optional: show logged-in user */}
//         <div className="flex items-center gap-4 ml-6">
//           <div className="text-sm text-white">
//             Welcome, <span className="font-semibold text-[#C9F2FF]">{user?.firstName || 'Parent'}</span>
//           </div>
//           <div className="home">
//             <img src="/src/assets/home.png" alt="home" width="40" />
//           </div>
//           <div className="post">
//             <img src="/src/assets/post.png" alt="post" width="40" />
//           </div>
//         </div>
//       </nav>

//       {/* Rest of your existing dashboard UI */}
//       <div className="images flex justify-around mt-5">
//         <div className="img1">
//           <img src="/src/assets/image3.png" alt="" width="250" className="ml-11 mt-10" />
//         </div>
//         <div className="img2">
//           <img src="src/assets/image1.png" alt="" width="250" className="mt-0" />
//         </div>
//         <div>
//           <img src="src/assets/image2.png" alt="" width="250" className="mr-11 mt-10" />
//         </div>
//       </div>

//       {/* ... all the rest of your progress, cards, and footer code stays exactly the same ... */}
//     </div>
//   );
// };

// export default Parent;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser, useAuth } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const Parent = () => {
  const { user } = useUser();
  const { getToken } = useAuth();

  const [stats, setStats] = useState({
    totalDoodles: 0,
    puzzlesSolved: 0,
    totalQuizzes: 0,
    averageQuizScore: 0,
    screenTimeMinutes: 0,
    weeklyDoodles: 0,
    weeklyQuizzes: 0,
    weeklyPuzzles: 0,
    weeklyGoalPercent: 0
  });
  
  const menuItems = [
    { label: "DRAWINGS", active: true },
    { label: "STORY LISTENED", active: false },
    { label: "PUZZLE ANALYSIS", active: false },
    { label: "SCREEN TIME", active: false },
    { label: "PAPER TIME", active: false },
  ];


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const token = await getToken();
        if (!token) return;

        const response = await axios.get('http://localhost:3000/api/dashboard/stats', {
          headers: { Authorization: `Bearer ${token}` }
        });

        setStats(response.data);
      } catch (err) {
        console.error("Error fetching stats:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAnalytics();
  }, [getToken]);

  // --- Data for Charts ---
  
  // 1. Bar Chart Data (Weekly Activity)
  const barData = [
    { name: 'Doodles', count: stats.weeklyDoodles },
    { name: 'Quizzes', count: stats.weeklyQuizzes },
    { name: 'Puzzles', count: stats.weeklyPuzzles },
  ];

  // 2. Pie Chart Data (Total Distribution)
  const pieData = [
    { name: 'Doodles', value: stats.totalDoodles },
    { name: 'Puzzles', value: stats.puzzlesSolved },
    { name: 'Quizzes', value: stats.totalQuizzes },
  ];
  const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

  return (
    <div className="bg-[#F4EDE6] min-h-screen pb-10 flex flex-col">
      
      {/* --- Navbar --- */}
      <nav className="nav flex bg-[#2C2A4A] h-16 text-white justify-between items-center px-10 shadow-md">
        <div className="text-center font-orbitron text-xl font-bold bg-gradient-to-r from-[#EDFFF5] to-[rgba(133,213,237,0.74)] bg-clip-text text-transparent">
            DoodleQuest
        </div>
        <div className="text-3xl font-robotoSlab">Guardian's Hub</div>
        <div className="flex gap-4">
             <img src="/src/assets/home.png" alt="Home" width="30" />
             <img src="/src/assets/post.png" alt="Post" width="30" />
        </div>
      </nav>

    <div className="text-[#4A0303] font-robotoSlab text-5xl mt-8 text-center my-10">
          Progress Hub
      </div>
      {/* --- Top Images Section --- */}
      <div className="w-full max-w-7xl mx-auto mt-4 mb-14 flex justify-center gap-8 px-4">
        
          {/* Image 1 */}
          <div className="w-64 h-80 rounded-2xl overflow-hidden border-4 border-black shadow-xl bg-white">
             <img src="/src/assets/image3.png" alt="Child" className="w-full h-full object-cover" />
          </div>
          
          {/* Timer Image (Middle) */}
          <div className="w-64 h-80 rounded-2xl overflow-hidden border-4 border-black shadow-xl bg-pink-100 flex flex-col items-center justify-center">
             <h3 className="font-thin text-4xl mb-4 font-robotoSlab">Timer</h3>
             <img src="/src/assets/clock.png" alt="Timer" className="w-32 opacity-80" 
                  onError={(e) => e.target.src='https://cdn-icons-png.flaticon.com/512/2928/2928750.png'}/>
          </div>

          {/* Image 3 */}
          <div className="w-64 h-80 rounded-2xl overflow-hidden border-4 border-black shadow-xl bg-white">
             <img src="/src/assets/image2.png" alt="Child" className="w-full h-full object-cover" />
          </div>
      </div>

      

      {/* --- MAIN DASHBOARD GRID --- */}
      <div className="max-w-[1400px] mx-auto w-full px-6 flex gap-6 items-start">
        
        {/* === LEFT SIDEBAR (FIXED ALIGNMENT) === */}
        <div className="w-64 bg-[#0F172A] text-white  rounded-lg overflow-hidden shadow-lg flex-shrink-0 flex flex-col py-20">
            {menuItems.map((item, index) => (
                <div key={index} className="flex items-center h-20 w-full group cursor-pointer">
                    
                    {/* Left Column: Dot/Icon */}
                    <div className="w-[60px] flex justify-center items-center h-full relative">
                        {/* Optional: Vertical Line segment to connect dots */}
                        {index !== menuItems.length - 1 && (
                           <div className="absolute bottom-0 top-1/2 w-px bg-gray-700 -z-10 h-full"></div>
                        )}
                        {index !== 0 && (
                           <div className="absolute top-0 bottom-1/2 w-px bg-gray-700 -z-10 h-full"></div>
                        )}

                        {/* The Dot */}
                        <div className={`rounded-full p-1 ${item.active ? 'bg-white' : 'bg-transparent'}`}>
                            <div className={`w-2 h-2 rounded-full ${item.active ? 'bg-black' : 'bg-gray-500'}`}></div>
                        </div>
                    </div>

                    {/* Right Column: Label/Button */}
                    <div className="flex-1 pr-6 flex items-center">
                        <div className={`w-full py-2 text-lg font-bold tracking-wide transition-all duration-200
                            ${item.active 
                                ? 'bg-white text-black text-center rounded shadow-md scale-105' 
                                : 'text-white opacity-70 pl-4 hover:opacity-100'
                            }`}
                        >
                            {item.label}
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* === RIGHT CONTENT AREA === */}
        <div className="flex-grow bg-[#E2E2EA] p-6 rounded-2xl shadow-inner">
            
            {/* ROW 1: Highlights + Bar Chart */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                
                {/* 1. Weekly Highlights Card */}
                <div className="bg-[#4285F4] rounded-2xl text-white overflow-hidden shadow-lg flex flex-col">
                    <div className="p-6 flex items-center gap-4">
                         <div className="w-14 h-14 bg-yellow-300 rounded-full border-2 border-white flex items-center justify-center overflow-hidden">
                            <img src="/src/assets/user.png" alt="User" className="w-full h-full object-cover"/>
                         </div>
                         <div>
                             <h2 className="font-bold text-lg">{user?.firstName || 'UserABC'}</h2>
                             <p className="text-xs opacity-90">Age 8 • Grade 3</p>
                             <span className="bg-[#A2E49A] text-[#1a4515] text-[10px] px-2 py-0.5 rounded-full font-bold">Creative Learner</span>
                         </div>
                    </div>
                    <div className="bg-white text-gray-800 p-5 flex-grow flex flex-col justify-center gap-3">
                        <h3 className="text-[#4285F4] font-bold mb-1">🏆 This Week's Highlights</h3>
                        <div className="flex items-center gap-2 text-sm"><span className="text-yellow-500">⭐</span> Completed <b>{stats.weeklyDoodles}</b> Doodling Sessions</div>
                        <div className="flex items-center gap-2 text-sm"><span className="text-yellow-500">☀️</span> Took <b>{stats.weeklyQuizzes}</b> Quizzes</div>
                        <div className="flex items-center gap-2 text-sm"><span className="text-yellow-500">⭐</span> Solved <b>{stats.weeklyPuzzles}</b> Puzzles this week</div>
                        
                        <div className="mt-4">
                            <div className="flex justify-between text-xs font-bold mb-1">
                                <span>Weekly Learning Goal</span>
                                <span className="text-green-600">{stats.weeklyGoalPercent}% Done</span>
                            </div>
                            <div className="w-full bg-gray-200 h-2 rounded-full">
                                <div className="bg-red-500 h-2 rounded-full" style={{width: `${stats.weeklyGoalPercent}%`}}></div>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">Great progress this week!</p>
                        </div>
                    </div>
                </div>

                {/* 2. Bar Chart (Weekly Division) */}
                <div className="bg-gray-200 rounded-2xl p-4 shadow-lg border border-gray-300 flex flex-col">
                    <h3 className="text-sm font-bold mb-4 ml-2">Weekly Activity</h3>
                    <div className="flex-grow h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={barData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" tick={{fontSize: 12}} />
                                <YAxis allowDecimals={false} />
                                <Tooltip />
                                <Bar dataKey="count" fill="#8884d8" barSize={40} radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="flex justify-center gap-4 mt-2 text-xs text-gray-500">
                        <div className="flex items-center gap-1"><div className="w-2 h-2 bg-[#8884d8]"></div> Activities</div>
                    </div>
                </div>
            </div>

            {/* ROW 2: Stats Grid + Pie Chart */}
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
                
                {/* 3. Four Small Stats Cards */}
                <div className="grid grid-cols-2 gap-4">
                     {/* Card A */}
                     <div className="bg-[#EBDAC5] p-4 rounded-xl border border-black/20 shadow-sm relative">
                        <div className="text-xs font-bold text-gray-600">Total Drawings</div>
                        <div className="text-3xl font-bold mt-1">{stats.totalDoodles}</div>
                        <div className="text-[10px] text-green-700 font-bold mt-1">+12% from last week</div>
                        <div className="absolute top-2 right-2"><img src="/src/assets/pin.png" w="20" /></div>
                     </div>
                     {/* Card B */}
                     <div className="bg-[#C8E1A5] p-4 rounded-xl border border-black/20 shadow-sm relative">
                        <div className="text-xs font-bold text-gray-600">Quizzes Taken</div>
                        <div className="text-3xl font-bold mt-1">{stats.totalQuizzes}</div>
                        <div className="text-[10px] text-green-700 font-bold mt-1">+12% from last week</div>
                        <div className="absolute top-2 right-2"><img src="/src/assets/copy.png" w="20" /></div>
                     </div>
                     {/* Card C */}
                     <div className="bg-[#A9C2E9] p-4 rounded-xl border border-black/20 shadow-sm relative">
                        <div className="text-xs font-bold text-gray-600">Puzzles Solved</div>
                        <div className="text-3xl font-bold mt-1">{stats.puzzlesSolved}</div>
                        <div className="text-[10px] text-green-700 font-bold mt-1">+12% from last week</div>
                        <div className="absolute top-2 right-2"><img src="/src/assets/puzzle.png" w="20" /></div>
                     </div>
                     {/* Card D */}
                     <div className="bg-[#85DCE4] p-4 rounded-xl border border-black/20 shadow-sm relative">
                        <div className="text-xs font-bold text-gray-600">Screen Time</div>
                        <div className="text-3xl font-bold mt-1">{stats.screenTimeMinutes} <span className="text-sm">min</span></div>
                        <div className="text-[10px] text-green-700 font-bold mt-1">+12% from last week</div>
                        <div className="absolute top-2 right-2"><img src="/src/assets/laptop.png" w="20" /></div>
                     </div>
                </div>

                {/* 4. Pie Chart (Total Doodles) */}
                <div className="bg-gray-200 rounded-2xl p-4 shadow-lg border border-gray-300 flex flex-col items-center justify-center">
                    <h3 className="text-sm font-bold self-start mb-2">Total Activity</h3>
                    <div className="w-full h-48 relative">
                         <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={pieData}
                                    innerRadius={40}
                                    outerRadius={60}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                         </ResponsiveContainer>
                         {/* Center Text */}
                         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                             <span className="text-xl font-bold">{stats.totalDoodles + stats.totalQuizzes + stats.puzzlesSolved}</span>
                         </div>
                    </div>
                    <div className="text-[16px] flex gap-2 mt-2">
                        <span className="text-[#6c68b8]">● Doodles</span>
                        <span className="text-[#4eb575]">● Puzzles</span>
                        <span className="text-[#dda533]">● Quizzes</span>
                    </div>
                </div>

            </div>

        </div>
      </div>

      {/* Warning Section */}
      <div className="w-11/12 max-w-5xl mx-auto mt-8 bg-[#D7D3D3] p-6 rounded-lg shadow text-center font-robotoSlab border-l-8 border-yellow-500">
        <p className="text-lg mb-2"><span className="text-red-600 font-bold">⚠️ Warning:</span> Encourage regular breaks for movement, outdoor play, and face-to-face interaction.</p>
        <p className="text-lg"><span className="text-green-600 font-bold">🌟 Good News:</span> Your child is doing amazing! Their creativity is growing.</p>
      </div>

    </div>
  );
};

export default Parent;