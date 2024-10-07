import { createBrowserRouter } from "react-router-dom";
import AdminLauout from "../../layout/adminLayout/AdminLauout";
import AdminLogin from "../../pages/adminPages/AdminLogin";


export const adminRouter = createBrowserRouter([
    {
        element:<AdminLauout/>,
        children:[
            {path:"/admin/login",element:<AdminLogin/>}
        ]
    }
])