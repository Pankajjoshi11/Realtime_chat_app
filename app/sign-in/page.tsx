// /app/sign-in/page.tsx
'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Input } from '../../components/ui/input'
import { Button } from '../../components/ui/button'
import { Label } from '../../components/ui/label'

const SignIn: React.FC = () => {
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setProfilePhoto(event.target.files[0])
    }
  }

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">Sign In to LinkZone</h1>
        <p className="text-lg text-gray-600">Welcome back! Please sign in to continue.</p>
      </div>
      
      {/* Sign-In Card */}
      <div className="w-full max-w-md p-6 bg-white border border-gray-300 shadow-lg rounded-lg">
        <h2 className="text-xl font-bold mb-4 text-center text-gray-800">Sign In</h2>
        
        <div className="flex flex-col space-y-4">
          {/* Profile Photo Input */}
          <div className="flex flex-col items-center mb-4">
            <Label htmlFor="profilePhoto">Profile Photo:</Label>
            <Input id="picture" type="file" className='w-full mb-2' />
            {/* Display Profile Photo Preview */}
            {profilePhoto && (
              <div className="flex justify-center mt-4">
                <img
                  src={URL.createObjectURL(profilePhoto)}
                  alt="Profile Preview"
                  className="w-24 h-24 object-cover rounded-full border-4 border-blue-500"
                />
              </div>
            )}
          </div>

          {/* Full Name Input */}
          <div>
            <Label htmlFor="fullName">Full Name:</Label>
            <Input 
              id="fullName"
              placeholder="John Doe" 
            />
          </div>
          
          {/* Username Input */}
          <div>
            <Label htmlFor="username">Username:</Label>
            <Input 
              id="username"
              placeholder="johndoe123" 
            />
          </div>
          
          {/* Mobile Number Input */}
          <div>
            <Label htmlFor="mobileNumber">Mobile Number:</Label>
            <Input 
              id="mobileNumber"
              type="tel"
              placeholder="+1234567890" 
            />
          </div>
          
          {/* Password Input */}
          <div>
            <Label htmlFor="password">Password:</Label>
            <Input 
              id="password"
              type="password"
              placeholder="********" 
            />
          </div>
          
          {/* Sign-Up Link */}
          <div className="text-center mt-4">
            <p className="text-gray-700">Don't have an account? <Link href="/log-in" className="text-blue-500 hover:underline">Log in</Link></p>
          </div>
          
          {/* Sign In Button */}
          <div className="flex justify-center mt-6">
            <Button className="w-full">Sign In</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
