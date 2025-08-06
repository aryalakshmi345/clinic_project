import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API from '../lib/api';

export default function BookAppointment() {
  const { id } = useParams();
  const [patientName, setPatientName] = useState('');
  const [age, setAge] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await API.post('api/appointments/create', {
        patient_name: patientName,
        age: parseInt(age),
        appointment_date: date,
        doctor_id: id,
      });
    //   console.log(res);
      
      navigate('/appointments');
    } catch (err) {
      setError(err.response?.data?.error || 'Booking failed');
    }
  };

  return (
    <div className='d-flex flex-column align-items-center justify-content-center' style={{height:"100vh",width:"100%"}}>
      <h2>Book Appointment</h2>
      {error && <p style={{color: 'red'}}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input className='form-control mb-3' value={patientName} onChange={(e) => setPatientName(e.target.value)} placeholder="Patient Name" required />
        <input className='form-control  mb-3' value={age} type="number" onChange={(e) => setAge(e.target.value)} placeholder="Age" required />
        <input className='form-control  mb-3' value={date} type="date" onChange={(e) => setDate(e.target.value)} required />
        <button type="submit">Book</button>
      </form>
    </div>
  );
}
