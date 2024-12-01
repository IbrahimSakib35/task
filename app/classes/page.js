import React from 'react';

export default function Classes() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-b from-blue-900 to-blue-600">
      <h1 className="text-4xl font-bold mb-6 text-white">Our Classes</h1>
      <p className="text-xl mb-8 text-gray-300">
        Explore and book our wide range of fitness classes
      </p>
      {/* We'll add a list or grid of classes here in the future */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Placeholder for class items */}
        {['Yoga', 'Pilates', 'Zumba', 'Strength Training', 'Cardio', 'Spinning'].map((className) => (
          <div key={className} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800">{className}</h2>
            <p className="text-gray-600">Description of {className} class</p>
            <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

