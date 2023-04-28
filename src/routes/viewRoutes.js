import { Router } from 'express';

const router = Router();

router.get('/realtimeproducts', (req, res) => {
  const opts = {
    pageTitle: 'Realtimeproducts HomePage',
  };

  res.render('realTimeProducts', opts);
});

export default router;
