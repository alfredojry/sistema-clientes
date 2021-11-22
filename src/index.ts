import express from 'express';
import router from './routes';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'react-app', 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'react-app', 'build', 'index.html'));
});

app.use('/api', router);

app.use((req, res) => {
  res.status(404).send();
});

app.listen(PORT, () => {
  console.log(`\n> Listening at http://localhost:${PORT}`);
});
