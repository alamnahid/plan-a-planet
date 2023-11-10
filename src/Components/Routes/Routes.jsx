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
import MyCart from "../My cart/MyCart";
import DashboardHome from "../Dashboard/Dashboard home/DashboardHome";
import About from "../About/About";
import Contact from "../Contact/Contact";
import ErrorElement from "../Error Page/ErrorElement";
import PrivateRoute from "../Root/PrivateRoute";
import Blogs from "../Blogs/Blogs";
import Invoice from "../My cart/Invoice";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorElement></ErrorElement>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/shop',
          element: <Shop></Shop>,
          // loader: ()=>fetch('http://localhost:5000/plants')
        },
        {
            path: '/about',
            element: <About></About>
        },
        {
            path: '/contact',
            element: <Contact></Contact>
        },
        {
          path: '/productdetails/:id',
          element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
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
        },
        {
          path: '/cart',
          element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '/invoice',
          element: <PrivateRoute><Invoice></Invoice></PrivateRoute>
        }
      ]
    },

    {
      
        path: 'dashboard',
        element: <PrivateRoute><DashboardMain></DashboardMain></PrivateRoute>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
          {
            path: 'addproduct',
            element: <AddProduct></AddProduct>
          },
          {
            path: 'dashboardhome',
            element: <DashboardHome></DashboardHome>,
            loader: ()=>fetch('http://localhost:5000/plants')
          },
          {
            path: 'hotsale',
            element: <AddHotSaleProduct></AddHotSaleProduct>
          },
          {
            path: 'updateproduct',
            element: <UpdateProduct></UpdateProduct>,
            // loader: ()=>fetch('http://localhost:5000/plants')
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