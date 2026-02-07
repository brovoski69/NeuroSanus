const app = require('./src/app');
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`NeuroSanus server is running on port ${PORT}`);
});