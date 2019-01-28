import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router' 
import PersonaGrilla from './assets/components/tables/personaGrilla'
import AutomotorGrilla from './assets/components/tables/automotorGrilla'
import MotovehiculoGrilla from './assets/components/tables/motovehiculoGrilla'
import home from './assets/components/home.vue'
import Layout from './assets/components/shared/layout' 
import Botonera from './assets/components/shared/botonera' 
import FormularioPersona from './assets/components/forms/formularioPersona'


//const Natal instance for
const nfComponents = window.NF.superOptions.components;
const nfDirectives = window.NF.superOptions.directives;

for(var propertyName in nfDirectives) {
  Vue.directive(propertyName, nfDirectives[propertyName]);
 }

for(var propertyName in nfComponents) {
  Vue.component(propertyName, nfComponents[propertyName]);
 }
window.NF.vm= new NF(new Vue());

 Vue.component('app-botoneraTabla',Botonera);
 Vue.component('app-layout',Layout);
 Vue.component('app-formularioPersona',FormularioPersona);
 Vue.use(VueRouter);

const routes = [
  {path:'/',component:home},
  {path:'/home',component:home},
  {path:'/PersonaList',component: PersonaGrilla},
  {path:'/AutomotorList',component:AutomotorGrilla},
  {path:'/MotovehiculoList',component:MotovehiculoGrilla} 
]


const router=new VueRouter({
  routes,
  mode:'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

