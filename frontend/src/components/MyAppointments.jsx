import { useEffect, useState } from 'react';
import API from '../lib/api';

export default function MyAppointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    API.get('/api/appointments/list').then((res) => setAppointments(res.data));
  }, []);

  return (
    <div>
      <h2>My Appointments</h2>
      <ul>
        {appointments.map((a) => (
          <li key={a._id}>
            {a.patient_name} - {new Date(a.appointment_date).toLocaleDateString()} (Doctor ID: {a.doctor_id})
          </li>
        ))}
      </ul>
    </div>
  );
}
