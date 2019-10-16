import express from  'express';

//init express app
const app = express();

//http get api endpoint
app.get('/', (req, res) =>
    res.send('http get request sent to root api endpoint')
);

//listener
//TODO change "3000" to a const referenced elsewhere
app.listen(3000, () => console.log(`Express server running on port 3000`));
