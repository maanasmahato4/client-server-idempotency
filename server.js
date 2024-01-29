
import express from "express";
const app = express();
app.use(express.json()); // for parsing application/json

let lastRequestId;

app.post('/api', (req, res) => {
    const currentRequestId = req.headers['x-request-id'];

    if (currentRequestId === lastRequestId) {
        return res.status(304).send('Duplicate request');
    }

    lastRequestId = currentRequestId;
    console.log(lastRequestId);

    res.status(200).send('Request processed successfully');
});

app.listen(3000, () => console.log('Server started on port 3000'));
