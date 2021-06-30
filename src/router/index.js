import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
// const routes = [
//   // TODO
// ]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
