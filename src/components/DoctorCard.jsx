import React, { useEffect, useState } from 'react';

const DoctorCard = () => {
  const [doctors, setDoctors] = useState([]);
  const [error, setError] = useState(null);

  const fetchDoctors = async () => {
    try {
      const response = await fetch('http://localhost:3000/doctors');
      if (!response.ok) {
        throw new Error('Failed to fetch doctors');
      }
      const data = await response.json();
      setDoctors(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <div className="w-full h-full px-6 py-12 bg-white">
      {error && <p>{error}</p>}
      <h2 className="text-4xl font-bold text-center text-green-500 py-2">Specialists</h2>
      <div className="text-center my-4">
      <button onClick={fetchDoctors} className="w-full bg-green-300 text-green-900 py-2 px-4 font-bold rounded-lg hover:bg-green-400 mb-2">Reload Doctors</button>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {doctors.map((doctor) => (
        <div key={doctor.id} className="flex flex-col items-center bg-green-100 text-green-500 p-6 rounded-lg shadow-lg hover:scale-105 transition duration-300">
          <h2 className="text-2xl font-bold text-center text-green-500 py-2">{doctor.name}</h2>
          <p className='text-xl font-semibold text-center text-green-700'>{doctor.specialty}</p>
          <p className='text-xl font-semibold text-center text-green-700'>{doctor.experience}</p>
        </div>
        
      ))}
      </div>
    </div>
  );
};

export default DoctorCard;
