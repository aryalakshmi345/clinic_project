import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import DoctorList from './components/DoctorList';
import BookAppointment from './components/BookAppointment';
import MyAppointments from './components/MyAppointments';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/doctors" element={<DoctorList />} />
        <Route path="/book/:id" element={<BookAppointment />} />
        <Route path="/appointments" element={<MyAppointments />} />
      </Routes>
    </Router>
  );
}
