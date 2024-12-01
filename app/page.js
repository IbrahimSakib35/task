// 'use client'


// export default function Home() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen py-2">
//       <h1 className="text-3xl font-bold">
//         Welcome to Gym Class Scheduling and Membership Management System
//       </h1>

//     </div>
//   )
// }
'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-b from-gray-900 to-gray-600">
      <div className={`text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-4xl font-bold mb-6 text-white">
          Welcome to Ultimate Fitness Station
        </h1>
        <p className="text-xl mb-8 text-gray-300">
          Your journey to a healthier lifestyle starts here
        </p>
        <div>
          <a href="/register" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 mr-4">
            Get Started
          </a>
          <a href="/login" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            Login
          </a>
        </div>
      </div>
    </div>
  )
}
