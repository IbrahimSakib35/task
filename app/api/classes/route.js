import { NextResponse } from 'next/server';
import connectDB from '@/lib/connectDB';
import Class from '@/models/Class';

export async function GET(req) {
  await connectDB();

  try {
    const classes = await Class.find(); // Fetch all classes from the database
    return NextResponse.json(classes);
  } catch (error) {
    console.error('Error fetching classes:', error);
    return NextResponse.json({ message: 'Error fetching classes' }, { status: 500 });
  }
}
