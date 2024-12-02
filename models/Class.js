import mongoose from 'mongoose';

const ClassSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  trainer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  startTime: {
    type: String,
    required: true
  },
  endTime: {
    type: String,
    required: true
  },
  trainees: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
});

export default mongoose.models.Class || mongoose.model('Class', ClassSchema);
