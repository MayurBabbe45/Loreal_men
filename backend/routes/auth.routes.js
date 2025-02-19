import express from 'express';
import { login, logout, signup, getMe } from '../controllers/auth.controller.js';
import { protectRoute } from '../middleware/protectRoute.js';


const router = express.Router();

// Use POST for signup
router.post('/signup', signup);

// Use POST for login (assuming login is handled via POST)
router.post('/login', login);

// Use POST for logout
router.post('/logout', logout);

// Use GET for getMe (protected route)
router.get('/me', protectRoute, getMe);

export default router;