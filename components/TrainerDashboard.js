import React, { useEffect, useState } from 'react';

const TrainerDashboard = () => {
  const [classes, setClasses] = useState([]);
  const [trainees, setTrainees] = useState([]);

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

        const usersResponse = await fetch('/api/users');
        const users = await usersResponse.json();
        setTrainees(users.filter(user => user.role === 'trainee'));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-500 via-green-600 to-blue-700 text-white p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 animate__animated animate__fadeIn">
        <h1 className="text-4xl font-semibold text-center text-yellow-400 mb-6">Welcome, Trainer!</h1>
        <button onClick={handleLogout} className="bg-red-600 text-white p-2 rounded hover:bg-red-700 transition ease-in-out duration-300">
          Logout
        </button>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Assigned Classes</h2>
          <div className="space-y-4">
            {classes.map((classItem) => (
              <div key={classItem._id} className="bg-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all ease-in-out duration-300">
                <h3 className="font-semibold text-gray-800">{classItem.name}</h3>
                <p className="text-gray-700">{new Date(classItem.date).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Trainees</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainees.map((trainee) => (
              <div key={trainee._id} className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all ease-in-out duration-300">
                <h3 className="text-xl font-semibold text-gray-800">{trainee.fullName}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerDashboard;
