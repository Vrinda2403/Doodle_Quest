// // import React, { useState } from 'react';
// import { ArrowLeft } from 'lucide-react';
// import { useSignUp } from '@clerk/clerk-react';
// import { useNavigate } from 'react-router-dom';   // ⭐ Added

// const Signup = () => {
//   const { isLoaded, signUp, setActive } = useSignUp();
//   const navigate = useNavigate();                // ⭐ Added

//   const [formData, setFormData] = useState({
//     fullName: '',
//     emailAddress: '',
//     password: '',
//     gender: '',
//     dateOfBirth: '',
//     code: '' // added for verification step
//   });

//   const [status, setStatus] = useState('');
//   const [verificationSent, setVerificationSent] = useState(false);

//   if (!isLoaded) {
//     return <div>Loading...</div>;
//   }

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async () => {
//     try {
//       setStatus('Signing up...');
//       await signUp.create({
//         emailAddress: formData.emailAddress,
//         password: formData.password
//       });

//       // send verification code
//       await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });
//       setStatus('Verification email sent. Please check your inbox.');
//       setVerificationSent(true);
//     } catch (err) {
//       setStatus(err.errors?.[0]?.message || 'Something went wrong');
//     }
//   };

//   const handleVerify = async () => {
//     try {
//       setStatus('Verifying...');
//       const result = await signUp.attemptEmailAddressVerification({
//         code: formData.code
//       });

//       if (result.status === 'complete') {
//         await setActive({ session: result.createdSessionId });
//         setStatus('✅ Email verified! You are now signed in.');

//         // ⭐ AUTO-REDIRECT TO CHILD DASHBOARD
//         navigate("/");  
//         return;
//       } else {
//         setStatus('Unexpected verification state. Try again.');
//       }
//     } catch (err) {
//       setStatus(err.errors?.[0]?.message || 'Invalid code. Try again.');
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-white">
//       {/* Left Panel */}
//       <div className="flex-1 bg-gradient-to-br from-[#3B17AB] from-25% to-[#170942] to-100% flex flex-col items-center justify-center p-8 relative">
//         <h1
//           className="absolute w-[330px] h-[50px] top-[40px] left-[40px] 
//           font-[Orbitron] font-bold text-[30px] 
//           leading-[140%] tracking-[8%] flex items-center
//           bg-gradient-to-r from-[#EDFFF5] to-[rgba(133,213,237,0.74)] 
//           text-transparent bg-clip-text"
//         >
//           DoodleQuest
//         </h1>

//         <div className="rounded-lg overflow-hidden shadow-2xl">
//           <img
//             src="/images/mickey.jpg"
//             alt="Happy child in yellow Mickey Mouse shirt"
//             className="w-80 h-96 object-cover"
//           />
//         </div>
//       </div>

//       {/* Right Panel */}
//       <div className="flex-1 flex flex-col justify-center px-8 py-12 bg-gray-50">
//         <div className="max-w-md mx-auto w-full">
//           <button className="flex items-center text-gray-600 mb-8 hover:text-gray-800 transition-colors">
//             <ArrowLeft className="w-4 h-4 mr-2" />
//             Back
//           </button>

//           <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
//             <h2 className="text-2xl font-bold text-gray-900 mb-2">
//               Account Signup
//             </h2>
//             <p className="text-gray-600 text-sm mb-6">
//               Become a member and enjoy exclusive promotions
//             </p>

//             {!verificationSent ? (
//               <div className="space-y-4">
//                 {/* Full Name */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Full Name
//                   </label>
//                   <input
//                     type="text"
//                     name="fullName"
//                     value={formData.fullName}
//                     onChange={handleInputChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="Enter your name"
//                   />
//                 </div>

//                 {/* Email */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     name="emailAddress"
//                     value={formData.emailAddress}
//                     onChange={handleInputChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="Enter your email"
//                   />
//                 </div>

//                 {/* Password */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleInputChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="Enter your password"
//                   />
//                 </div>

//                 {/* Gender */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Gender
//                   </label>
//                   <select
//                     name="gender"
//                     value={formData.gender}
//                     onChange={handleInputChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
//                   >
//                     <option value="">Select gender</option>
//                     <option value="male">Male</option>
//                     <option value="female">Female</option>
//                     <option value="other">Other</option>
//                     <option value="prefer-not-to-say">Prefer not to say</option>
//                   </select>
//                 </div>

//                 {/* Date of Birth */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Date Of Birth
//                   </label>
//                   <input
//                     type="date"
//                     name="dateOfBirth"
//                     value={formData.dateOfBirth}
//                     onChange={handleInputChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>

//                 {/* Continue Button */}
//                 <button
//                   onClick={handleSubmit}
//                   className="w-full bg-[#3B17AB] hover:bg-[#170942] text-white font-semibold py-3 px-4 rounded-md transition-colors duration-200 mt-6"
//                 >
//                   Continue
//                 </button>
//               </div>
//             ) : (
//               // Verification Step
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Enter Verification Code
//                   </label>
//                   <input
//                     type="text"
//                     name="code"
//                     value={formData.code}
//                     onChange={handleInputChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//                     placeholder="Enter code sent to your email"
//                   />
//                 </div>

//                 <button
//                   onClick={handleVerify}
//                   className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-md transition-colors duration-200"
//                 >
//                   Verify Code
//                 </button>
//               </div>
//             )}

//             {status && (
//               <p className="text-sm text-gray-600 mt-4 text-center">{status}</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;

import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useSignUp } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    password: "",
    gender: "",
    dateOfBirth: "",
    code: "",
  });

  const [status, setStatus] = useState("");
  const [verificationSent, setVerificationSent] = useState(false);

  if (!isLoaded) return <div>Loading...</div>;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      setStatus("Signing up...");
      await signUp.create({
        emailAddress: formData.emailAddress,
        password: formData.password,
      });

      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });

      setStatus("Verification email sent!");
      setVerificationSent(true);
    } catch (err) {
      setStatus(err.errors?.[0]?.message || "Something went wrong");
    }
  };

  const handleVerify = async () => {
    try {
      setStatus("Verifying...");
      const result = await signUp.attemptEmailAddressVerification({
        code: formData.code,
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        navigate("/");
      } else {
        setStatus("Unexpected error. Try again.");
      }
    } catch (err) {
      setStatus(err.errors?.[0]?.message || "Invalid code.");
    }
  };

  return (
    <div className="flex min-h-screen bg-[linear-gradient(90deg,#A1E3FF_0%,#FFCAF2_100%)]">
      <div className="flex  bg-[rgba(217,217,217,0.56)] h-[110vh] mt-6 mb-10 gap-4 m-auto rounded-4xl w-[900px]">
        {/* LEFT IMAGE PANEL */}
      <div className=" flex pt-1 ">
         
        
        <div className=" w-[350px] ml-3 mt-1">
         

          {/* Back Button */}
          <div className="flex gap-44 mb-0">
            <h1 className="">
          <img src="../src/assets/logologin.png" alt="" width="150px" />
        </h1>
              <button  onClick={() => navigate("/login")}  className="flex items-center text-gray-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back
          </button>
          </div>
         

          {/* ------------------- MAIN SIGNUP UI ------------------- */}
          {!verificationSent ? (
            <>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">Sign Up</h2>
              <p className="text-gray-700 text-sm mb-6">
                New here? Enter details, we’ll create it!
              </p>

              <div className="space-y-4">

                {/* Full Name */}
                <div>
                  <label className="text-sm font-medium text-gray-800">Name</label>
                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="block w-full h-9 mt-1 p-2 rounded-md bg-white border"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-sm font-medium text-gray-800">Email</label>
                  <input
                    type="email"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleInputChange}
                    className="block w-full mt-1 p-2 h-9 rounded-md bg-white border"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="text-sm font-medium text-gray-800">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="block w-full mt-1 p-2 h-9 rounded-md bg-white border"
                  />
                </div>

                {/* Gender */}
                <div>
                  <label className="text-sm font-medium text-gray-800">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="block w-full mt-1 p-2 text-xs h-9 rounded-md bg-white border"
                  >
                    <option value="" className="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* DOB */}
                <div>
                  <label className="text-sm font-medium text-gray-800">DOB</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    className="block w-full mt-1 p-2 h-9 rounded-md bg-white border"
                  />
                </div>

                {/* Button */}
                <button
                  onClick={handleSubmit}
                  className="w-40 mx-auto mt-4 block bg-[#FFB300] hover:bg-[#e89f00] text-black font-semibold py-2 rounded-xl"
                >
                  Sign Up
                </button>
              </div>
            </>
          ) : (
            /* ------------------- OTP VERIFICATION UI ------------------- */
            <>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Enter OTP</h2>
              <p className="text-gray-700 text-sm mb-4">
                Enter OTP and let the fun begin!
              </p>

              <input
                name="code"
                value={formData.code}
                onChange={handleInputChange}
                className="block w-full p-2 rounded-md bg-white border mb-4"
                placeholder="Enter OTP"
              />

              <button
                onClick={handleVerify}
                className="w-40 mx-auto block bg-[#FFB300] hover:bg-[#e89f00] text-black font-semibold py-2 rounded-xl"
              >
                Sign Up
              </button>
            </>
          )}

          {/* STATUS MESSAGE */}
          {status && (
            <p className="text-center text-sm text-gray-800 mt-4">{status}</p>
          )}
        </div>
      </div>
       {/* RIGHT PANEL */}
      <div className="flex-1 flex flex-col items-center mt-20 relative">

        <img
          src="../src/assets/vrify.png"
          alt="Child Drawing"
          className=" w-[350px]  object-cover"
        />
      </div>

      
      
      </div>
    </div>
  );
};

export default Signup;