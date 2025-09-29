import { useRef, useEffect } from 'react'; 
function ScreenDrawing() {
    const canvasRef = useRef(null);
      let drawing = false;
    let lastX = 0;
    let lastY = 0;

    useEffect(()=>{
        const canvas = canvasRef.current;
        if(!canvas) return;

        const context = canvas.getContext('2d');
        context.strokeStyle = 'black';
        context.lineWidth = 2;
        context.lineCap = 'round';


         canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
const startDrawing = (e) => {
   
    drawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
  }
  const stopDrawing = () => {
    drawing=false
  }
const draw = (e) => {
    if(!drawing) return;
    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();
    lastX = e.offsetX;
    lastY = e.offsetY;
  }

  canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseout", stopDrawing);
    canvas.addEventListener("mousemove", draw);
 
    },[])




  return (
    <div className="min-h-screen bg-[#f7c9e3]">
      {/* Navbar */}
      <div className="bg-[#08031B] px-8 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          
          <div className="font-['Orbitron'] text-xl text-white">DoodleQuest</div>
        </div>
        <div className="font-['Saira Stencil One'] text-4xl text-white">Screen Doodles</div>
        <div className="flex items-center space-x-4">
          {/* Home icon*/}
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          
              <img src="/src/assets/home-icon.png" alt="Home" className="w-full h-full" />
         
          </div>
          {/* Back arrow icon */}
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">

            {/* <div className="w-4 h-4 transform rotate-180"> */}
              <img src="/src/assets/click.png" className="w-8 h-8 rounded" alt="Back" />
            {/* </div> */}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="px-8 py-8 bg-[url(/src/assets/screenbg.png)]  min-h-screen bg-cover bg-left-top ">
        <div className="flex gap-8 z-10">
          {/* Left Side - Clue Box */}
          <div className="flex-2">
            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-3xl font-['Orbitron'] font-bold text-black">CLUE BOX</h1>
              
            </div>
            <div className="bg-white h-72 w-full border-2  border-gray-300 rounded-lg mb-4 flex items-center justify-center text-gray-500">
              
            </div>
            <div className="flex gap-4">
              {/* Clear button */}
            <button className=" bg-[#E41111] px-6 py-2 rounded-full text-white font-semibold flex items-center gap-2 absolute bottom-11 right-32 z-10" onClick={()=>{
              const context = canvasRef.current.getContext('2d');
              context.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);
            }}>
              <div className="w-4 h-4 bg-white rounded-sm"></div>
              Clear
            </button>
            {/* submit button  */}
            <button className="bg-[#5DC001] px-6 py-2 rounded-full text-white font-semibold flex items-center gap-2 absolute bottom-11 right-64 z-10">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
              Submit
            </button>
            </div>
          </div>

          {/* Right Side - Screen Canvas */}
          <div className="flex-1 relative ht-[400px]">
            <div className="flex items-center gap-3 mb-4">
              <h1 className=" relative left-8 text-3xl font-['Orbitron'] text-black font-bold">SCREEN CANVAS</h1>
              {/* Screen icon  */}
              <div className="w-6 h-6 relative left-8 bg-gray-600 rounded"><img src="/src/assets/screen.png" alt="Screen" className="w-full h-full" /></div>
            </div>
            <div className="bg-white border-2 border-gray-300 absolute top-18 right-20 w-11/12 h-[500px] rounded-lg flex items-center justify-center text-gray-500 text-sm">
             <canvas ref={canvasRef} className="w-full h-full rounded-lg"></canvas>
            </div>
            
            {/* Date Dropdown */}
            <div className="absolute top-[700px] right-0">
              <select className="bg-white border border-gray-300 rounded px-3 py-2 text-sm">
                <option>Select Date</option>
              </select>
            </div>
          </div>
        </div>
        <br></br>
        </div>
                {/* To-Do Section */}
        <div>
        <div className="mt-12 ml-12">
          <div className="flex items-center gap-3 mb-6">
            <h1 className="text-3xl font-['Orbitron'] text-gray-800">To-Do's</h1>
            {/*  To Do icon  */}
            <div className="w-6 h-6 bg-gray-600 rounded">
              <img src="/src/assets/todo.png" alt="To Do" className=" rounded w-8 h-8" />
              </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-[90%] ">
            {/* Sofa Image */}
            <img src="/src/assets/sofa.png" alt="Sofa" className="absolute top-[800px] right-0 w-1/4 h-auto" />
            <div className="w-full">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-b">SR. No.</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-b">Assigned Tasks</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-b">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-b">Update</th>
                </tr>
              </thead>
              <tbody className="bg-gray-300">
                <tr>
                  <td colSpan="4" className="px-6 py-12 text-center text-gray-500 w-9 h-56">
                    No tasks assigned yet
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScreenDrawing;