import React from 'react'

const Home = React.lazy(()=> import("../../pages/Home"))
const Products = React.lazy(()=> import("../../pages/Products"))

const routes = [
    {
        id:1,
        name:"Home",
        path:"/home",
        element:Home,
        exact:true
    },
    {
        id:2,
        name:"Products",
        path:"/products",
        element:Products
    }
];

export default routes;