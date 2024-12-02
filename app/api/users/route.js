import { NextResponse } from 'next/server';
import connectDB from '@/lib/connectDB';
import User from '@/models/User';

export async function GET(req) {
  await connectDB();

  try {
    const users = await User.find(); // Fetch all users from the database
    return NextResponse.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ message: 'Error fetching users' }, { status: 500 });
  }
}
