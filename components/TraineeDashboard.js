'use client'

import { useSelector, useDispatch } from 'react-redux'
import { bookClass } from '../app/features/classSlice'

export default function TraineeDashboard() {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const { classes, loading } = useSelector((state) => state.class)

  const handleBookClass = (classId) => {
    dispatch(bookClass(classId))
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Trainee Dashboard</h1>
      
      <div>
        <h2 className="text-xl font-semibold mb-2">Available Classes</h2>
        {loading ? (
          <p>Loading classes...</p>
        ) : (
          <ul>
            {classes.map((cls) => (
              <li key={cls._id} className="mb-2">
                {cls.name} - {new Date(cls.date).toLocaleDateString()} {cls.startTime}-{cls.endTime}
                <br />
                Spots: {cls.trainees.length}/10
                {cls.trainees.length < 10 && !cls.trainees.includes(user._id) && (
                  <button
                    onClick={() => handleBookClass(cls._id)}
                    className="ml-2 bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded text-sm"
                  >
                    Book
                  </button>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

// const trainee= () =>{
//     return(
//         <div>Hello trainee</div>
//     )
// }
// export default trainee;