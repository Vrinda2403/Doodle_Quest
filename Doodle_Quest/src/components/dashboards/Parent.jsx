import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

const Parent = () => {
  const [screenTime, setScreenTime] = useState(0);
  const [dailyLimit, setDailyLimit] = useState(120);
  const [newLimit, setNewLimit] = useState("");
  const userId = "child123"; // temp — later dynamic

  // Fetch current screen time & limit from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/time/status/${userId}`);
        setScreenTime(res.data.timeUsed);
        setDailyLimit(res.data.dailyLimit);
      } catch (err) {
        console.log("Error fetching screen time:", err);
      }
    };
    fetchData();

    // Optionally refresh every minute
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, []);

  // Handle limit change by parent
  const handleLimitChange = async () => {
    try {
      const res = await axios.put("http://localhost:3000/api/time/limit", {
        userId,
        limitMinutes: Number(newLimit),
      });
      setDailyLimit(res.data.timer.dailyLimit);
      setNewLimit("");
      alert("✅ Screen time limit updated successfully!");
    } catch (err) {
      console.log("Error updating limit:", err);
      alert("❌ Failed to update screen time limit");
    }
  };

  return (
    <div className="bg-[#F4EDE6]">
      {/* NAVBAR */}
      <nav className="nav flex bg-opacity-90 h-16 text-white gap-72 top item items-center">
        <div
          className="text-center font-orbitron text-xl ml-7 font-bold 
           bg-gradient-to-r from-[#EDFFF5] to-[rgba(133,213,237,0.74)] 
           bg-clip-text text-transparent"
        >
          DoodleQuest
        </div>
        <div className="text-5xl font-robotoSlab">Guardian's Hub</div>
        <div className="flex gap-9 ml-6">
          <div className="home">
            <img src="/src/assets/home.png" alt="" width="40" />
          </div>
          <div className="post">
            <img src="/src/assets/post.png" alt="" width="40" />
          </div>
        </div>
      </nav>

      {/* Progress Section */}
      <div className="progress mt-11">
        <div className="heading text-[#4A0303] font-robotoSlab text-5xl text-center">
          Progress Hub
        </div>

        <div className="content bg-[#E1E1EB] mt-10 grid grid-cols-[230px_500px_500px] gap-11 ">
          {/* Sidebar */}
          <div className="grid grid-cols-[50px_160px] bg-[#27384C] text-white text-xl">
            <div className="bg-[#082031] flex flex-col items-center pt-11 gap-20">
              <div className="bg-white rounded-md p-1 mt-3">
                <img src="src/assets/dot.png" alt="" width="14" className="invert" />
              </div>
              <img src="src/assets/dot.png" alt="" width="14" className="mt-6" />
              <img src="src/assets/dot.png" alt="" width="14" className="mt-9" />
              <img src="src/assets/dot.png" alt="" width="14" className="mt-11" />
              <img src="src/assets/dot.png" alt="" width="14" className="mt-3" />
            </div>
            <div className="flex flex-col justify-start pt-11 gap-20">
              <p className="pl-5 pt-2 pb-2 bg-white text-black font-bold rounded-md shadow-md">
                DRAWINGS
              </p>
              <p className="ml-5">STORY LISTENED</p>
              <p className="ml-5">PUZZLE ANALYSIS</p>
              <p className="ml-5">SCREEN TIME</p>
              <p className="ml-5">PAPER TIME</p>
            </div>
          </div>

          {/* Main Cards */}
          <div className="grid grid-rows-[370px_300px] mt-6">
            <div className="img">
              <img src="src/assets/user.png" alt="" width="490" />
            </div>

            {/* Screen Time Card */}
            <div className="w-96 h-40 bg-[#85DCE4] rounded-lg border border-black relative p-2">
              <p className="text-lg font-semibold">Screen Time</p>
              <p className="text-3xl font-bold">{screenTime} min</p>
              <p className="mt-2 text-sm text-gray-700">Limit: {dailyLimit} min/day</p>
              <div className="mt-4">
                <input
                  type="number"
                  value={newLimit}
                  placeholder="Set new limit (in min)"
                  onChange={(e) => setNewLimit(e.target.value)}
                  className="border border-gray-400 rounded-md p-1 mr-2"
                />
                <button
                  onClick={handleLimitChange}
                  className="bg-[#203851] text-white px-4 py-1 rounded-md hover:bg-[#142536]"
                >
                  Update Limit
                </button>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid grid-rows-[370px_360px] mt-6">
            <div>
              <img src="src/assets/division.png" alt="" width="400" />
            </div>
            <div>
              <img src="src/assets/total.png" alt="" width="400" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-11/12 m-auto mt-8 h-52 text-center rounded-lg bg-[#D7D3D3] p-9 font-robotoSlab">
        <p className="text-2xl mb-4">
          <span className="text-red-800">⚠️Warning:</span> Encourage regular breaks for movement, outdoor play, and face-to-face interaction.
        </p>
        <p className="text-2xl">
          <span className="text-green-600">🌟Good News:</span> Your child’s creativity and imagination are growing beautifully!
        </p>
      </div>
      <div className="bg-[#203851] h-16 mt-6"></div>
    </div>
  );
};

export default Parent;
