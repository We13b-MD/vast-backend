


 // Import necessary modules
import express from 'express'
import cors from 'cors'
const app = express();
const port = 3000;

// Track the count for different events
let eventCounts = {
    click:0,
    impression: 0,
    firstQuartile: 0,
    midpoint: 0,
    thirdQuartile: 0,
    complete: 0
};

app.use(cors());

// Route to track impression
app.get('/track/impression', (req, res) => {
    eventCounts.impression++;
    res.json({ event: 'impression', count: eventCounts.impression });
});

// Route to track first quartile
app.get('/track/firstQuartile', (req, res) => {
    eventCounts.firstQuartile++;
    res.json({ event: 'firstQuartile', count: eventCounts.firstQuartile });
});

// Additional routes for midpoint, third quartile, and complete
app.get('/track/midpoint', (req, res) => {
    eventCounts.midpoint++;
    res.json({ event: 'midpoint', count: eventCounts.midpoint });
});

app.get('/track/thirdQuartile', (req, res) => {
    eventCounts.thirdQuartile++;
    res.json({ event: 'thirdQuartile', count: eventCounts.thirdQuartile });
});

app.get('/track/complete', (req, res) => {
    eventCounts.complete++;
    res.json({ event: 'complete', count: eventCounts.complete });
});




app.listen(port, () => {
    console.log(`Tracking server running on port ${port}`);
});


