import store from '~/store'

export default (to, from, next) => {
  console.log('guest5')
  if (store.getters['auth/check']) {
    next({ name: 'home' })
  } else {
    next()
  }
}
