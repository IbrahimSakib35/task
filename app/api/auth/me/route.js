import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import connectDB from '@/lib/connectDB';
import User from '@/models/User';

export async function GET(req) {
  await connectDB();

  const token = req.headers.get('x-auth-token');

  if (!token) {
    return NextResponse.json({ message: 'No token, authorization denied' }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId).select('-password');

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error('Auth error:', error);
    return NextResponse.json({ message: 'Token is not valid' }, { status: 401 });
  }
}

