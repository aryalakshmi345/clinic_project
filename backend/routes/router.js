import express from 'express';
import { login, profile } from '../controllers/authController.js';
import { listDoctors, createDoctor } from '../controllers/doctorController.js';
import { createAppointment, listAppointments } from '../controllers/appointmentController.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

// Auth
router.post('/users/login', login);
router.get('/users/get', authMiddleware, profile);

// Doctors
router.get('/doctors/list', listDoctors);
router.post('/doctors/create', authMiddleware, createDoctor);

// Appointments
router.post('/appointments/create', authMiddleware, createAppointment);
router.get('/appointments/list', authMiddleware, listAppointments);

export default router;
