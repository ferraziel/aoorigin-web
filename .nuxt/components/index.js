export { default as Btn } from '../..\\components\\Btn.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as MessageBox } from '../..\\components\\MessageBox.vue'
export { default as Nav } from '../..\\components\\Nav.vue'
export { default as RegisterForm } from '../..\\components\\RegisterForm.vue'

export const LazyBtn = import('../..\\components\\Btn.vue' /* webpackChunkName: "components_Btn" */).then(c => c.default || c)
export const LazyFooter = import('../..\\components\\Footer.vue' /* webpackChunkName: "components_Footer" */).then(c => c.default || c)
export const LazyMessageBox = import('../..\\components\\MessageBox.vue' /* webpackChunkName: "components_MessageBox" */).then(c => c.default || c)
export const LazyNav = import('../..\\components\\Nav.vue' /* webpackChunkName: "components_Nav" */).then(c => c.default || c)
export const LazyRegisterForm = import('../..\\components\\RegisterForm.vue' /* webpackChunkName: "components_RegisterForm" */).then(c => c.default || c)
