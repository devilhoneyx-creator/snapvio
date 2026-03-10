const express = require('express');
const router = express.Router();
const { detectPlatform } = require('../utils/platform');
const db = require('../db');

router.post('/info', async (req, res) => {
    const { url } = req.body;

    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    const platform = detectPlatform(url);

    // Track download attempt
    db.prepare('INSERT INTO downloads (url, platform) VALUES (?, ?)').run(url, platform);

    // Mock response for now
    res.json({
        title: `Video from ${platform}`,
        thumbnail: 'https://via.placeholder.com/300',
        platform: platform,
        medias: [
            { quality: '720p', size: '15MB', url: '#', type: 'video' },
            { quality: '360p', size: '5MB', url: '#', type: 'video' },
            { quality: 'MP3', size: '3MB', url: '#', type: 'audio' }
        ]
    });
});

module.exports = router;
