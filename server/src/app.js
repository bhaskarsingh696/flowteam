import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import env from './shared/config/env.js';
import { ApiError } from './shared/utils/ApiError.js';
import { asyncHandler } from './shared/utils/asyncHandler.js';
import { errorHandler } from './shared/middleware/errorHandler.js';

const app = express();

app.use(
  cors({
    origin: env.clientOrigin,
    credentials: true,
  })
);

app.use(express.json());

app.get(
  '/api/health',
  asyncHandler(async (req, res) => {
    const dbState = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';

    res.status(200).json({
      success: true,
      data: {
        status: 'ok',
        db: dbState,
      },
    });
  })
);

app.use((req, res, next) => {
  next(new ApiError(404, 'NOT_FOUND', 'Route not found'));
});

app.use(errorHandler);

export default app;
