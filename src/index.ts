import express from 'express';
import router from './routes';

const app = express();
const PORT = 4000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/api', router);

app.use((req, res) => {
  res.status(404).send();
});

app.listen(PORT, error => {
  if (error) return console.log(error);
  console.log(`\n> Listening at http://localhost:${PORT}`);
});
