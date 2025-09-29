import React, { useState } from 'react'
import BlueBG from '../../assets/BlueBG.png'
import CloudRainbow from '../../assets/Cloudrainbow.png'
import CloudSun from '../../assets/CloudSun.png'
import BlurImg from '../../assets/BlurImg.png'

const Child = () => {
  const [activeTab, setActiveTab] = useState('COMPETE')
  const tabs = ['COMPETE', 'LEARN', 'EXCELL', 'RANKINGS']

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${BlueBG})` }}
    >
      <div className="relative w-full flex flex-col items-center gap-y-8">

        {/* Decorative Cloud with Rainbow (Top Left) */}
        <img
          src={CloudRainbow}
          alt="cloud with rainbow"
          className="absolute -top-2 -left-0 w-1/4 z-0"
        />

        {/* Decorative Cloud with Sun (Bottom Left) */}
        <img
          src={CloudSun}
          alt="cloud with sun"
          className="absolute -bottom-2 -left-0 w-1/4 z-0"
        />

        {/* Header Text */}
        <header className="z-10 mt-28 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-robotoSlab text-black tracking-wider xs:text-3xl">
            CHILD DASHBOARD
          </h1>
        </header>

        {/* Navigation Tabs */}
        <nav className="z-10 bg-white/40 backdrop-blur-md py-4 rounded-lg flex items-center font-alexandria space-x-2 flex-wrap justify-center">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-7 rounded-lg text-xl font-semibold transition-all
                ${activeTab === tab ? 'bg-white text-gray-800' : 'text-gray-800 hover:bg-white/20'}
                xs:px-4 xs:text-base`}
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* Main Content Area with Blurred Image */}
        <main className="z-10 bg-white/20 max-w-6xl backdrop-blur-sm p-3 rounded-2xl shadow-lg mb-44 w-full px-4">
          <img src={BlurImg} alt="Content preview" className="rounded-xl w-full" />
        </main>
      </div>
    </div>
  )
}
export default Child
