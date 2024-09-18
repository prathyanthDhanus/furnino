import { createBrowserRouter } from "react-router-dom";
import AdminLauout from "../../layout/adminLayout/AdminLauout";
import AdminLogin from "../../pages/adminPages/adminLogin";


export const adminRouter = createBrowserRouter([
    {
        element:<AdminLauout/>,
        children:[
            {path:"/admin/login",element:<AdminLogin/>}
        ]
    }
])