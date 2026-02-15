import mongoose from 'mongoose';
import app from './src/app.js';
import { port, mongoUri } from './src/config/env.js';

// Database connection and server startup
const startServer = async () => {
    try {
        await mongoose.connect(mongoUri);
        console.log('✅ MongoDB connected successfully');

        app.listen(port, () => {
            console.log(`🚀 Server running on port ${port}`);
            console.log(`📖 API Docs: http://localhost:${port}/api-docs`);
        });
    } catch (error) {
        console.error('❌ Database connection failed:', error.message);
        process.exit(1);
    }
};

startServer();