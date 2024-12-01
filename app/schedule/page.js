export default function Schedule() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-b from-green-900 to-green-600">
        <h1 className="text-4xl font-bold mb-6 text-white">Class Schedule</h1>
        <p className="text-xl mb-8 text-gray-300">
          View and book your favorite classes
        </p>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <table className="w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Time</th>
                <th className="px-4 py-2">Monday</th>
                <th className="px-4 py-2">Wednesday</th>
                <th className="px-4 py-2">Friday</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">9:00 AM</td>
                <td className="border px-4 py-2">Yoga</td>
                <td className="border px-4 py-2">Pilates</td>
                <td className="border px-4 py-2">Zumba</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">11:00 AM</td>
                <td className="border px-4 py-2">Strength Training</td>
                <td className="border px-4 py-2">Cardio</td>
                <td className="border px-4 py-2">Spinning</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">2:00 PM</td>
                <td className="border px-4 py-2">Zumba</td>
                <td className="border px-4 py-2">Yoga</td>
                <td className="border px-4 py-2">Pilates</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
  
  