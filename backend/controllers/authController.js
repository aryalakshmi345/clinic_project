import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { connectDB } from '../db.js'
import { ObjectId } from 'mongodb';


export const login = async (req, res) => {
  const { email, password } = req.body;
  try{const db = await connectDB();
  const user = await db.collection('users').findOne({ email });

  if (!user) return res.status(401).json({ error: 'Invalid email or password' });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ error: 'Invalid email or password' });

  const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });

  res.json({ token });
  }catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const profile = async (req, res) => {
   try{ 
    const db = await connectDB();
    
  const user = await db.collection('users').findOne({ _id: new ObjectId(req.user.userId) }, { projection: { password: 0 } });
  console.log(user);
  
  if (!user) return res.status(404).json({ error: 'User not found' });

  res.json(user);
}catch (err) {
    console.error('Profile error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
