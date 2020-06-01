import express from 'express';

const app = express();

app.get('/', (_, res) => {
    return res.json({message: "Api Online!"})
})

app.listen(3333, () => {
    console.log('Server Running on http://localhost:3333');    
})
