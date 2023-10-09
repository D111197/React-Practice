import React , {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter , Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About.js";
import Contactus from "./components/Contactus";
import Error from "./components/Error";
import Hotelmenu from "./components/Hotelmenu";
import Shimmer from "./components/Shimmer";


const Applayout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet/>
    </div>
  );
};

const Grocery = lazy(() => import("./components/Grocery"));

const appRouter = createBrowserRouter([
  {
   path: "/",
   element: <Applayout/>,
   children: [
    {
      path: "/",
  
      element:<Body/>, 
    }, 
    {
      path: "/About",
  
      element:<About/>, 
    }, 
  
    {
      path: "/Contact",
   
      element: <Contactus />
     },
     {
      path: "/hotels/:hotId",
   
      element: <Hotelmenu/>
     },
     {
      path: "/grocery",
   
      element: <Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
     },
   ],
   errorElement:<Error/>,
}, 
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/> );
