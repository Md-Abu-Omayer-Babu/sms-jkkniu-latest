import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserContextProvider from "./context/UserContextProvider.jsx";
import { Toaster } from "react-hot-toast";

// pages
import {
  AboutDevelopers,
  DeptAdminPage,
  LoginPage,
  RegistrationForm,
  StoreManagerPage,
  RegisterPage
} from "./pages/pageIndex.js"
import { 
  ManagerHome,
  Profile,
  AddNewItem,
  Restock,
  StockCheck, 
  ManagerProcessOrder,
  OrderForm,
  RegisterHome,
  AdminHome,
  Preview,
  RegisterProcessOrder,
  Transactions

} from './components/index.js';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import Contact from './components/Contact/Contact.jsx';

const router = createBrowserRouter([
  {
    element:<App/>,
    children:[
      { path: "/", element: <LoginPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/developers", element: <AboutDevelopers /> },
      { path: "about", element: <AboutUs/> },
      {path: "/contact", element: <Contact/> },

      // Store Manager Page with Nested Routes
      {
        path: "/store-manager",
        element: <StoreManagerPage />, // Parent layout with <Outlet />
        children: [
          { path: "", element: <ManagerHome/>},
          {path:"process/:id", element:<ManagerProcessOrder />},
          {path:"preview/:id", element:<Preview />},
          { path: "profile", element: <Profile/> },
          { path: "add-item", element: <AddNewItem/> },
          { path: "stock-check", element: <StockCheck/> },
          { path: "restock", element: <Restock/> },
          { path: "register-new-user", element: <RegistrationForm/> },
          { path: "stock-check/transactions/:id", element: <Transactions/> },
        ],
      },
      {
        path: "/register",
        element: <RegisterPage />, // Parent layout with <Outlet />
        children: [
          { path: "", element: <RegisterHome/>},
          {path:"process/:id", element:<RegisterProcessOrder />},
          {path:"preview/:id", element:<Preview />},
          { path: "profile", element: <Profile/> },
        ],
      },
      {
        path: "/dept-admin",
        element: <DeptAdminPage />, // Parent layout with <Outlet />
        children: [
          { path: "", element: <AdminHome/>},
          { path: "profile", element: <Profile/> },
          {path:"preview/:id", element:<Preview />},
          { path: "order-now", element: <OrderForm/> },
        ],
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
      <Toaster position = "top-center"/>
    </UserContextProvider>
  </StrictMode>,
)
