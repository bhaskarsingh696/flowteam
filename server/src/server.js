import app from './app.js';
import env from './shared/config/env.js';
import { connectDB } from './shared/config/db.js';

async function startServer() {
  await connectDB();

  app.listen(env.port, () => {
    console.log(`Server running on port ${env.port}`);
  });
}

startServer();