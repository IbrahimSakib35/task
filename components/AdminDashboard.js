import React, { useEffect, useState } from 'react';

const AdminDashboard = () => {
  const [trainers, setTrainers] = useState([]);
  const [trainees, setTrainees] = useState([]);
  const [classes, setClasses] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersResponse = await fetch('/api/users');
        const users = await usersResponse.json();
        const classesResponse = await fetch('/api/classes');
        const classes = await classesResponse.json();

        setTrainers(users.filter(user => user.role === 'trainer'));
        setTrainees(users.filter(user => user.role === 'trainee'));
        setClasses(classes);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-700 text-white p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 animate__animated animate__fadeIn">
        <h1 className="text-4xl font-semibold text-center text-yellow-400 mb-6">Welcome, Admin!</h1>
        <button onClick={handleLogout} className="bg-red-600 text-white p-2 rounded hover:bg-red-700 transition ease-in-out duration-300">
          Logout
        </button>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Trainers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainers.map((trainer) => (
              <div key={trainer._id} className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all ease-in-out duration-300">
                <h3 className="text-xl font-semibold text-gray-800">{trainer.fullName}</h3>
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

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Classes</h2>
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

export default AdminDashboard;
