import { Router } from 'express';
import ocrcontroller from '../controller/ocrcontroller';
const router = new Router();

// Add a new Post
router.route('/savebatch').post(ocrcontroller.addbatch);

export default router;
