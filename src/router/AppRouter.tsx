import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@/pages/Home"
import App from '@/layout/App'


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
])

const AppRouter = () => <RouterProvider router={router} />

export default AppRouter