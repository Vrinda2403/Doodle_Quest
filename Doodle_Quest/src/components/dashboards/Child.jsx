// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useUser, useAuth } from '@clerk/clerk-react';
// import axios from 'axios';
// import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
// import BlueBG from '../../assets/BlueBG.png';
// import CloudRainbow from '../../assets/Cloudrainbow.png';
// import CloudSun from '../../assets/CloudSun.png';
// import BlurImg from '../../assets/BlurImg.png';
// import Badges from '../../assets/Badges.png';
// import HowBg from '../../assets/HowBg.png';
// import Icon1 from '../../assets/Icon1.png';
// import Icon2 from '../../assets/Icon2.png';
// import Icon3 from '../../assets/Icon3.png';
// import Icon4 from '../../assets/Icon4.png';
// import Kiddy from '../../assets/Kiddy.png';
// import Welcome2 from '../Welcome2';

// const Child = () => {
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('COMPLETE');
//   const { user } = useUser();

//   const { getToken } = useAuth();
//   const [history, setHistory] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchHistory = async () => {
//       try {
//         const token = await getToken();
//         if (!token) {
//           return;
//         }

//         const response = await axios.get(
//           'http://localhost:3000/api/storage/history',
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         setHistory(response.data);
//       } catch (err) {
//         setError('Failed to fetch history.');
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchHistory();
//   }, [getToken]);

//   const tabs = ['COMPLETE', 'LEARN', 'EXCELL', 'RANKINGS'];

//   const howItWorksSteps = [
//     {
//       number: '01',
//       title: 'Draw & Doodle',
//       description: 'Your child draws anything they imagine - on screen or paper!',
//       bgColor: 'bg-[#FACF71]',
//       icon: Icon1,
//     },
//     {
//       number: '02',
//       title: 'AI Recognition',
//       description:
//         "Our smart AI instantly recognizes their creation and understands what they've drawn.",
//       bgColor: 'bg-[#F2674A]',
//       icon: Icon2,
//     },
//     {
//       number: '03',
//       title: 'Story Generation',
//       description:
//         'A personalized story unfolds featuring their drawing as the main character.',
//       bgColor: 'bg-[#FEC6DF]',
//       icon: Icon3,
//     },
//     {
//       number: '04',
//       title: 'Learn & Play',
//       description:
//         'Interactive STEM challenges and games make learning an adventure!',
//       bgColor: 'bg-[#91E268]',
//       icon: Icon4,
//     },
//   ];

//   const footerLinks = {
//     services: [
//       { name: 'Screen Drawing', href: '/screendrawing' },
//       { name: 'Paper Drawing', href: '/paperdrawing' },
//       { name: 'Personalized Stories', href: '/storytime' },
//       { name: 'Quizzes', href: '/quizflash' },
//     ],
//     useful: [
//       { name: 'About us', href: '/' },
//       { name: 'Our team', href: '/' },
//       { name: 'Privacy policy', href: '/' },
//       { name: 'Contact us', href: '/' },
//       { name: 'Terms of service', href: '/' },
//     ],
//   };

//   return (
//     <div>
//       <Welcome2 />

//       <div className="text-center mt-6 text-xl font-semibold text-gray-800">
//         Welcome,{' '}
//         <span className="text-[#3B17AB]">{user?.firstName || 'Explorer'}</span>!
//       </div>

//       <div
//         className="min-h-screen w-full flex items-center justify-center bg-[length:100%_100%] bg-center"
//         style={{ backgroundImage: `url(${BlueBG})` }}
//       >
//         <div className="relative w-full flex flex-col items-center gap-y-8">
//           <img
//             src={CloudRainbow}
//             alt="cloud with rainbow"
//             className="absolute -top-14 -left-14 w-[28%] z-0"
//           />
//           <img
//             src={CloudSun}
//             alt="cloud with sun"
//             className="absolute -bottom-32 -left-3 w-[30%] z-0"
//           />

//           <header className="z-10 mt-28 text-center px-4">
//             <h1 className="text-4xl md:text-7xl font-robotoSlab text-black tracking-widest xs:text-3xl">
//               CHILD DASHBOARD
//             </h1>
//           </header>

//           <nav className="z-10 bg-white/40 backdrop-blur-md rounded-2xl flex items-center font-alexandria space-x-2 flex-wrap justify-center mb-6">
//             {tabs.map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`py-7 px-8 rounded-2xl text-2xl font-semibold transition-all
//                 ${
//                   activeTab === tab
//                     ? 'bg-white text-gray-800'
//                     : 'text-gray-800 hover:bg-white/20'
//                 }
//                 xs:px-4 xs:text-base`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </nav>

//           <main
//             className="z-10 bg-white/20 max-w-6xl backdrop-blur-sm p-3 bg-cover bg-center rounded-2xl shadow-lg mb-52 w-full px-4"
//             style={{ backgroundImage: `url(${BlurImg})` }}
//           >
//             {loading && (
//               <div className="text-center p-10 font-bold text-2xl text-gray-800">
//                 Loading Your Progress...
//               </div>
//             )}
//             {error && (
//               <div className="text-center p-10 font-bold text-2xl text-red-600">
//                 {error}
//               </div>
//             )}

//             {history && (
//               <div className="flex flex-col gap-4">
//                 {/* Flex Container for the 3 Boxes */}
//                 <div className="flex justify-center gap-6 px-6 py-10">
                  
//                   {/* --- Box 1: Latest Doodle --- */}
//                   <div className="min-h-[50vh] bg-white/30 min-w-[22vw] backdrop-blur-md p-6 rounded-xl shadow-md flex flex-col items-center justify-center">
//                     {history.doodles.length > 0 ? (
//                        <>
//                         <img
//                           src={history.doodles[0].imageUrl}
//                           alt="Latest Doodle"
//                           className="w-full h-64 object-cover rounded-lg border-2 border-white bg-white shadow-md"
//                         />
//                         <p className="mt-4 font-bold text-gray-800">Latest</p>
//                        </>
//                     ) : (
//                       <p className="text-gray-700">No doodles yet!</p>
//                     )}
//                   </div>

//                   {/* --- Box 2: 2nd Latest Doodle --- */}
//                   <div className="min-h-[50vh] bg-white/30 min-w-[22vw] backdrop-blur-md p-6 rounded-xl shadow-md flex flex-col items-center justify-center">
//                     {history.doodles.length > 1 ? (
//                        <>
//                         <img
//                           src={history.doodles[1].imageUrl}
//                           alt="2nd Latest Doodle"
//                           className="w-full h-64 object-cover rounded-lg border-2 border-white bg-white shadow-md"
//                         />
//                         <p className="mt-4 font-bold text-gray-800">Recent</p>
//                        </>
//                     ) : (
//                       <div className="text-gray-400 border-2 border-dashed border-gray-300 w-full h-64 rounded-lg flex items-center justify-center">
//                         Empty Slot
//                       </div>
//                     )}
//                   </div>

//                   {/* --- Box 3: 3rd Latest Doodle --- */}
//                   <div className="min-h-[50vh] bg-white/30 min-w-[22vw] backdrop-blur-md p-6 rounded-xl shadow-md flex flex-col items-center justify-center">
//                     {history.doodles.length > 2 ? (
//                        <>
//                         <img
//                           src={history.doodles[2].imageUrl}
//                           alt="3rd Latest Doodle"
//                           className="w-full h-64 object-cover rounded-lg border-2 border-white bg-white shadow-md"
//                         />
//                          <p className="mt-4 font-bold text-gray-800">Previous</p>
//                        </>
//                     ) : (
//                       <div className="text-gray-400 border-2 border-dashed border-gray-300 w-full h-64 rounded-lg flex items-center justify-center">
//                         Empty Slot
//                       </div>
//                     )}
//                   </div>

//                 </div>
                
//                 {/* Show All Link */}
//                 <div className="text-right pr-10 pb-4">
//                     <Link
//                     to="/doddledeck"
//                     className="mt-4 px-4 py-2 rounded-full bg-blue-300 text-black font-medium font-robotoSlab shadow-sm hover:bg-purple-200 transition"
//                   >
//                     Show All Doodles &gt;
//                   </Link>
//                 </div>
//               </div>
//             )}
//           </main>
//         </div>
//       </div>

//       {/* Badges Section */}
//       <div className="flex flex-col justify-center items-center mb-10">
//         <header className="z-10 mt-20 text-center px-4">
//           <h1 className="text-4xl md:text-7xl font-robotoSlab text-black tracking-widest xs:text-3xl">
//             EARNED BADGES
//           </h1>
//         </header>
//         <div className="mt-14 max-w-6xl">
//           <img src={Badges} alt="Earned Badges" />
//         </div>
//       </div>

//       {/* How It Works */}
//       <div
//         className="min-h-[120vh] w-full flex flex-col items-center justify-center bg-[length:100%_100%] bg-center p-8"
//         style={{ backgroundImage: `url(${HowBg})` }}
//       >
//         <header className="text-center mt-16">
//           <h1 className="text-4xl md:text-7xl font-robotoSlab text-black tracking-wider font-semibold">
//             HOW <span className="text-[#F9FD00]">DoodleQuest</span> WORKS?
//           </h1>
//           <p className="mt-4 text-xl md:text-2xl text-gray-800 font-alexandria">
//             From simple scribbles to magical learning adventures in just 4 easy steps
//           </p>
//         </header>

//         <main className="flex flex-wrap justify-center mt-10 items-stretch gap-12 pt-8">
//           {howItWorksSteps.map((step) => (
//             <div
//               key={step.number}
//               className={`relative w-80 border-[3px] border-black rounded-2xl p-8 text-center flex flex-col items-center shadow-md ${step.bgColor}`}
//             >
//               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 font-robotoSlab bg-[#D9D9D9] rounded-full border-2 border-black flex items-center justify-center z-10">
//                 <span className="text-black font-medium text-4xl">{step.number}</span>
//               </div>

//               <img
//                 src={step.icon}
//                 alt={`${step.title} icon`}
//                 className="w-28 h-28 mt-8 mb-4 object-contain bg-white rounded-full"
//               />

//               <h3 className="text-5xl text-black mb-6 tracking-wider font-robotoSlab">
//                 {step.title}
//               </h3>
//               <p className="text-black text-2xl font-robotoSlab leading-snug">
//                 {step.description}
//               </p>
//             </div>
//           ))}
//         </main>
//       </div>

//       {/* Footer */}
//       <footer className="bg-[#FDF9F0] text-gray-800 font-sans p-2 md:px-16 md:pt-40">
//         <div className='py-4 container mx-auto'>
//           <img src={Kiddy} alt="Kiddy Logo" className="w-24" />
//         </div>
//         <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
//           {/* Column 1: About Company */}
//           <div className="space-y-4">
//             <h3 className="font-righteous text-lg uppercase">ABOUT COMPANY</h3>
//             <p className="text-sm leading-relaxed text-[#373737]">
//               Transform your child's drawings into magical learning adventures! Our AI recognizes their doodles and creates personalized stories, games, and STEM challenges.
//             </p>
//             <div className="flex space-x-3">
//               <a href="#" className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-700">
//                 <FaTwitter />
//               </a>
//               <a href="#" className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-700">
//                 <FaFacebookF />
//               </a>
//               <a href="#" className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-700">
//                 <FaInstagram />
//               </a>
//               <a href="#" className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-700">
//                 <FaLinkedinIn />
//               </a>
//             </div>
//           </div>

//           {/* Column 2: Our Services */}
//           <div className="space-y-4">
//             <h3 className="font-righteous text-lg">Our Services</h3>
//             <ul className="space-y-2 text-[#373737]">
//               {footerLinks.services.map(link => (
//                 <li key={link.name}>
//                   <Link to={link.href} className="text-sm hover:underline">{link.name}</Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 3: Useful Links */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-righteous">Useful links</h3>
//             <ul className="space-y-2 text-[#373737]">
//               {footerLinks.useful.map(link => (
//                 <li key={link.name}>
//                   <a href={link.href} className="text-sm hover:underline">{link.name}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 4: Newsletter */}
//           <div className="space-y-4">
//             <h3 className="font-righteous text-lg">Newsletter</h3>
//             <p className="text-sm">
//               Applications prodize before front end ortals visualize front end.
//             </p>
//             <form>
//               <input
//                 type="email"
//                 placeholder="Your email"
//                 className="w-full p-3 bg-gray-800 text-white placeholder-gray-400 rounded-md mb-3 focus:outline-none"
//               />
//               <button
//                 type="submit"
//                 className="w-full bg-[#F5A623] text-black font-bold p-3 rounded-md hover:bg-orange-500 transition-colors"
//               >
//                 Subscribe
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="mt-12 pt-8 border-t border-gray-500 text-center">
//           <p className="text-sm text-gray-500">
//             &copy; {new Date().getFullYear()} DoodleQuest. All Rights Reserved.
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Child;

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser, useAuth } from '@clerk/clerk-react';
import axios from 'axios';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import BlueBG from '../../assets/BlueBG.png';
import CloudRainbow from '../../assets/Cloudrainbow.png';
import CloudSun from '../../assets/CloudSun.png';
import BlurImg from '../../assets/BlurImg.png';
import HowBg from '../../assets/HowBg.png';
import Icon1 from '../../assets/Icon1.png';
import Icon2 from '../../assets/Icon2.png';
import Icon3 from '../../assets/Icon3.png';
import Icon4 from '../../assets/Icon4.png';
import Kiddy from '../../assets/Kiddy.png';
import Welcome2 from '../Welcome2';

// ✅ Import Badge Images
// Make sure these paths are correct based on your project structure
import Badge1 from '../../assets/Badges/Badge1.png';
import Badge2 from '../../assets/Badges/Badge2.png';
import Badge3 from '../../assets/Badges/Badge3.png';
import Badge4 from '../../assets/Badges/Badge4.png';
import Badge5 from '../../assets/Badges/Badge5.png';

// ✅ Create a map to link DB strings to imported images
const badgeImageMap = {
  "Badge1.png": Badge1,
  "Badge2.png": Badge2,
  "Badge3.png": Badge3,
  "Badge4.png": Badge4,
  "Badge5.png": Badge5,
  // Add fallbacks for other names if you used them (e.g., "Level 1 Badge")
  "Level 1 Badge": Badge1, 
  "Level 2 Badge": Badge2,
  "Level 3 Badge": Badge3,
  "Level 4 Badge": Badge4,
  "Level 5 Badge": Badge5,
};

const Child = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('COMPLETE');
  const { user } = useUser();

  const { getToken } = useAuth();
  const [history, setHistory] = useState(null);
  const [badges, setBadges] = useState([]); // ✅ State for badges
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await getToken();
        if (!token) return;

        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };

        // Fetch both History and Rewards in parallel
        const [historyRes, rewardsRes] = await Promise.all([
          axios.get('http://localhost:3000/api/storage/history', config),
          axios.get('http://localhost:3000/api/rewards/my-rewards', config)
        ]);

        setHistory(historyRes.data);
        setBadges(rewardsRes.data); //  Save badges

      } catch (err) {
        setError('Failed to fetch data.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [getToken]);

  const tabs = ['COMPLETE', 'LEARN', 'EXCELL', 'RANKINGS'];

  const howItWorksSteps = [
    { number: '01', title: 'Draw & Doodle', description: 'Your child draws anything they imagine - on screen or paper!', bgColor: 'bg-[#FACF71]', icon: Icon1 },
    { number: '02', title: 'AI Recognition', description: "Our smart AI instantly recognizes their creation and understands what they've drawn.", bgColor: 'bg-[#F2674A]', icon: Icon2 },
    { number: '03', title: 'Story Generation', description: 'A personalized story unfolds featuring their drawing as the main character.', bgColor: 'bg-[#FEC6DF]', icon: Icon3 },
    { number: '04', title: 'Learn & Play', description: 'Interactive STEM challenges and games make learning an adventure!', bgColor: 'bg-[#91E268]', icon: Icon4 },
  ];

  const footerLinks = {
    services: [
      { name: 'Screen Drawing', href: '/screendrawing' },
      { name: 'Paper Drawing', href: '/paperdrawing' },
      { name: 'Personalized Stories', href: '/storytime' },
      { name: 'Quizzes', href: '/quizflash' },
    ],
    useful: [
      { name: 'About us', href: '/' },
      { name: 'Our team', href: '/' },
      { name: 'Privacy policy', href: '/' },
      { name: 'Contact us', href: '/' },
      { name: 'Terms of service', href: '/' },
    ],
  };

  return (
    <div>
      <Welcome2 />

      <div className="text-center mt-6 text-xl font-semibold text-gray-800">
        Welcome, <span className="text-[#3B17AB]">{user?.firstName || 'Explorer'}</span>!
      </div>

      <div className="min-h-screen w-full flex items-center justify-center bg-[length:100%_100%] bg-center" style={{ backgroundImage: `url(${BlueBG})` }}>
        <div className="relative w-full flex flex-col items-center gap-y-8">
          <img src={CloudRainbow} alt="cloud" className="absolute -top-14 -left-14 w-[28%] z-0" />
          <img src={CloudSun} alt="cloud" className="absolute -bottom-32 -left-3 w-[30%] z-0" />

          <header className="z-10 mt-28 text-center px-4">
            <h1 className="text-4xl md:text-7xl font-robotoSlab text-black tracking-widest xs:text-3xl">CHILD DASHBOARD</h1>
          </header>

          <nav className="z-10 bg-white/40 backdrop-blur-md rounded-2xl flex items-center font-alexandria space-x-2 flex-wrap justify-center mb-6">
            {tabs.map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`py-7 px-8 rounded-2xl text-2xl font-semibold transition-all ${activeTab === tab ? 'bg-white text-gray-800' : 'text-gray-800 hover:bg-white/20'} xs:px-4 xs:text-base`}>{tab}</button>
            ))}
          </nav>

          <main className="z-10 bg-white/20 max-w-6xl backdrop-blur-sm p-3 bg-cover bg-center rounded-2xl shadow-lg mb-52 w-full px-4" style={{ backgroundImage: `url(${BlurImg})` }}>
            {loading && <div className="text-center p-10 font-bold text-2xl text-gray-800">Loading...</div>}
            {error && <div className="text-center p-10 font-bold text-2xl text-red-600">{error}</div>}

            {history && (
              <div className="flex flex-col gap-4">
                <div className="flex justify-center gap-6 px-6 py-10">
                  {/* Box 1: Latest Doodle */}
                  <div className="min-h-[50vh] bg-white/50 min-w-[22vw] backdrop-blur-md p-6 rounded-xl shadow-md flex flex-col items-center justify-center">
                    {history.doodles.length > 0 ? (
                       <>
                        <img src={history.doodles[0].imageUrl} alt="Latest" className="w-full h-64 object-cover rounded-lg border-2 border-white bg-white shadow-md" />
                        <p className="mt-4 font-bold text-gray-800">Latest</p>
                       </>
                    ) : (
                      <p className="text-gray-700">No doodles yet!</p>
                    )}
                  </div>

                  {/* Box 2: 2nd Latest */}
                  <div className="min-h-[50vh] bg-white/30 min-w-[22vw] backdrop-blur-md p-6 rounded-xl shadow-md flex flex-col items-center justify-center">
                    {history.doodles.length > 1 ? (
                       <>
                        <img src={history.doodles[1].imageUrl} alt="Recent" className="w-full h-64 object-cover rounded-lg border-2 border-white bg-white shadow-md" />
                        <p className="mt-4 font-bold text-gray-800">Recent</p>
                       </>
                    ) : (
                      <div className="text-gray-400 border-2 border-dashed border-gray-300 w-full h-64 rounded-lg flex items-center justify-center">Empty Slot</div>
                    )}
                  </div>

                  {/* Box 3: 3rd Latest */}
                  <div className="min-h-[50vh] bg-white/30 min-w-[22vw] backdrop-blur-md p-6 rounded-xl shadow-md flex flex-col items-center justify-center">
                    {history.doodles.length > 2 ? (
                       <>
                        <img src={history.doodles[2].imageUrl} alt="Previous" className="w-full h-64 object-cover rounded-lg border-2 border-white bg-white shadow-md" />
                         <p className="mt-4 font-bold text-gray-800">Previous</p>
                       </>
                    ) : (
                      <div className="text-gray-400 border-2 border-dashed border-gray-300 w-full h-64 rounded-lg flex items-center justify-center">Empty Slot</div>
                    )}
                  </div>
                </div>
                <div className="text-right pr-10 pb-4">
                    <Link to="/doddledeck" className="mt-4 px-4 py-2 rounded-full bg-blue-300 text-black font-medium font-robotoSlab shadow-sm hover:bg-purple-200 transition">
                    Show All Doodles &gt;
                    </Link>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>

      {/*  EARNED BADGES SECTION */}
      {/* ✅ EARNED BADGES SECTION (Updated Sizes) */}
      <div className="flex flex-col justify-center items-center mb-10">
        <header className="z-10 mt-20 text-center px-4">
          <h1 className="text-4xl md:text-7xl font-robotoSlab text-black tracking-widest xs:text-3xl">EARNED BADGES</h1>
        </header>
        
        <div className="mt-14 max-w-6xl w-full px-4">
           {badges.length > 0 ? (
             <div className="flex flex-wrap justify-center gap-8">
               {badges.map((badgeObj) => {
                 const badge = badgeObj.rewardId;
                 const imageSrc = badgeImageMap[badge.icon] || Badge1;
                 
                 return (
                   <div key={badgeObj._id} className="flex flex-col items-center bg-gray-700/60 backdrop-blur-sm p-3 rounded-xl shadow-lg max-w-6xl transition transform hover:scale-110">
                     {/* Increased Image Size (w-48 h-48) */}
                     <img src={imageSrc} alt={badge.name} className="w-64 h-64 object-contain drop-shadow-md" />
                     
                     {/* Increased Text Size (text-xl) */}
                     <h3 className="font-bold text-center font-robotoSlab text-xl text-gray-800">{badge.name}</h3>
                   </div>
                 );
               })}
             </div>
           ) : (
             <div className="text-center bg-white/50 p-8 rounded-xl backdrop-blur-sm">
                <p className="text-2xl font-robotoSlab text-gray-600">No badges earned yet. 🏆</p>
                <p className="text-gray-500 mt-2">Keep doodling and taking quizzes to unlock them!</p>
             </div>
           )}
        </div>
      </div>

      {/* How It Works */}
      <div className="min-h-[120vh] w-full flex flex-col items-center justify-center bg-[length:100%_100%] bg-center p-8" style={{ backgroundImage: `url(${HowBg})` }}>
        <header className="text-center mt-16">
          <h1 className="text-4xl md:text-7xl font-robotoSlab text-black tracking-wider font-semibold">
            HOW <span className="text-[#F9FD00]">DoodleQuest</span> WORKS?
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-800 font-alexandria">
            From simple scribbles to magical learning adventures in just 4 easy steps
          </p>
        </header>

        <main className="flex flex-wrap justify-center mt-10 items-stretch gap-12 pt-8">
          {howItWorksSteps.map((step) => (
            <div key={step.number} className={`relative w-80 border-[3px] border-black rounded-2xl p-8 text-center flex flex-col items-center shadow-md ${step.bgColor}`}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 font-robotoSlab bg-[#D9D9D9] rounded-full border-2 border-black flex items-center justify-center z-10">
                <span className="text-black font-medium text-4xl">{step.number}</span>
              </div>
              <img src={step.icon} alt={`${step.title} icon`} className="w-28 h-28 mt-8 mb-4 object-contain bg-white rounded-full" />
              <h3 className="text-5xl text-black mb-6 tracking-wider font-robotoSlab">{step.title}</h3>
              <p className="text-black text-2xl font-robotoSlab leading-snug">{step.description}</p>
            </div>
          ))}
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-[#FDF9F0] text-gray-800 font-sans p-2 md:px-16 md:pt-40">
        <div className='py-4 container mx-auto'>
          <img src={Kiddy} alt="Kiddy Logo" className="w-24" />
        </div>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <h3 className="font-righteous text-lg uppercase">ABOUT COMPANY</h3>
            <p className="text-sm leading-relaxed text-[#373737]">
              Transform your child's drawings into magical learning adventures! Our AI recognizes their doodles and creates personalized stories, games, and STEM challenges.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-700"><FaTwitter /></a>
              <a href="#" className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-700"><FaFacebookF /></a>
              <a href="#" className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-700"><FaInstagram /></a>
              <a href="#" className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-700"><FaLinkedinIn /></a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-righteous text-lg">Our Services</h3>
            <ul className="space-y-2 text-[#373737]">
              {footerLinks.services.map(link => (
                <li key={link.name}><Link to={link.href} className="text-sm hover:underline">{link.name}</Link></li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-righteous">Useful links</h3>
            <ul className="space-y-2 text-[#373737]">
              {footerLinks.useful.map(link => (
                <li key={link.name}><a href={link.href} className="text-sm hover:underline">{link.name}</a></li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-righteous text-lg">Newsletter</h3>
            <p className="text-sm">Applications prodize before front end ortals visualize front end.</p>
            <form>
              <input type="email" placeholder="Your email" className="w-full p-3 bg-gray-800 text-white placeholder-gray-400 rounded-md mb-3 focus:outline-none" />
              <button type="submit" className="w-full bg-[#F5A623] text-black font-bold p-3 rounded-md hover:bg-orange-500 transition-colors">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-500 text-center">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} DoodleQuest. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Child;