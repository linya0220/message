import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Table from './views/home/Table.vue'
import Form from './views/home/Form.vue'
import user from './views/home/user.vue'
import Page4 from './views/captain/Page4.vue'
import Page5 from './views/captain/Page5.vue'
import tableLayout from './views/captain/tableLayout.vue'
import Page6 from './views/sale/Page6.vue'
import echarts from './views/customer/echarts.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    { 
        path: '/', 
        component: Home,
        name:'',
        hidden:true,
        children:[ { path: '/main', component: Main, name: 'index', hidden: true }] 
    },
    {
        path: '/home',
        component: Home,
        redirect:'/home/table',
        name: '首页',
        iconCls: 'fa fa-home',//图标样式class
        children: [
            { path: 'table', component: Table, name: 'Table',  },
            { path: 'form', component: Form, name: 'Form',  },
            { path: 'user', component: user, name: '列表' , },
        ]
    },
    {
        path: '/captain',
        component: Home,
        name: '团队长管理',
        iconCls: 'fa fa-hand-o-right',
        children: [
            { path: 'page4', component: Page4, name: '页面4' },
            { 
                path: '/captain/page5', 
                component: tableLayout, 
                redirect:'/captain/page5/table',
                name: '页面5' ,
                children:[
                     { path: 'table', component: Table, name: 'Table' },
                     { path: 'form', component: Form, name: 'Form' },
                     { path: 'user', component: user, name: '列表' },
                ]
            }
        ]
    },
    {
        path: '/sale',
        component: Home,
        name: '业务员管理',
        iconCls: 'fa fa-assistive-listening-systems',
        children: [
            { path: 'page6', component: Page6, name: '导航三' },
            { path: 'page7', component: Page6, name: '导航三' }
        ]
    },
    {
        path: '/customer',
        component: Home,
        name: '客户管理',
        iconCls: 'fa fa-blind',
        children: [
            { path: 'echarts', component: echarts, name: 'echarts' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;