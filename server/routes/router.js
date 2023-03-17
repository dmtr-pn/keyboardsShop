import Router from 'express'
import user_controller from '../controllers/user_controller.js'
import account_controller from '../controllers/account_controller.js'
import product_controller from '../controllers/product_controller.js';

const router = new Router();

router.get('/user.get/:user_id', user_controller.userGet)
router.get('/user.getRole', user_controller.getRole)
router.post('/user.changeUserInfo', user_controller.changeUserInfo)

// 
router.post('/account.registration/', account_controller.registration)
router.post('/account.login/', account_controller.login)

router.get('/products.get/:products_caregory', product_controller.productsGet)

export default router;