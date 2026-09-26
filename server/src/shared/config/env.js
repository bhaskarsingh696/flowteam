import dotenv from 'dotenv';

dotenv.config();

const REQUIRED_VARS = ['PORT', 'MONGODB_URI', 'NODE_ENV', 'CLIENT_ORIGIN'];

function loadEnv() {
  const missing = REQUIRED_VARS.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variable(s): ${missing.join(', ')}. ` +
        `Check server/.env against server/.env.example.`
    );
  }

  return {
    port: process.env.PORT,
    mongodbUri: process.env.MONGODB_URI,
    nodeEnv: process.env.NODE_ENV,
    clientOrigin: process.env.CLIENT_ORIGIN,
  };
}

const env = loadEnv();

export default env;