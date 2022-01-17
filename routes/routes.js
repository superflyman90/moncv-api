import { Router } from 'express';

import { addExper, getExpers, getExper } from '../controllers/experController.js';

import { catchErrors } from '../helpers.js';


const router = new Router();

router.get('/', (req, res) => {
    res.send('<h1>Hello World !</h1>');
});

router.post('/exper', catchErrors(addExper));

router.get('/exper/:id', catchErrors(getExper));

router.get('/expers', catchErrors(getExpers));

export default router;