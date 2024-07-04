
import express from 'express';
import * as produtoController from '../controller/produtos.controller.js';

const router = express.Router();

router.get('/getAll', produtoController.getAll);
router.get('/getOne/:id', produtoController.getOne);
router.get ('/create', produtoController.create);


export default router;
