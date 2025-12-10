// import React from 'react'
// import { useState } from "react";
// //  Corrected and deduplicated imports
// import img1 from "../assets/1.jpg";
// import img2 from "../assets/2.jpg";
// import img3 from "../assets/3.jpg";
// import img4 from "../assets/4.jpg"; // FIX: Changed duplicate img3 to img4

// export default function Animatics() {

//   // List of thumbnails + YouTube video links
//   const videos = [
//     {
//       //  Removed extra curly braces { } around img variable
//       img: img1, 
//       url: <iframe width="667" height="375" src="https://www.youtube.com/embed/1dFi0LKf-r4" title="Curious George 🐵 1 Hour Compilation 🐵 English Full Episode 🐵 Videos For Kids" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
//     },
//     {
//       img: img2,
//       url: <iframe width="853" height="480" src="https://www.youtube.com/embed/LiXVaVKlQW8" title="Motu Patlu | मोटू पतलू S1 |Adventure Of Mansi And Akash | Episode 236 Part 1 |Download Voot Kids App" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
//     },
//     {
//       img: img3,
//       url: <iframe width="853" height="480" src="https://www.youtube.com/embed/M_rH3Z_R6-U?list=RDM_rH3Z_R6-U" title="Ek Mota Hathi Ghumne Chala, एक मोटा हाथी, Nursery Poems and Cartoon Songs for Kids" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
//     },
//     {
//       //  FIX 2: Now correctly referencing the imported img4 variable
//       img: img4,
//       url: <iframe width="667" height="375" src="https://www.youtube.com/embed/3Ce32BhKQrg" title="Curious George | George&#39;s Home Run | Full Episode | HD | Cartoons For Children" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
//     }
//   ];

//   // Default video shown on RHS
//   const [currentVideo, setCurrentVideo] = useState(videos[0].url);

//   return (
//     <div className="w-full min-h-screen bg-[#3fa2fc] flex flex-col">

//       {/* TOP NAV */}
//       <div className="w-full bg-[#071a42] flex items-center justify-between px-6 py-4">
//         <div className="flex items-center gap-3">
//           <img src="/logo.png" alt="logo" className="h-12" />
//           <h1 className="text-white text-4xl font-bold tracking-wide">
//             ANIMATICS
//           </h1>
//         </div>

//         <div className="flex items-center gap-4">
//           <img src="/home_icon.png" className="h-10 cursor-pointer" />
//           <img src="/logout_icon.png" className="h-10 cursor-pointer" />
//         </div>
//       </div>

//       {/* MAIN CONTENT */}
//       <div className="flex flex-1 p-6 gap-6">

//         {/* LEFT SIDE: IMAGE LIST */}
//         <div className="flex flex-col gap-6 w-1/4">
//           {videos.map((v, i) => (
//             <div
//               key={i}
//               onClick={() => setCurrentVideo(v.url)}
//               className="bg-gray-200 rounded-xl shadow hover:scale-105 duration-200 cursor-pointer"
//             >
//               <img
//                 // The image source is correctly passed as the variable path
//                 src={v.img}
//                 alt={`Video ${i + 1}`}
//                 className="w-full h-32 object-cover rounded-xl"
//               />
//             </div>
//           ))}
//         </div>

//         {/* RIGHT SIDE: VIDEO PLAYER */}
//         <div className="flex-1 bg-gray-300 rounded-xl shadow-lg overflow-hidden">
//           <iframe
//             className="w-full h-full rounded-xl"
//             src={currentVideo}
//             allow="autoplay; encrypted-media"
//             allowFullScreen
//             title="Animatics Video Player"
//           ></iframe>
//         </div>

//       </div>
//     </div>
//   );
// }

import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg"; 

export default function Animatics() {

  const videos = [
    {
      img: img1, 
      //  Store only the EMBED URL string
      url: "https://www.youtube.com/embed/1dFi0LKf-r4" 
    },
    {
      img: img2,
      url: "https://www.youtube.com/embed/LiXVaVKlQW8"
    },
    {
      img: img3,
      url: "https://www.youtube.com/embed/M_rH3Z_R6-U"
    },
    {
      img: img4,
      url: "https://www.youtube.com/embed/3Ce32BhKQrg"
    }
  ];

  // Default video shown on RHS
  const [currentVideo, setCurrentVideo] = useState(videos[0].url); 

  return (
    <div className="w-full min-h-screen bg-[#3fa2fc] flex flex-col">

      {/* TOP NAV */}
      <div className="w-full bg-[#071a42] flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          
          <h1 className="text-white text-4xl font-bold tracking-wide">
            ANIMATICS
          </h1>
        </div>
      <Link to ='/'>
                    <button className="w-16 h-16 rounded-full flex items-center justify-center p-2 hover:bg-gray-200 transition bg-white/20">
                      <img src="/src/assets/home-icon.png" />
                    </button>
                    </Link>
        
      </div>

      {/* MAIN CONTENT */}
      <div className="flex flex-1 p-6 gap-6">

        {/* LEFT SIDE: IMAGE LIST */}
        <div className="flex flex-col gap-6 w-1/4">
          {videos.map((v, i) => (
            <div
              key={i}
              // Set the state to the new URL string
              onClick={() => setCurrentVideo(v.url)} 
              className="bg-gray-200 rounded-xl shadow hover:scale-105 duration-200 cursor-pointer"
            >
              <img
                src={v.img}
                alt={`Video ${i + 1}`}
                className="w-full h-32 object-cover rounded-xl"
              />
            </div>
          ))}
        </div>

        {/* RIGHT SIDE: VIDEO PLAYER */}
        <div className="flex-1 bg-gray-300 rounded-xl shadow-lg overflow-hidden">
          <iframe
            className="w-full h-full rounded-xl"
            //  src now receives the URL STRING
            src={currentVideo} 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            title="Animatics Video Player"
            frameBorder="0"
          ></iframe>
        </div>

      </div>
    </div>
  );
}