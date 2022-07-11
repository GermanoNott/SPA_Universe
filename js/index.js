import { Router } from './router.js'
import { Background } from './background.js'

Background()
const router = new Router()

router.add('/', '/pages/home.html')
router.add('/universe', '/pages/universe.html')
router.add('/explore', '/pages/explore.html')
router.add(404, '/pages/404.html')

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()
