import { createApp } from 'vue'
import 'lib-flexible/flexible'
import router from './router'
import GshopHeader from './components/GshopHeader/GshopHeader'

import App from './App.vue'

createApp(App)
  .use(router)
  .component('GshopHeader',GshopHeader)
  .mount('#app')

// createApp(App).use(router).mount('#app')
// new Vue({
// //   el: '#app',
// //   components: {App},
// //   template: '<App />',
// //   router
// // })
