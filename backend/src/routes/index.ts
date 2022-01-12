import { Router } from 'express'
import authRoutes from './auth'
import usersRoutes from './users'
import productsRoutes from './products'

const router = Router()

router.get("/", async (req, res) => {
  res.send("If you're reading this you're home!  - api root");
});

router.use('/', authRoutes)
router.use('/', usersRoutes)
router.use('/', productsRoutes)

export default router