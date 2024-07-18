import { Navigate, NavLink, Outlet } from "react-router-dom";
import { useStateContext } from "../context/context";
import axiosClient from "../axiosClient";

const Admin = () =>{
    const {token,setToken,setUsername} = useStateContext();

    const logout= (evnt) =>{
        evnt.preventDefault();
        axiosClient.get('/logout')
        .then(({})=>{
            setUsername(null)
            setToken(null)
        })

    }
    if(!token){
        return <Navigate to='/login'/>
    }
    return(
        <div className="grid grid-cols-4  gap-0">
            <div className=" h-screen bg-dark p-12">
                <a href="#">
                <img src="/img/logo(Light).svg" alt=""/>
                </a>
                <ul className="text-light text-xl grid gap-10 mt-20">
                    <li>
                        <NavLink to='InfoKamar' className="flex gap-5 items-center rounded-full hover:bg-light hover:pl-4 duration-200 hover:text-dark">
                            <span className="material-symbols-outlined fill text-3xl">
                                room_preferences
                            </span>
                            Info Kamar
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='AkunAdmin' className="flex gap-5 items-center rounded-full hover:bg-light hover:pl-4 duration-200 hover:text-dark">
                            <span className="material-symbols-outlined fill text-3xl">
                                Shield_person
                            </span>
                            Akun Admin
                        </NavLink>
                    </li>



                    <li>
                        <a href="#" onClick={logout} className="flex gap-5 items-center mt-64 rounded-full hover:bg-light hover:pl-4 duration-200 hover:text-dark">
                            <span className="material-symbols-outlined fill text-3xl">
                                logout
                            </span>
                            Keluar
                        </a>
                    </li>

                    
                </ul>
            </div>
            <div className=" col-span-3">
                <Outlet/>
            </div>
        </div>
    )
}

export default Admin;