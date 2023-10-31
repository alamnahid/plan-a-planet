import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import DashboardMain from "../Dashboard/DashboardMain";
import AddProduct from "../Dashboard/Add Product/AddProduct";
import UpdateProduct from "../Dashboard/Update Product/UpdateProduct";
import Updates from "../Dashboard/Update Product/Updates";
import DeleteProduct from "../Dashboard/Delete Product/DeleteProduct";
import Delete from "../Dashboard/Delete Product/Delete";
import Shop from "../Shop/Shop";
import ProductDetails from "../Product Details/ProductDetails";
import SemiCategorieShop from "../Shop/SemiCategorie Shop/SemiCategorieShop";
import CategorieShop from "../Shop/Categorie Shop/CategorieShop";


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