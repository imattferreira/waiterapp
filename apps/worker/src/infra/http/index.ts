import express from 'express';

const PORT = 4000;

const app = express();

app.use(express.json());
app.get('/', (req, res) => {
  return res.json({ hello: 'world' })
})

app.listen(PORT);
