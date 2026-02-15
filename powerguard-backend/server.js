const mongoose = require('mongoose');
const app = require('./src/app');
const { port, mongoUri } = require('./src/config/env');

mongoose.connect(mongoUri).then(() => {
    console.log('DB connected');
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
});