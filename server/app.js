import express, { response } from 'express'
import router from './routes/router.js'
import jwt from 'jsonwebtoken'
import config from './config.js'

const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use((req, res, next) =>{
	if(req.headers['x-access-token']){
		try {
			jwt.verify(req.headers['x-access-token'], config.SERCRET_KEY)
			next()
		} catch (error) {
			res.status(401).send({error:'Неверный токен'});
		}
	}else {
		next()
	}
})
app.use('/api', router);

app.listen(port, () => {
  	console.log(`Example app listening on port ${port}`)
})