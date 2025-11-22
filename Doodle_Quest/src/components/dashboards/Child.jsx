import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useUser} from '@clerk/clerk-react'; 
import { useNavigate } from 'react-router-dom';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import axios from 'axios';

import BlueBG from '../../assets/BlueBG.png'
import CloudRainbow from '../../assets/Cloudrainbow.png'
import CloudSun from '../../assets/CloudSun.png'
import BlurImg from '../../assets/BlurImg.png'
import Badges from '../../assets/Badges.png'
import HowBg from '../../assets/HowBg.png'
import Icon1 from '../../assets/Icon1.png'
import Icon2 from '../../assets/Icon2.png'
import Icon3 from '../../assets/Icon3.png'
import Icon4 from '../../assets/Icon4.png'
import Kiddy from '../../assets/Kiddy.png'
import Welcome2 from '../Welcome2';

const Child = () => {
  const [activeTab, setActiveTab] = useState('COMPLETE')
  const tabs = ['COMPLETE', 'LEARN', 'EXCELL', 'RANKINGS']
  const [cameraAllowed, setCameraAllowed] = useState(false);

  const navigate = useNavigate()
  const { user } = useUser();

  const [timeUsed, setTimeUsed] = useState(0);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchCamera = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/camera/${userId}`);
        setCameraAllowed(res.data.cameraAllowed);
      } catch (err) {
        console.log("Camera fetch error:", err);
      }
    };
    fetchCamera();
  }, []);

  useEffect(() => {
    const startScreenTimer = async () => {
      try {
        await axios.post('http://localhost:5000/api/screentime/start', { userId });
        console.log("Timer started for", userId);
      } catch (error) {
        console.error("Error starting timer:", error);
      }
    };

    if (userId) {
      startScreenTimer();
    }

    return async () => {
      try {
        await axios.post('http://localhost:5000/api/screentime/pause', { userId });
        console.log("Timer paused for", userId);
      } catch (error) {
        console.error("Error pausing timer:", error);
      }
    };
  }, [userId]);

  useEffect(() => {
    if (!userId) return;

    const fetchTime = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/screentime/${userId}`);
        setTimeUsed(res.data.timeUsed || 0);
      } catch (error) {
        console.error("Error fetching screen time:", error);
      }
    };

    fetchTime();
    const interval = setInterval(fetchTime, 60000);
    return () => clearInterval(interval);
  }, [userId]);

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
    ]
  };

  return (
    <div>
      <Welcome2 />

      {/* HERO SECTION */}
      <div
        className="min-h-screen w-full flex items-center justify-center bg-[length:100%_100%] bg-center"
        style={{ backgroundImage: `url(${BlueBG})` }}
      >
        <div className="relative w-full flex flex-col items-center gap-y-8">
          <img src={CloudRainbow} alt="cloud" className="absolute -top-14 -left-14 w-[28%]" />
          <img src={CloudSun} alt="cloud" className="absolute -bottom-32 -left-3 w-[30%]" />

          <header className="z-10 mt-28 text-center px-4">
            <h1 className="text-4xl md:text-7xl font-robotoSlab tracking-widest">
              CHILD DASHBOARD
            </h1>
          </header>

          <nav className="z-10 bg-white/40 backdrop-blur-md rounded-2xl flex items-center space-x-2 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-7 px-8 rounded-2xl text-2xl font-semibold transition-all ${
                  activeTab === tab ? 'bg-white text-gray-800' : 'text-gray-800 hover:bg-white/20'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>

          <main
            className="z-10 bg-white/20 max-w-6xl backdrop-blur-sm p-3 rounded-2xl shadow-lg mb-52 w-full px-4"
            style={{ backgroundImage: `url(${BlurImg})` }}
          >
            <div className="flex justify-center gap-6 px-6 py-10">
              <div className="min-h-[50vh] bg-white/30 min-w-[22vw] p-6 rounded-xl shadow-md">
                <h2 className="font-semibold text-lg mb-4">Screen Time</h2>
                <p className="text-2xl font-bold">{timeUsed} mins used today</p>
              </div>

              <div className="min-h-[50vh] bg-white/30 min-w-[22vw] p-6 rounded-xl shadow-md">
                <h2 className="font-semibold text-lg">Box 2</h2>
              </div>

              <div className="min-h-[50vh] bg-white/30 min-w-[22vw] p-6 rounded-xl shadow-md">
                <h2 className="font-semibold text-lg">Box 3</h2>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* ================================
            BADGES SECTION (COMMENTED)
      ================================= */}

      {/*
      <div className="flex flex-col justify-center items-center mb-10">
        <header className="z-10 mt-20 text-center px-4">
          <h1 className="text-4xl md:text-7xl font-robotoSlab tracking-widest">
            EARNED BADGES
          </h1>
        </header>

        <div className="mt-14 max-w-6xl w-full px-4">
          {badges.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-8">
              {badges.map((badgeObj) => {
                const badge = badgeObj.rewardId;
                const imageSrc = badgeImageMap[badge.icon] || Badge1;

                return (
                  <div key={badgeObj._id} className="flex flex-col items-center bg-gray-700/60 p-3 rounded-xl shadow-lg transition">
                    <img src={imageSrc} alt={badge.name} className="w-64 h-64 object-contain" />
                    <h3 className="font-bold text-center text-xl text-gray-800">{badge.name}</h3>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center bg-white/50 p-8 rounded-xl">
              <p className="text-2xl text-gray-600">No badges earned yet. 🏆</p>
              <p className="text-gray-500 mt-2">Keep doodling to unlock them!</p>
            </div>
          )}
        </div>
      </div>
      */}

      {/* HOW IT WORKS */}
      <div
        className="min-h-[120vh] w-full flex flex-col items-center justify-center bg-center p-8"
        style={{ backgroundImage: `url(${HowBg})` }}
      >
        <header className="text-center mt-16">
          <h1 className="text-4xl md:text-7xl font-robotoSlab tracking-wider font-semibold">
            HOW <span className="text-[#F9FD00]">DoodleQuest</span> WORKS?
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-800">
            From simple scribbles to magical learning adventures in just 4 easy steps
          </p>
        </header>

        <main className="flex flex-wrap justify-center mt-10 items-stretch gap-12 pt-8">
          {howItWorksSteps.map((step) => (
            <div
              key={step.number}
              className={`relative w-80 border-[3px] border-black rounded-2xl p-8 text-center shadow-md ${step.bgColor}`}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#D9D9D9] rounded-full border-2 border-black flex items-center justify-center">
                <span className="text-black text-4xl">{step.number}</span>
              </div>

              <img src={step.icon} className="w-28 h-28 mt-8 mb-4 object-contain bg-white rounded-full" />

              <h3 className="text-5xl mb-6 tracking-wider">{step.title}</h3>
              <p className="text-2xl leading-snug">{step.description}</p>
            </div>
          ))}
        </main>
      </div>

      {/* FOOTER */}
      <footer className="bg-[#FDF9F0] text-gray-800 p-2 md:px-16 md:pt-40">
        <div className='py-4 container mx-auto'>
          <img src={Kiddy} alt="Kiddy Logo" className="w-24" />
        </div>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          <div className="space-y-4">
            <h3 className="font-righteous text-lg uppercase">ABOUT COMPANY</h3>
            <p className="text-sm leading-relaxed text-[#373737]">
              Transform your child's drawings into magical learning adventures!
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center"><FaTwitter /></a>
              <a href="#" className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center"><FaFacebookF /></a>
              <a href="#" className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center"><FaInstagram /></a>
              <a href="#" className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center"><FaLinkedinIn /></a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-righteous text-lg">Our Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map(link => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm hover:underline">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-righteous">Useful links</h3>
            <ul className="space-y-2">
              {footerLinks.useful.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm hover:underline">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-righteous text-lg">Newsletter</h3>
            <p className="text-sm">Join for updates.</p>
            <form>
              <input type="email" placeholder="Your email" className="w-full p-3 bg-gray-800 text-white rounded-md mb-3" />
              <button type="submit" className="w-full bg-[#F5A623] p-3 rounded-md">Subscribe</button>
            </form>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-500 text-center">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} DoodleQuest. All Rights Reserved.</p>
        </div>
      </footer>

    </div>
  )
};

export default Child;
