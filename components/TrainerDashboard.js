'use client'

import { useSelector } from 'react-redux'

export default function TrainerDashboard() {
  const { user } = useSelector((state) => state.auth)
  const { classes, loading } = useSelector((state) => state.class)

  const trainerClasses = classes.filter(cls => cls.trainer === user._id)

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Trainer Dashboard</h1>
      
      <div>
        <h2 className="text-xl font-semibold mb-2">Your Classes</h2>
        {loading ? (
          <p>Loading classes...</p>
        ) : (
          <ul>
            {trainerClasses.map((cls) => (
              <li key={cls._id} className="mb-2">
                {cls.name} - {new Date(cls.date).toLocaleDateString()} {cls.startTime}-{cls.endTime}
                <br />
                Trainees: {cls.trainees.length}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

// const trainer= () =>{
//     return(
//         <div>Hello trainer</div>
//     )
// }
// export default trainer;