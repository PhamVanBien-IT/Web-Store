import { createRouter, createWebHistory } from 'vue-router'
import MenProducts from '@/views/product/MenProducts';
import WomenProducts from '@/views/product/WomenProducts';
import SaleProducts from '@/views/product/SaleProducts';
import ProductDetail from '@/views/product/ProductDetail';
import TheAbout from '@/views/TheAbout';
import TheLogin from '@/views/account/TheLogin';
import TheRegister from '@/views/account/TheRegister';
import TheCart from '@/views/cart/TheCart';
import TheCheckOut from '@/views/cart/TheCheckOut';
import Home from '@/views/Home';
import Dashboard from '@/admin/Dashboard';
import TheStaff from '@/admin/TheStaff';
import TheUser from '@/admin/TheUser';
import TheProduct from '@/admin/product/TheProduct';
import TheOrder from '@/admin/TheOrder';
import TheInternal from '@/admin/TheInternal';
import TheSalary from '@/admin/TheSalary';
import TheSales from '@/admin/TheSales';
import TheCalendar from '@/admin/TheCalendar';
import TheSystem from '@/admin/TheSystem';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'TheAbout',
        component: TheAbout
    },
    {
        path: '/men-products',
        name: 'MenProducts',
        component: MenProducts
    },
    {
        path: '/women-products',
        name: 'WomenProducts',
        component: WomenProducts
    },
    {
        path: '/sale-products',
        name: 'SaleProducts',
        component: SaleProducts
    },
    {
        path: '/product-detail/:id',
        name: 'ProductDetail',
        component: ProductDetail
    },
    {
        path: '/login',
        name: 'TheLogin',
        component: TheLogin
    },
    {
        path: '/register',
        name: 'TheRegister',
        component: TheRegister
    },
    {
        path: '/cart/:id',
        name: 'TheCart',
        component: TheCart
    },
    {
        path: '/checkout',
        name: 'TheCheckOut',
        component: TheCheckOut
    },
    {
        path: '/product-admin',
        name: 'TheProduct',
        component: TheProduct
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/staff-admin',
        name: 'TheStaff',
        component: TheStaff
    },
    {
        path: '/user-admin',
        name: 'TheUser',
        component: TheUser
    },
    {
        path: '/order-admin',
        name: 'TheOrder',
        component: TheOrder
    },
    {
        path: '/internal-admin',
        name: 'TheInternal',
        component: TheInternal
    },
    {
        path: '/salary-admin',
        name: 'TheSalary',
        component: TheSalary
    },
    {
        path: '/sales-admin',
        name: 'TheSales',
        component: TheSales
    },
    {
        path: '/calendar-admin',
        name: 'TheCalendar',
        component: TheCalendar
    },
    {
        path: '/system-admin',
        name: 'TheSystem',
        component: TheSystem
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router