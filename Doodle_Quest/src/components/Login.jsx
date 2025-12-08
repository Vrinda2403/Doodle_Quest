import React, { useState } from "react";
import axios from "axios";
import { useSignIn } from "@clerk/clerk-react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const { signIn, setActive, isLoaded } = useSignIn();

  const [mode, setMode] = useState("parent"); // 'parent' or 'child'

  const [parentData, setParentData] = useState({
    parentId: "",
    parentPassword: "",
  });

  const [childData, setChildData] = useState({
    childId: "",
    childPassword: "",
  });

  const [error, setError] = useState("");

  // ------------------ Parent Login ------------------
  const handleParentLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!isLoaded) return;

    try {
      // Step 1: Get email of parent using parentId
      const res = await axios.post("http://localhost:5000/findParent", {
        parentId: parentData.parentId,
      });

      const parentEmail = res.data.parentEmail;

      // Step 2: Clerk login using email + password
      const result = await signIn.create({
        identifier: parentEmail,
        password: parentData.parentPassword,
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        navigate("/parent");
      }
    } catch (err) {
      setError("Invalid Parent ID or Password");
    }
  };

  // ------------------ Child Login ------------------
  const handleChildLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/child-login", {
        childId: childData.childId,
        password: childData.childPassword,
      });

      localStorage.setItem("childToken", res.data.childToken);
      navigate("/welcome");
    } catch (err) {
      setError("Invalid Child ID or Password");
    }
  };

  return (
    <div className="flex min-h-screen bg-white">

      {/* LEFT PANEL (Original UI) */}
      <div className="flex-1 bg-gradient-to-b from-[#3B17AB] from-25% to-[#170942] to-100% 
      flex flex-col items-center justify-center p-8 relative">

        <h1
          className="absolute w-[330px] h-[50px] top-[40px] left-[40px] 
          font-[Orbitron] font-bold text-[30px] leading-[140%] tracking-[8%] 
          bg-gradient-to-r from-[#EDFFF5] to-[rgba(133,213,237,0.74)] 
          text-transparent bg-clip-text"
        >
          DoodleQuest
        </h1>

        <div className="rounded-lg overflow-hidden shadow-2xl">
          <img
            className="w-80 h-auto object-cover"
            src="/images/child.jpg"
            alt="Child"
          />
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex-1 flex flex-col justify-center px-8 py-12 bg-gray-50">
        <div className="max-w-md mx-auto w-full">

          {/* BACK BUTTON */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 mb-8 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </button>

          {/* LOGIN BOX */}
          <div className="bg-white rounded-lg shadow-lg p-8 border border-blue-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Login
            </h2>

            <p className="text-gray-600 text-sm mb-6">
              Choose how you want to log in.
            </p>

            {/* SWITCH BUTTONS */}
            <div className="flex justify-between mb-6">
              <button
                onClick={() => { setError(""); setMode("parent"); }}
                className={`w-1/2 py-2 font-semibold rounded-l-md ${
                  mode === "parent"
                    ? "bg-[#3B17AB] text-white"
                    : "bg-gray-200"
                }`}
              >
                Login as Parent
              </button>

              <button
                onClick={() => { setError(""); setMode("child"); }}
                className={`w-1/2 py-2 font-semibold rounded-r-md ${
                  mode === "child"
                    ? "bg-[#3B17AB] text-white"
                    : "bg-gray-200"
                }`}
              >
                Login as Child
              </button>
            </div>

            {/* PARENT LOGIN FORM */}
            {mode === "parent" && (
              <form onSubmit={handleParentLogin} className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Parent ID</label>
                  <input
                    type="text"
                    value={parentData.parentId}
                    onChange={(e) =>
                      setParentData({ ...parentData, parentId: e.target.value })
                    }
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Password</label>
                  <input
                    type="password"
                    value={parentData.parentPassword}
                    onChange={(e) =>
                      setParentData({
                        ...parentData,
                        parentPassword: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#3B17AB] hover:bg-[#170942] text-white font-semibold py-3 rounded-md"
                >
                  Login as Parent
                </button>
              </form>
            )}

            {/* CHILD LOGIN FORM */}
            {mode === "child" && (
              <form onSubmit={handleChildLogin} className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Child ID</label>
                  <input
                    type="text"
                    value={childData.childId}
                    onChange={(e) =>
                      setChildData({ ...childData, childId: e.target.value })
                    }
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Password</label>
                  <input
                    type="password"
                    value={childData.childPassword}
                    onChange={(e) =>
                      setChildData({
                        ...childData,
                        childPassword: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#3B17AB] hover:bg-[#170942] text-white font-semibold py-3 rounded-md"
                >
                  Login as Child
                </button>
              </form>
            )}

            {/* ERROR MESSAGE */}
            {error && (
              <p className="text-red-600 text-center font-medium mt-4">{error}</p>
            )}

            {/* SIGNUP LINK */}
            <p className="text-center text-sm text-gray-600 mt-6">
              Don’t have an account?{" "}
              <span
                onClick={() => navigate("/signup")}
                className="text-blue-600 font-semibold cursor-pointer hover:underline"
              >
                Sign up here
              </span>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}
