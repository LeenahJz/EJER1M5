import React from 'react';
import DoctorCard from './components/DoctorCard';
import ServiceList from './components/ServiceList';
import AppointmentForm from './components/AppointmentForm';
import { GiPlantRoots } from "react-icons/gi";


const App = () => {
  const handleAppointmentSubmit = (appointment) => {
    console.log('Appointment booked:', appointment);
  };

  return (
    <div className="m-auto px-6 py-12 bg-white">
      <h1 className="text-6xl font-bold text-center text-green-500 py-2"><GiPlantRoots />Welcome to Green Hospital </h1>
      <DoctorCard />
      <ServiceList />
      <AppointmentForm onSubmit={handleAppointmentSubmit} />
    </div>
  );
};

export default App;
