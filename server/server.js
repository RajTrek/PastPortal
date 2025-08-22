const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Load env variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send("API is running");
});

const contactRoutes = require('./routes/contactRoutes');
app.use('/api/contact', contactRoutes);

const authRoutes = require('./routes/authRoutes');
app.use('/api', authRoutes);

// 404 handler
app.use((req, res, next) => {
  console.warn("404 - Route not found:", req.originalUrl);
  res.status(404).json({ error: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error("Server error:", err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// MongoDB connection + server start
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch(err => console.error("❌ DB connection error:", err));
