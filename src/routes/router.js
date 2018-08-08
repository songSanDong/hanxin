import VueRouter from 'vue-router';
import Vue from 'vue';
// 导入组件
import HeroesList from '../views/heroes/List.vue';
import EquipsList from '../views/equips/List.vue';
import WeaponsList from '../views/weapons/List.vue';
import HeroesAdd from '../views/heroes/Add.vue';
// 注册VueRouter插件
Vue.use(VueRouter);
//创建路由  路由规则
var router = new VueRouter({
    // 配置激活的类样式
  linkExactActiveClass: 'active',
  routes: [
    { path: '/', redirect: '/heroes' },
    { name: 'heroes', path: '/heroes', component: HeroesList },
    { name: 'heroadd', path: '/heroes/add', component: HeroesAdd },
    { name: 'equips', path: '/equips', component: EquipsList },
    { name: 'weapons', path: '/weapons', component: WeaponsList }
  ]
});
// 模块中导出路由对象
export default router;
