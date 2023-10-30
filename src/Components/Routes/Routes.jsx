import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import DashboardMain from "../Dashboard/DashboardMain";
import AddProduct from "../Dashboard/Add Product/AddProduct";
import UpdateProduct from "../Dashboard/Update Product/UpdateProduct";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: '/',
          element: <Home></Home>
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
            element: <UpdateProduct></UpdateProduct>
          }
        ]
       
        
      
    }
  ]);

  export default router;