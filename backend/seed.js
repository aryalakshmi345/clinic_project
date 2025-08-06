import bcrypt from 'bcryptjs';
import { connectDB } from './db.js'



const seedDatabase = async () => {
  try {
    await connectDB();
    const db = await connectDB();
    

   

    // Seed users
    const users = [
      {
        email: 'john@example.com',
        password: await bcrypt.hash('password', 10),
      },
      {
        email: 'jane@example.com',
        password: await bcrypt.hash('secure123', 10),
      },
    ];

    const userResult = await db.collection('users').insertMany(users);
    console.log(`${userResult.insertedCount} users inserted.`);

    // Seed doctors
    const doctors = [
      {
        name: 'Dr. T.K. Jayarajan',
        speciality: 'Neurology',
        department: 'Surgery',
      },
      {
        name: 'Dr. Asha Menon',
        speciality: 'Cardiology',
        department: 'Cardiac Unit',
      },
      {
        name: 'Dr. Ravi Varma',
        speciality: 'Orthopedics',
        department: 'Orthopedic',
      },
    ];

    const doctorResult = await db.collection('doctors').insertMany(doctors);
    console.log(`${doctorResult.insertedCount} doctors inserted.`);
  } catch (err) {
    console.error('Seeding error:', err);
  } finally {
    process.exit(); 
  }
};

seedDatabase();
