import express from 'express';
import healthRoute from './health.route.js';
import ocrRoute from './ocr.route.js';

const router = express.Router();

const routes = [
  {
    path: '/health',
    route: healthRoute,
  },
  {
    path: '/ocr',
    route: ocrRoute,
  },
]

routes.forEach((route) => {
  router.use(route.path, route.route);
})

export default router
