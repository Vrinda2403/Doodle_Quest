import React from 'react'
import { ArrowLeft } from 'lucide-react';
import { useState,useEffect } from 'react';

const Signup=()=>{
   useEffect(() => {
    const savedData = localStorage.getItem('signupData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    gender: '',
    dateOfBirth: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Signup submitted:', formData);
    localStorage.setItem('signupData',JSON.stringify(formData))
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Panel - Brand Section */}
      <div className="flex-1 bg-gradient-to-br from-[#3B17AB] from-25% to-[#170942] to-100% flex flex-col items-center justify-center p-8 relative">
        <div >
          <h1 className="absolute w-[330px] h-[50px] top-[40px] left-[40px] 
    font-[Orbitron] 
    font-bold 
    text-[30px] 
    leading-[140%] 
    tracking-[8%] 
    flex 
    items-center
    bg-gradient-to-r 
    from-[#EDFFF5] 
    to-[rgba(133,213,237,0.74)] 
    text-transparent 
    bg-clip-text"
>DoodleQuest</h1>
</div>
        
        
        {/* Character Image */}
        <div className=" rounded-lg overflow-hidden shadow-2xl">
          <img 
            src="/images/mickey.jpg" 
            alt="Happy child in yellow Mickey Mouse shirt"
            className="w-80 h-96 object-cover"
          />
        </div>
      </div>

      {/* Right Panel - Signup Form */}
      <div className="flex-1 flex flex-col justify-center px-8 py-12 bg-gray-50">
        <div className="max-w-md mx-auto w-full">
          {/* Back Button */}
          <button className="flex items-center text-gray-600 mb-8 hover:text-gray-800 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </button>

          {/* Signup Form */}
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Account Signup</h2>
            <p className="text-gray-600 text-sm mb-6">
              Become a member and enjoy exclusive promotions
            </p>

            <div className="space-y-4">
              {/* Full Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email Address Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>

              {/* Gender Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Gender
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>

              {/* Date of Birth Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date Of Birth
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Continue Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-[#3B17AB] hover:bg-[#170942] text-white font-semibold py-3 px-4 rounded-md transition-colors duration-200 mt-6"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup