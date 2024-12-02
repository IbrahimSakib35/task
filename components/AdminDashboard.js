'use client'

import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createClass } from '../app/features/classSlice'

export default function AdminDashboard() {
  const dispatch = useDispatch()
  const { classes, loading } = useSelector((state) => state.class)
  const [newClass, setNewClass] = useState({ name: '', trainer: '', date: '', startTime: '', endTime: '' })

  const handleCreateClass = (e) => {
    e.preventDefault()
    dispatch(createClass(newClass))
    setNewClass({ name: '', trainer: '', date: '', startTime: '', endTime: '' })
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Create New Class</h2>
        <form onSubmit={handleCreateClass} className="space-y-4">
          <input
            type="text"
            placeholder="Class Name"
            value={newClass.name}
            onChange={(e) => setNewClass({ ...newClass, name: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            placeholder="Trainer ID"
            value={newClass.trainer}
            onChange={(e) => setNewClass({ ...newClass, trainer: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="date"
            value={newClass.date}
            onChange={(e) => setNewClass({ ...newClass, date: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="time"
            value={newClass.startTime}
            onChange={(e) => setNewClass({ ...newClass, startTime: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="time"
            value={newClass.endTime}
            onChange={(e) => setNewClass({ ...newClass, endTime: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Create Class
          </button>
        </form>
      </div>
      
      <div>
        <h2 className="text-xl font-semibold mb-2">Existing Classes</h2>
        {loading ? (
          <p>Loading classes...</p>
        ) : (
          <ul>
            {classes.map((cls) => (
              <li key={cls._id} className="mb-2">
                {cls.name} - {new Date(cls.date).toLocaleDateString()} {cls.startTime}-{cls.endTime}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

// const Admin= () =>{
//     return(
//         <div>Hello admin</div>
//     )
// }
// export default Admin;