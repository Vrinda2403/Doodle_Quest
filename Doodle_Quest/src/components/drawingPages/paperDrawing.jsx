function PaperDrawing() {
  return (
    <div className="min-h-screen bg-[#E8FFE8]">
      {/* Navbar */}
      <div className="bg-[#08031B] px-8 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          
          <div className="font-['Orbitron'] text-xl text-white">DoodleQuest</div>
        </div>
        <div className="font-['Saira Stencil One'] text-4xl text-white">Paper Doodles</div>
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
      <div className="px-8 py-8 bg-[url(/src/assets/paperbg.png)]  min-h-screen bg-cover bg-left-top">
        <div className="flex gap-8">
          {/* Left Side - Camera Feed */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-3xl font-['Orbitron'] text-gray-800">CAMERA FEED</h1>
              {/* Camera icon  */}
              <img src="/src/assets/camera.png" alt="Camera" className="w-8 h-8" />
            </div>
            <div className="bg-white h-96 w-[800px] border-2 border-gray-300 rounded-lg mb-4 flex items-center justify-center text-gray-500">
              
            </div>
            <button className="bg-[#E41111] px-6 py-2 rounded-full text-white font-semibold flex items-center gap-2">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
              ON/OFF
            </button>
          </div>

          {/* Right Side - Images */}
          <div className="flex-1 relative">
           

            {/* Family Image Placeholder */}
            <div className="absolute top-60 right-24 w-11/12 h-48 rounded-lg flex items-center justify-center text-gray-500 text-sm">
              <img src="/src/assets/FamilyTable.png" alt="Family at Table" className="relative top-2"></img>
            </div>
            
            {/* Date Dropdown */}
            <div className="absolute bottom-0 right-0">
              <select className="bg-white border border-gray-300 rounded px-3 py-2 text-sm absolute top-52 right-2">
                <option>Select Date</option>
              </select>
            </div>
          </div>
        </div>
        </div>


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
           
            <div className="w-full">
            <table className="w-full">
              <thead className="bg-[#BAF7C3]">
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

export default PaperDrawing;