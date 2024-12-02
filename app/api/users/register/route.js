import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import connectDB from '@/lib/connectDB';
import User from '@/models/User';

export async function POST(req) {
  await connectDB();

  const { fullName, email, password } = await req.json();

  try {
    let user = await User.findOne({ email });

    if (user) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new User({
      fullName,
      email,
      password: hashedPassword,
      role: 'trainee' // Default role for new registrations
    });

    await user.save();

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    return NextResponse.json({ token, user: { id: user._id, email: user.email, role: user.role } });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}

