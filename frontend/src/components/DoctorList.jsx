import { useEffect, useState } from 'react';
import API from '../lib/api';
import { useNavigate } from 'react-router-dom';

export default function DoctorList() {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    API.get('/api/doctors/list').then((res) => setDoctors(res.data));
  }, []);

  return (
    <div>
      <h2>Doctors</h2>
      <ul>
        {doctors.map((doc) => (
          <li key={doc._id}>
            {doc.name} — {doc.speciality}
            <button className='ms-2' onClick={() => navigate(`/book/${doc._id}`)}>Book Appointment</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
