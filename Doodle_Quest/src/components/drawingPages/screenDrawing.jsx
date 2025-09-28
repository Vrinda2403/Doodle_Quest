function ScreenDrawing() {
  return (
    <div className="min-h-screen bg-[#F2EAD3]">
      {/* Navbar */}
      <div className="bg-[#1E3A8A] px-8 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          
          <div className="font-['Orbitron'] text-xl text-white">DoodleQuest</div>
        </div>
        <div className="font-['Saira Stencil One'] text-4xl text-white">Paper Doodles</div>
        <div className="flex items-center space-x-4">
          {/* Home icon*/}
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-gray-600 rounded-sm"></div>
          </div>
          {/* Back arrow icon */}
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-gray-600 transform rotate-180"></div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="px-8 py-8">
        <div className="flex gap-8">
          {/* Left Side - Clue Box */}
          <div className="flex-2">
            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-3xl font-['Orbitron'] text-gray-800">CLUE BOX</h1>
              {/* Clue icon  */}
              <div className="w-6 h-6 bg-gray-600 rounded"></div>
            </div>
            <div className="bg-white h-72 w-full border-2 border-gray-300 rounded-lg mb-4 flex items-center justify-center text-gray-500">
              
            </div>
            <div className="flex gap-4">
            <button className="bg-[#E41111] px-6 py-2 rounded-full text-white font-semibold flex items-center gap-2">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
              Clear
            </button>
            <button className="bg-[#5DC001] px-6 py-2 rounded-full text-white font-semibold flex items-center gap-2">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
              Submit
            </button>
            </div>
          </div>

          {/* Right Side - Screen Canvas */}
          <div className="flex-1 relative">
            <div className="flex items-center gap-3 mb-4">
              <h1 className=" relative left-8 text-3xl font-['Orbitron'] text-gray-800">SCREEN CANVAS</h1>
              {/* Screen icon  */}
              <div className="w-6 h-6 relative left-8 bg-gray-600 rounded"></div>
            </div>
            <div className="bg-white border-2 border-gray-300 absolute bottom-10 right-20 w-11/12 h-80 rounded-lg flex items-center justify-center text-gray-500 text-sm">

            </div>
            
            {/* Date Dropdown */}
            <div className="absolute bottom-0 right-0">
              <select className="bg-white border border-gray-300 rounded px-3 py-2 text-sm">
                <option>Select Date</option>
              </select>
            </div>
          </div>
        </div>

        {/* To-Do Section */}
        <div className="mt-12">
          <div className="flex items-center gap-3 mb-6">
            <h1 className="text-3xl font-['Orbitron'] text-gray-800">To-Do's</h1>
            {/* Clipboard icon  */}
            <div className="w-6 h-6 bg-gray-600 rounded"></div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/src/assets/sofa.png" alt="Sofa" className="absolute bottom-0 right-0 w-1/4 h-auto" />
            <div className=" w-full">
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
                  <td colSpan="4" className="px-6 py-12 text-center text-gray-500">
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