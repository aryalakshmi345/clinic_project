import { connectDB } from '../db.js'


export const listDoctors = async (req, res) => {
 try{ 
 const db = await connectDB();
  const doctors = await db.collection('doctors').find().toArray();
  res.json(doctors);
}catch (err) {
    console.error('List doctors error:', err);
    res.status(500).json({ error: 'Internal server error' });
  } 
};

export const createDoctor = async (req, res) => {
  const { name, speciality, department } = req.body;
  try{
    if (!name || !speciality || !department) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const db = await connectDB();
  const result = await db.collection('doctors').insertOne({ name, speciality, department });
  res.status(201).json({ id: result.insertedId });
  }catch (err) {
    console.error('Create doctor error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
