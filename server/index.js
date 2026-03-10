console.log('✅ Starting Snapvio Backend...');

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const path = require('path');

console.log('📦 Dependencies loaded');

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(helmet({
    contentSecurityPolicy: false,
}));
app.use(cors());
app.use(express.json());
console.log('🛠️ Middleware configured');

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
});
app.use(limiter);

console.log('💾 Initializing database...');
const db = require('./db');
console.log('✅ Database initialized');

const downloadRouter = require('./routes/download');

// Routes
app.use('/api/download', downloadRouter);

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date() });
});

// Serve frontend in production
if (process.env.NODE_ENV === 'production') {
    console.log('🌐 Serving frontend from dist');
    app.use(express.static(path.join(__dirname, '../client/dist')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
}

console.log(`📡 Attempting to listen on 0.0.0.0:${PORT}`);
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server fully operational on http://0.0.0.0:${PORT}`);
});
