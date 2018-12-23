const Welcome = () => import('~/pages/welcome').then(m => m.default || m)
const Login = () => import('~/pages/auth/login').then(m => m.default || m)
const Register = () => import('~/pages/auth/register').then(m => m.default || m)
const PasswordEmail = () => import('~/pages/auth/password/email').then(m => m.default || m)
const PasswordReset = () => import('~/pages/auth/password/reset').then(m => m.default || m)
const NotFound = () => import('~/pages/errors/404').then(m => m.default || m)

const Home = () => import('~/pages/home').then(m => m.default || m)
const Settings = () => import('~/pages/settings/index').then(m => m.default || m)
const SettingsProfile = () => import('~/pages/settings/profile').then(m => m.default || m)
const SettingsPassword = () => import('~/pages/settings/password').then(m => m.default || m)
const NewPassword = () => import('~/pages/settings/new').then(m => m.default || m)

const Admin = () => import('~/pages/admin/index').then(m => m.default || m)
const AdminProfile = () => import('~/pages/admin/profile').then(m => m.default || m)
const AdminLogin = () => import('~/pages/admin/login').then(m => m.default || m)
const AdminPassword = () => import('~/pages/admin/password').then(m => m.default || m)
const AdminHome = () => import('~/pages/admin/home').then(m => m.default || m)

export default [
  { path: '/', name: 'welcome', component: Welcome },

  { path: '/login', name: 'login', component: Login },
  { path: '/register', name: 'register', component: Register },
  { path: '/password/reset', name: 'password.request', component: PasswordEmail },
  { path: '/password/reset/:token', name: 'password.reset', component: PasswordReset },

  { path: '/home', name: 'home', component: Home },
  { path: '/settings',
    component: Settings,
    children: [
      { path: '', redirect: { name: 'settings.profile' } },
      { path: 'profile', name: 'settings.profile', component: SettingsProfile },
      { path: 'password', name: 'settings.password', component: SettingsPassword },
      { path: 'new', name: 'settings.new', component: NewPassword }
    ] },
 { path: '/admin',
    component: Admin,
    children: [
      { path: '', redirect: { name: 'admin.login' } },
      { path: 'home', name: 'admin.home', component: AdminHome },
      { path: 'login', name: 'admin.login', component: AdminLogin },
      { path: 'profile', name: 'admin.profile', component: AdminProfile },
      { path: 'password', name: 'admin.password', component: AdminPassword }
    ] },

  { path: '*', component: NotFound }
]
