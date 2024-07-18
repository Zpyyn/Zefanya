import { createBrowserRouter } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";
import Admin from "./Pages/Admin";
import HalamanUtama from "./components/Admin/HalamanUtama";
import InfoKamar from "./components/Admin/InfoKamar";
import AkunAdmin from "./components/Admin/AkunAdmin";
import EditInfo from "./components/Admin/EditInfo";
import NewAdmin from "./components/Admin/NewAdmin";


const router = createBrowserRouter ([
    {
        path: '/',
        element: <Homepage/>
    },
    {
        path:'/login',
        element: <Login/>
    },
    {
        path:'/admin',
        element: <Admin/>,
        children:[
            {
                path: '/admin',
                element: <InfoKamar/>
            },
            {
                path: '/admin/InfoKamar',
                element: <InfoKamar/>
            },
            {
                path: '/admin/InfoKamar/:id',
                element: <EditInfo key="editInfo"/>
            },
            {
                path: '/admin/AkunAdmin',
                element: <AkunAdmin/>,
            },
            {
                path: '/admin/AkunAdmin/NewAdmin',
                element: <NewAdmin key="userCreate"/>
            }
        ]
  },
]);

export default router;  