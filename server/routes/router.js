import Router from 'express'
import user_controller from '../controllers/user_controller.js'
import account_controller from '../controllers/account_controller.js'
import product_controller from '../controllers/product_controller.js';

const router = new Router();

router.get('/user.get/:user_id', user_controller.userGet)
router.get('/user.getRole', user_controller.getRole)
router.get('/user.ordersGet/:user_id', user_controller.ordersGet)
router.post('/user.changeUserInfo', user_controller.changeUserInfo)
router.post('/user.buy', user_controller.buy)

// 
router.post('/account.registration/', account_controller.registration)
router.post('/account.login/', account_controller.login)

router.get('/products.get/:products_caregory', product_controller.productsGet)
router.get('/products.popularProductGet/', product_controller.popularProductGet)
router.get('/products.getById/:id', product_controller.productGetById)

export default router;