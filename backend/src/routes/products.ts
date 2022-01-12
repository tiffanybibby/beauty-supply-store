import { Router } from 'express'
import * as controllers from '../controllers/products'
import restrict from '../helpers/restrict'

const router = Router()

router.get('/products', controllers.getProducts)
router.get('/product/:id', controllers.getProduct)
router.post('/products', restrict, controllers.createProduct)
router.put('/product/:id', restrict, controllers.updateProduct)
router.delete('/product/:id', restrict, controllers.deleteProduct)

export default router