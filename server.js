import app from './app/index';
import dotenv from 'dotenv'
dotenv.config()

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});