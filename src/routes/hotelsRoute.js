import express from 'express';
import { createHotelsRoomType, fetchHotelsRoomTypeHandler } from '../controllers/hotelsController.js';
const router = express.Router();

router.post('/create-room-type', createHotelsRoomType)
router.get('/fetch-room-type', fetchHotelsRoomTypeHandler)

export default router