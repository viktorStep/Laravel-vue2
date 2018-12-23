import store from '~/store'

export default async (to, from, next) => {

  if (!store.getters['auth/check']) {
  next({ name: 'login' })
  } else if(store.getters['auth/check'] && store.getters['auth/user'].role == 'admin') {
    next({ name: 'admin.home'})
  }else{
    next()
  }
}
