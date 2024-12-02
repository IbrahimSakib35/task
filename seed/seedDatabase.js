const mongoose = require('mongoose');
const User = require('./User');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected for seeding'))
.catch(err => console.log(err));

const seedData = async () => {
  try {
    // Clear existing data
    await User.deleteMany({});

    // Create users to test("npm run seed")
    // Create admins
    const admin1 = await User.create({
      fullName: 'Admin One',
      email: 'admin1@example.com',
      password: 'password123',
      role: 'admin'
    });

    const admin2 = await User.create({
      fullName: 'Admin Two',
      email: 'admin2@example.com',
      password: 'password123',
      role: 'admin'
    });

    // Create trainers
    const trainer1 = await User.create({
      fullName: 'Trainer One',
      email: 'trainer1@example.com',
      password: 'password123',
      role: 'trainer'
    });

    const trainer2 = await User.create({
      fullName: 'Trainer Two',
      email: 'trainer2@example.com',
      password: 'password123',
      role: 'trainer'
    });

    const trainer3 = await User.create({
      fullName: 'Trainer Three',
      email: 'trainer3@example.com',
      password: 'password123',
      role: 'trainer'
    });

    // Create trainees
    const trainee1 = await User.create({
      fullName: 'Trainee One',
      email: 'trainee1@example.com',
      password: 'password123',
      role: 'trainee'
    });

    const trainee2 = await User.create({
      fullName: 'Trainee Two',
      email: 'trainee2@example.com',
      password: 'password123',
      role: 'trainee'
    });

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.disconnect();
  }
};

seedData();

