import React, { useEffect, useState } from 'react';

const TraineeDashboard = () => {
  const [classes, setClasses] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const classesResponse = await fetch('/api/classes');
        const classes = await classesResponse.json();
        setClasses(classes);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-500 via-purple-600 to-blue-700 text-white p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 animate__animated animate__fadeIn">
        <h1 className="text-4xl font-semibold text-center text-yellow-400 mb-6">Welcome, Trainee!</h1>
        <button onClick={handleLogout} className="bg-red-600 text-white p-2 rounded hover:bg-red-700 transition ease-in-out duration-300">
          Logout
        </button>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Available Classes</h2>
          <div className="space-y-4">
            {classes.map((classItem) => (
              <div key={classItem._id} className="bg-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all ease-in-out duration-300">
                <h3 className="font-semibold text-gray-800">{classItem.name}</h3>
                <p className="text-gray-700">{new Date(classItem.date).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TraineeDashboard;
