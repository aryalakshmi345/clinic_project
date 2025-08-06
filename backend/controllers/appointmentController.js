import { ObjectId } from 'mongodb';
import { connectDB } from '../db.js'

export const createAppointment = async (req, res) => {
  const { patient_name, age, appointment_date, doctor_id } = req.body;
//   console.log(patient_name, age, appointment_date, doctor_id);
  

  try{if (!patient_name || !age || !appointment_date || !doctor_id) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const appointmentDate = new Date(appointment_date);
  if (appointmentDate < new Date()) {
    return res.status(400).json({ error: 'Appointment date must be in the future' });
  }

  const db = await connectDB();
  const doctor = await db.collection('doctors').findOne({ _id: new ObjectId(doctor_id) });
  if (!doctor) return res.status(404).json({ error: 'Doctor not found' });

  const appointment = {
    patient_name,
    age,
    appointment_date: appointmentDate,
    doctor_id,
    user_id: req.user.userId,
  };

  const result = await db.collection('appointments').insertOne(appointment);
  res.status(201).json({ id: result.insertedId });
  }catch(err) {
    console.error('Create appointment error:', err);
    res.status(500).json({ error: 'Internal server error' });
  } 
};

export const listAppointments = async (req, res) => {
  try {
    const db = await connectDB();
  const appointments = await db
    .collection('appointments')
    .find({ user_id: req.user.userId })
    .toArray();

  res.json(appointments);
  }catch (err) {
    console.error('List appointments error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
