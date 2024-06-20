const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('your_mongodb_connection_string', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const activitySchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  name: String,
  status: String,
  startTime: Date,
  endTime: Date,
  duration: Number,
  actions: Array,
});

const User = mongoose.model('User', userSchema);
const Activity = mongoose.model('Activity', activitySchema);

app.post('/signup', async (req, res) => {
  // Handle signup
});

app.post('/login', async (req, res) => {
  // Handle login
});

app.get('/activities', async (req, res) => {
  // Get all activities for a user
});

app.post('/activities', async (req, res) => {
  // Create a new activity
});

app.put('/activities/:id', async (req, res) => {
  // Update an activity
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
