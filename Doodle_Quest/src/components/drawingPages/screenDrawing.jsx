import React, { useRef, useEffect } from "react";
import screenBG from "../../assets/screenBG.png";

function ScreenDrawing() {
  const canvasRef = useRef(null);
  const drawingState = useRef({ isDrawing: false, lastX: 0, lastY: 0 });

  // ✅ Replace with actual logged-in userId or dummy one for now
  const userId = "child123";

  // ✅ Automatically start and stop timer when entering/leaving screen mode
  useEffect(() => {
    const startTimer = async () => {
      try {
        await fetch("http://localhost:3000/api/timer/start", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId }),
        });
        console.log("Timer started for", userId);
      } catch (err) {
        console.error("Error starting timer:", err);
      }
    };

    const stopTimer = async () => {
      try {
        await fetch("http://localhost:3000/api/timer/stop", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId }),
        });
        console.log("Timer stopped for", userId);
      } catch (err) {
        console.error("Error stopping timer:", err);
      }
    };

    startTimer();

    // When leaving the page (unmount)
    return () => {
      stopTimer();
    };
  }, []);

  // ✅ Canvas drawing logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");

    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      context.strokeStyle = "black";
      context.lineWidth = 4;
      context.lineCap = "round";
      context.lineJoin = "round";
    };
    setCanvasSize();

    const startDrawing = (e) => {
      drawingState.current.isDrawing = true;
      [drawingState.current.lastX, drawingState.current.lastY] = [
        e.offsetX,
        e.offsetY,
      ];
    };
    const stopDrawing = () => {
      drawingState.current.isDrawing = false;
    };
    const draw = (e) => {
      if (!drawingState.current.isDrawing) return;
      context.beginPath();
      context.moveTo(
        drawingState.current.lastX,
        drawingState.current.lastY
      );
      context.lineTo(e.offsetX, e.offsetY);
      context.stroke();
      [drawingState.current.lastX, drawingState.current.lastY] = [
        e.offsetX,
        e.offsetY,
      ];
    };

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseout", stopDrawing);
    canvas.addEventListener("mousemove", draw);
    window.addEventListener("resize", setCanvasSize);

    return () => {
      canvas.removeEventListener("mousedown", startDrawing);
      canvas.removeEventListener("mouseup", stopDrawing);
      canvas.removeEventListener("mouseout", stopDrawing);
      canvas.removeEventListener("mousemove", draw);
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  const handleClearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="min-h-screen bg-[#EAD6DE] flex flex-col">
      <nav className="bg-[#2C2A4A] px-6 py-2 flex items-center justify-between shadow-lg text-white">
        <img
          src="/src/assets/doodle-quest-logo.png"
          alt="DoodleQuest Logo"
          className="h-12"
        />
        <h1 className="font-['Roboto_Slab'] text-5xl tracking-wider">
          Screen Doodles
        </h1>
        <div className="flex items-center space-x-4">
          <button className="w-16 h-16 rounded-full flex items-center justify-center p-2 hover:bg-gray-200 transition">
            <img src="/src/assets/home-icon.png" alt="Home" />
          </button>
          <button className="w-16 h-16 rounded-full flex items-center justify-center p-2.5 hover:bg-orange-500 transition">
            <img src="/src/assets/click.png" alt="Back" />
          </button>
        </div>
      </nav>

      {/* Main Drawing Area */}
      <div
        className="flex-grow flex flex-col bg-center min-h-[100vh] pb-28 p-6 bg-[length:100%_100%]"
        style={{ backgroundImage: `url(${screenBG})` }}
      >
        <div className="flex-grow grid grid-cols-1 lg:grid-cols-3 gap-6 items-end">
          {/* Left Column: Clue Box */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-['Orbitron'] font-bold text-white mb-2">
              Clue Box
            </h2>
            <div className="bg-white h-72 w-full border-4 border-white rounded-2xl shadow-xl"></div>
          </div>

          {/* Right Column: Screen Canvas */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-2">
              <img
                src="/src/assets/screen.png"
                alt="Screen Icon"
                className="w-7 h-7"
              />
              <h2 className="text-xl font-['Orbitron'] font-bold text-white">
                Screen Canvas
              </h2>
            </div>
            <canvas
              ref={canvasRef}
              className="bg-white w-full h-[60vh] border-4 border-white rounded-2xl shadow-xl"
            ></canvas>
          </div>
        </div>

        <div className="flex justify-end font-['Saira_Stencil_One'] tracking-wide mt-4 mx-6 gap-4">
          <button
            onClick={handleClearCanvas}
            className="bg-[#D0021B] px-8 py-3 rounded-xl text-white text-lg flex items-center gap-2 shadow-[4px_4px_0px_#000000] hover:bg-red-700 transition"
          >
            Clear
          </button>
          <button className="bg-[#4CAF50] px-8 py-3 rounded-xl text-white text-lg flex items-center gap-2 shadow-[4px_4px_0px_#000000] hover:bg-green-700 transition">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ScreenDrawing;
