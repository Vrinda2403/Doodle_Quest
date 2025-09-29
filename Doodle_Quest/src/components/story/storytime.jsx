import React from 'react';

// NOTE: It is best practice to move font imports to your main index.html file.
const GlobalStyles = () => (
  <style>
    {`
      @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Orbitron:wght@400..900&family=Saira+Stencil+One&family=Roboto+Slab&family=Special+Gothic+Condensed+One&family=Spline+Sans:wght@300..700&display=swap');
    `}
  </style>
);

// Component names in React should be capitalized
function Storytime() {
  return (
    <div>
      <GlobalStyles />
      <nav className="bg-[#081b4f] px-8 py-4 flex items-center justify-between text-white">
        <div className="flex items-center space-x-8">
          <div className="font-['Orbitron'] text-xl">DoodleQuest</div>
        </div>
        <div className="font-['Roboto Slab'] text-4xl">Little Stories</div>
        <div className="w-8 h-8 gap-3 rounded-full flex items-center justify-center">
            <img src="/src/assets/home-icon.png" alt="Home" className="w-full h-full" />
             <img src="/src/assets/click.png" className="w-8 h-8 rounded" alt="Back" />
         </div>
      </nav>

      <div className="px-4 py-8 bg-[url('/src/assets/storybg.jpg')] min-h-screen flex justify-center items-center bg-cover bg-center">
        
        {/* Story Box */}
        <div className="bg-[#0202028F] p-10 w-full max-w-5xl h-[500px] flex rounded-lg shadow-2xl">
          
          {/* Story Content */}
          <div className="relative text-white font-['Spline Sans'] text-4xl p-8 w-1/2 flex flex-col justify-center">
            <p>
              The little bird sang a joyful tune.<br />
              A sleepy fox dreamt beneath the moon.<br />
              The wind whispered secrets through the trees,<br />
              As fireflies danced on the evening breeze.
            </p>
            {/* FIX: Buttons are now positioned reliably at the bottom of the text area */}
            <div className="absolute -bottom-4 left-8 flex gap-7">
              <button className="bg-[#FF5900] text-xl text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition">Bookmark</button>
              <button className="bg-[#FF5900] text-xl text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition">Skip</button>
            </div>
          </div>
          
          {/* Image */}
          <div className="w-1/2 h-full">
            <img src="/src/assets/storyimg.jpg" alt="Story Illustration" className="w-full h-full object-cover rounded-r-lg" />
          </div>

        </div>
      </div>
    </div>
  )
};

export default Storytime;