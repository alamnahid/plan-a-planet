import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import DashboardMain from "../Dashboard/DashboardMain";
import AddProduct from "../Dashboard/Add Product/AddProduct";
import UpdateProduct from "../Dashboard/Update Product/UpdateProduct";
import Updates from "../Dashboard/Update Product/Updates";
import DeleteProduct from "../Dashboard/Delete Product/DeleteProduct";
// import Delete from "../Dashboard/Delete Product/Delete";
import Shop from "../Shop/Shop";
import ProductDetails from "../Product Details/ProductDetails";
import SemiCategorieShop from "../Shop/SemiCategorie Shop/SemiCategorieShop";
import CategorieShop from "../Shop/Categorie Shop/CategorieShop";
import Login from "../Login Signup/Login";
import Signup from "../Login Signup/Signup";
import AddHotSaleProduct from "../Dashboard/Add Hot Sale Product/AddHotSaleProduct";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/shop',
          element: <Shop></Shop>,
          loader: ()=>fetch('http://localhost:5000/plants')
        },
        {
          path: '/productdetails/:id',
          element: <ProductDetails></ProductDetails>,
          loader: ({params}) =>fetch(`http://localhost:5000/plants/${params.id}`)
        },
        {
          path: '/semishop/:name',
          element: <SemiCategorieShop></SemiCategorieShop>,
          loader: ()=>fetch('http://localhost:5000/plants')
          
        },
        {
          path: '/categorieshop/:name',
          element: <CategorieShop></CategorieShop>,
          loader: ()=>fetch('http://localhost:5000/plants')
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <Signup></Signup>
        }
      ]
    },

    {
      
        path: 'dashboard',
        element: <DashboardMain></DashboardMain>,
        children: [
          {
            path: 'addproduct',
            element: <AddProduct></AddProduct>
          },
          {
            path: 'hotsale',
            element: <AddHotSaleProduct></AddHotSaleProduct>
          },
          {
            path: 'updateproduct',
            element: <UpdateProduct></UpdateProduct>,
            loader: ()=>fetch('http://localhost:5000/plants')
          },
          {
            path: 'updatesproduct/:id',
            element: <Updates></Updates>,
            loader: ({params})=>fetch(`http://localhost:5000/plants/${params.id}`)
          },
          {
            path: 'deleteproduct',
            element: <DeleteProduct></DeleteProduct>,
            loader: ()=>fetch('http://localhost:5000/plants')
          },
        ]
       
        
      
    }
  ]);

  export default router;