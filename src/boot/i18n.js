import { boot } from 'quasar/wrappers'
import { createI18n } from 'vue-i18n' //vue-i18n/index 를 넣을 경우 경고는 해결되나 문제점 보안 찾아보자.
import messages from 'src/i18n'

const i18n = createI18n({
  locale: 'en-US',
  messages
})

export default boot(({ app }) => {
  // Set i18n instance on app
  app.use(i18n)
})

export { i18n }
