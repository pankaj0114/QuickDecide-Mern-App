require('dotenv').config();
console.log('MONGO_URI:', process.env.MONGO_URI);
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dns = require('dns');
//require('dotenv').config();
const Poll = require('./models/Poll');

dns.setServers(['1.1.1.1', '8.8.8.8']);

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

// --- API ROUTES ---

// 1. Create a Poll
app.post('/api/polls', async (req, res) => {
  try {
    const { question, options, duration } = req.body;
    const expiresAt = new Date(Date.now() + duration * 60000); // duration in minutes

    const newPoll = new Poll({
      question,
      options: options.map((opt) => ({ text: opt, votes: 0 })),
      expiresAt,
    });

    await newPoll.save();
    res.status(201).json(newPoll);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 2. Get All Polls
app.get('/api/polls', async (req, res) => {
  try {
    const polls = await Poll.find().sort({ createdAt: -1 });
    res.json(polls);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 3. Vote on a Poll
app.patch('/api/polls/:id/vote', async (req, res) => {
  try {
    const { optionId } = req.body;
    const poll = await Poll.findById(req.params.id);

    if (new Date() > poll.expiresAt) {
      return res.status(400).json({ message: 'This poll has expired' });
    }

    const option = poll.options.id(optionId);
    option.votes += 1;
    await poll.save();

    res.json(poll);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
