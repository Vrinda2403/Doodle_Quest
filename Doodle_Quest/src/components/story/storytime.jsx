function storytime(){
  <style>
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Orbitron:wght@400..900&family=Saira+Stencil+One&family=Special+Gothic+Condensed+One&family=Spline+Sans:wght@300..700&display=swap');
</style>
return(
  
    <div>
        <div className="bg-[#08031B] px-8 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          
          <div className="font-['Orbitron'] text-xl text-white">DoodleQuest</div>
        </div>
        <div className="font-['Saira Stencil One'] text-6xl text-white">Little Stories</div>
        <div className="flex items-center space-x-4">
          {/* Home icon*/}
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <img src="/src/assets/home-icon.png" alt="Home" className="w-full h-full" />
          </div>
          {/* Back arrow icon */}
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <img src="/src/assets/click.png" className="w-8 h-8 rounded" alt="Back" />
          </div>
        </div>
      </div>

        {/* Main Content Area */}
        <div className="px-40 py-8 bg-[url('/src/assets/storybg.jpg')] min-h-screen bg-cover bg-left-top ">
         
         <div className="bg-[#0202028F] w-[1200px] h-[500px] flex" >
             {/* Story Content */}
            <div className="text-white font-['Spline Sans'] text-4xl p-8 w-[600px]">
                The little bird sang a joyful tune.<br></br>
 A sleepy fox dreamt beneath the moon.<br></br>
 The wind whispered secrets through the trees, <br></br>As fireflies danced on the evening breeze.<br></br>
 {/* Book Mark button */}
 <button className=" bg-[#FF5900] text-xl absolute bottom-28 text-white w-[150px] h-[40px] rounded">
  <img src="/src/assets/arrow1.png" alt="BookMark" className="w-4 h-4 inline-block mr-2" />BookMark</button>
 {/* Skip button */}
            <button className="bg-[#FF5900] text-xl absolute bottom-28 right-60 text-white w-[150px] h-[40px] rounded">
              <img src="/src/assets/arrow2.png" alt="Skip" className="w-4 h-4 inline-block mr-2" />
              Skip</button>
            </div>
            {/* Image */}
            <div>
                <img src="/src/assets/storyimg.jpg" alt="Story Illustration" className="absolute right-44 bottom-40 w-[400px] h-[400px] object-cover"/>
            </div>
            
         </div>


        </div>
    </div>
)
};
export default storytime;