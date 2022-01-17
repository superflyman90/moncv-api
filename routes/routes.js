import { Router } from 'express';
import { addExper, getExper } from '../controllers/experController.js';
import { catchErrors } from '../helpers.js';

const router = new Router();

router.get('/', (req, res) => {
    res.send('<h1>Hello World !</h1>');
})

router.post('/exper', catchErrors(addExper));

router.get('/expers', catchErrors(getExper));

export default router;