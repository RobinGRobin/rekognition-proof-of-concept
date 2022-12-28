import { Router } from 'express';
import multer from 'multer';
import {detectBucketFace, detectBucketFaceBase64} from '../controllers/routes.controllers.js'

const router = Router();
const upload = multer({dest:'./src/uploads'});

router.get('/', detectBucketFace);
router.post('/',upload.single('image'), detectBucketFaceBase64);

export default router;