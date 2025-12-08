import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import axios from "axios";
import { useSignUp } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { isLoaded, signUp } = useSignUp();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    parentEmail: "",
    parentPassword: "",
    parentId: "",
    parentMobile: "",
    childId: "",
    childPassword: "",
    code: "",
  });

  const [status, setStatus] = useState("");
  const [verificationSent, setVerificationSent] = useState(false);

  if (!isLoaded) return <div>Loading...</div>;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // STEP 1 — Signup clerk user
  const handleSubmit = async () => {
    try {
      setStatus("Creating parent account...");

      await signUp.create({
        emailAddress: formData.parentEmail,
        password: formData.parentPassword,
      });

      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });

      setStatus("Verification email sent. Check your inbox.");
      setVerificationSent(true);
    } catch (err) {
      setStatus(err.errors?.[0]?.message || "Signup failed.");
    }
  };

  // STEP 2 — Verify Code + Save Parent/Child in DB
  const handleVerify = async () => {
    try {
      setStatus("Verifying...");

      const result = await signUp.attemptEmailAddressVerification({
        code: formData.code,
      });

      if (result.status === "complete") {
        setStatus("Saving family data...");

        await axios.post("http://localhost:5000/registerFamily", {
          clerkUserId: result.createdUserId,
          parentId: formData.parentId,
          parentEmail: formData.parentEmail,
          parentMobile: formData.parentMobile,
          childId: formData.childId,
          childPassword: formData.childPassword,
        });

        setStatus("Signup completed!");
        navigate("/login");
      } else {
        setStatus("Invalid verification code.");
      }
    } catch (err) {
      setStatus(err.errors?.[0]?.message || "Invalid code");
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* LEFT PANEL — YOUR OLD MICKEY UI */}
      <div className="flex-1 bg-gradient-to-br from-[#3B17AB] to-[#170942] 
      flex flex-col items-center justify-center p-8 relative">

        <h1
          className="absolute top-[40px] left-[40px] text-[30px] font-bold 
          bg-gradient-to-r from-[#EDFFF5] to-[rgba(133,213,237,0.74)]
          text-transparent bg-clip-text"
        >
          DoodleQuest
        </h1>

        <div className="rounded-lg overflow-hidden shadow-2xl">
          <img
            src="/images/mickey.jpg"
            alt="Signup Illustration"
            className="w-80 h-96 object-cover"
          />
        </div>
      </div>

      {/* RIGHT PANEL — SIGNUP FORM */}
      <div className="flex-1 flex flex-col justify-center px-8 py-12 bg-gray-50">
        <div className="max-w-md mx-auto w-full">

          {/* BACK BUTTON */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 mb-8 hover:text-gray-800"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </button>

          {/* SIGNUP BOX */}
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-bold mb-2">Family Signup</h2>
            <p className="text-gray-600 text-sm mb-6">
              Create both parent and child accounts together.
            </p>

            {!verificationSent ? (
              <div className="space-y-4">
                {/* Parent Email */}
                <div>
                  <label className="block text-sm font-medium">Parent Email</label>
                  <input
                    type="email"
                    name="parentEmail"
                    value={formData.parentEmail}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>

                {/* Parent Password */}
                <div>
                  <label className="block text-sm font-medium">Parent Password</label>
                  <input
                    type="password"
                    name="parentPassword"
                    value={formData.parentPassword}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>

                {/* Parent ID */}
                <div>
                  <label className="block text-sm font-medium">Parent ID</label>
                  <input
                    type="text"
                    name="parentId"
                    value={formData.parentId}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>

                {/* Parent Mobile */}
                <div>
                  <label className="block text-sm font-medium">Parent Mobile</label>
                  <input
                    type="text"
                    name="parentMobile"
                    value={formData.parentMobile}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>

                {/* Child ID */}
                <div>
                  <label className="block text-sm font-medium">Child ID</label>
                  <input
                    type="text"
                    name="childId"
                    value={formData.childId}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>

                {/* Child Password */}
                <div>
                  <label className="block text-sm font-medium">Child Password</label>
                  <input
                    type="password"
                    name="childPassword"
                    value={formData.childPassword}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>

                {/* CONTINUE BUTTON */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-[#3B17AB] hover:bg-[#170942] text-white py-3 rounded"
                >
                  Continue
                </button>
              </div>
            ) : (
              // VERIFICATION STEP
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium">Enter Verification Code</label>
                  <input
                    type="text"
                    name="code"
                    value={formData.code}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>

                <button
                  onClick={handleVerify}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded"
                >
                  Verify Code
                </button>
              </div>
            )}

            {status && (
              <p className="text-sm text-center text-gray-700 mt-4">{status}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
