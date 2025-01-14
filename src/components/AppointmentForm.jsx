import React, { useState } from 'react';

const AppointmentForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({ name: '', date: '', time: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (formData.patientName && formData.doctorId && formData.date && formData.time) {
            const selectedDoctorName = doctors.find(
                (doc) => doc.id === parseInt(formData.doctorId)
            )?.name;
    
            const newAppointment = {
                id: appointments.length + 1,
                patientName: formData.patientName,
                doctor: selectedDoctorName,
                date: formData.date,
                time: formData.time,
            };
    
            try {
                const response = await fetch('http://localhost:3000/appointments', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newAppointment),
                });
    
                if (!response.ok) {
                    throw new Error('Failed to add appointment');
                }
    
                const addedAppointment = await response.json();
                setAppointments([...appointments, addedAppointment]);
    
                // Reset form
                setFormData({
                    patientName: "",
                    doctorId: "",
                    date: "",
                    time: "",
                });
            } catch (err) {
                alert(err.message);
            }
        } else {
            alert("Please fill out all fields.");
        }
    };

    return (
        <div className="w-full bg-green-100 text-white py-12 px-6">
            <h2 className="text-4xl font-bold text-center text-green-900 mb-8">Schedule an Appointment</h2>
            <form onSubmit={handleSubmit} className="max-w-[600px] mx-auto bg-white text-green-900 p-8 rounded-lg shadow-lg">
                <div className="mb-4">
                    <label htmlFor="patientName" className="block text-green-900 font-bold p-2 mb-4">Full Name</label>
                    <input
                        type="text"
                        name="patientName"
                        value={formData.patientName}
                        onChange={handleChange}
                        placeholder="Enter your Name"
                        className="w-full px-4 py-2 bg-green-200 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
                    />
                </div>
                <div className="mb-4"> 
                    <label htmlFor="doctor" className="block text-green-900 font-bold p-2 mb-4">Especiality</label>
                    <select
                        name="doctorId"
                        value={formData.doctorId}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-green-200 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300">
                    </select>
                    <p className='text-xl font-semibold text-center text-green-700'>----soon----</p>
                    
                </div>
                <div className='mb-4'>
                <label htmlFor="phone" className="block text-green-900 font-bold p-2 mb-4">Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your Phone Number"
                        className="w-full px-4 py-2 bg-green-200 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
                    />
                </div>
                <div className="mb-4 col2">
                    <div>
                        <label htmlFor="date" className="block text-green-900 font-bold p-2 mb-4">Date</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-green-200 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
                        />
                    </div>
                    <div>
                        <label htmlFor="time" className="block text-green-900 font-bold p-2 mb-4">Time</label>
                        <input
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-green-200 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-300 text-green-900 py-2 px-4 font-bold rounded-lg hover:bg-green-400 mb-2"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AppointmentForm;
