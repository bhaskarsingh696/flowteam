import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    env: {
      PORT: '5000',
      MONGODB_URI: 'mongodb://localhost:27017/flowteam-test',
      NODE_ENV: 'test',
      CLIENT_ORIGIN: 'http://localhost:5173',
    },
  },
});