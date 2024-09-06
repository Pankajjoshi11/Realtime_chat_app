import React from 'react'
import Link from 'next/link'
import { Input } from '../../components/ui/input'
import { Button } from '@/components/ui/button'

const LoginMain: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">Welcome to LinkZone</h1>
        <p className="text-lg text-gray-600">A stunning platform to connect with people.</p>
      </div>
      
      {/* Login Card */}
      <div className="w-full max-w-md p-6 bg-white border border-gray-300 shadow-lg rounded-lg">
        <h2 className="text-xl font-bold mb-4 text-center text-gray-800">Login</h2>
        
        <div className="flex flex-col space-y-4">
          {/* Username Input */}
          <div>
            <label htmlFor="username" className="block text-gray-700 mb-1">Your LinkZone Username:</label>
            <Input 
              id="username"
              className="w-full"
              placeholder="Pankaj1101" 
            />
          </div>
          
          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-gray-700 mb-1">Your LinkZone Password:</label>
            <Input 
              id="password"
              type="password"
              className="w-full"
              placeholder="********" 
            />
          </div>
          
          {/* Sign-in Link */}
          <div className="text-center mt-4 flex">
            <p className="text-gray-700">Already have an account? </p>
            <Link 
              href="/sign-in"
              className='text-blue-500 hover:underline px-2'>Sign in</Link>
          </div>
          
          {/* Login Button */}
          <div className="flex justify-center mt-6">
            <Button className="w-full">Login</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginMain
