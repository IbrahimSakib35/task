// import React from 'react'
// import Link from 'next/link'
// const Navbar = () => {
//   return (
//     <nav className='flex justify-between px-3 bg-slate-800 text-white py-4'>
//         <div className="logo font-bold">Ultimate Fitness Station</div>
//         <ul className='flex gap-6'>
//             <Link href="/" className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
//             Home
//             </Link>
//             <Link href="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//             Login
//             </Link>
//             <Link href="/register" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
//             Register
//             </Link>
//         </ul>
//     </nav>
//   )
// }

// export default Navbar
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='relative flex justify-between px-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-4 overflow-hidden'>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-gradient-x"></div>
      <div className="logo font-bold relative z-10">Ultimate Fitness Station</div>
      <ul className='flex gap-6 relative z-10'>
        <Link href="/" className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
          Home
        </Link>
        <Link href="/classes" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
          Classes
        </Link>
        <Link href="/schedule" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
          Schedule
        </Link>
        <Link href="/dashboard" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
          Dashboard
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar