import express from 'express';

const server = express();


server.get('/', (req, res) => {
    return res.send('Denis Vasques, eu amo muito você!');
});

export { server };