console.log('✅ Snapvio Startup Sequence Initiated...');

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const path = require('path');

console.log('📦 Core dependencies loaded');

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(helmet({
    contentSecurityPolicy: false,
}));
app.use(cors());
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
});
app.use(limiter);

console.log('🛠️ Middleware configured');

// Health check before DB
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date(), env: process.env.NODE_ENV });
});

// Database initialization with error handling
try {
    console.log('💾 Initializing database...');
    const db = require('./db');
    console.log('✅ Database initialized successfully');
} catch (error) {
    console.error('❌ Database initialization FAILED:', error);
    // Do NOT exit here so we can see the logs in Cloud Run console
}

const downloadRouter = require('./routes/download');

// Routes
app.use('/api/download', downloadRouter);

// Serve frontend in production
if (process.env.NODE_ENV === 'production') {
    const distPath = path.join(__dirname, '../client/dist');
    console.log(`🌐 Serving frontend from: ${distPath}`);
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
        res.sendFile(path.join(distPath, 'index.html'));
    });
}

console.log(`📡 Preparing to listen on 0.0.0.0:${PORT}`);
const server = app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 SNAPVIO SERVER LIVE AT http://0.0.0.0:${PORT}`);
});

server.on('error', (err) => {
    console.error('❌ Server failed to start:', err);
});
