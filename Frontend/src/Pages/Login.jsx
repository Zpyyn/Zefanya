import { useEffect, useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useStateContext } from "../context/context";
import axiosClient from "./../axiosClient";

const Login = () => {
    const { token, setUsername, setToken } = useStateContext();

    if (token) {
        return <Navigate to="/admin" />;
    }

    const usernameRef = useRef();
    const passwordRef = useRef();

    const Submit = (ev) => {
    //   setGagal(false)
    //   setSalah(false)
        ev.preventDefault();
        const payload = {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        };
        axiosClient
            .post("/login", payload)
            .then(({ data }) => {
                setUsername(data.username);
                setToken(data.token);
            })
            .catch((eror) => {
              // if(){
              //   setsalah(true) 
              // }
                // setGagal(true);
                console.log(eror);
            });
    };

    return (
        <div className="flex justify-center items-center h-screen w-screen bg-cover lg:bg-[url('../public/img/LightBg.png')]">
            <div className="text-light md:w-6/12 w-full sm:h-4/6 bg-dark flex flex-col justify-center items-center sm:p-12 py-12 bg-[url('../public/img/DarkBg.png')]">
                <p className="judul text-center">Halaman Login</p>
                <p className="isi sm:w-96 text-center">
                    Harap masukkan Username Dan Password untuk Mengakses halaman
                    Admin
                </p>
                <form
                    onSubmit={Submit}
                    className="flex flex-col justify-center items-center"
                >
                    <div className=" flex flex-col mt-12">
                        <label>Username</label>
                        <input
                            ref={usernameRef}
                            type="text"
                            id="Username"
                            placeholder="Masukkan Username"
                            name="Username"
                            className="w-72 rounded-full p-1 px-2 bg-light text-dark focus:outline-blue focus:outline-light"
                        />
                    </div>

                    <div className=" flex flex-col mt-2">
                        <label>Password</label>
                        <input
                            minLength={8}
                            type="Password"
                            id="Password"
                            ref={passwordRef}
                            placeholder="Masukkan Password"
                            name="Password"
                            className=" w-72 rounded-full p-1 px-2 bg-light text-dark focus:outline-none focus:outline-light"
                        />
                        {/* {gagal && (
                          <p className="-mb-6">Tolong isi seluruh data yang diminta</p>
                        )}
                        {salah && (
                          <p className="-mb-6">Tolong isi seluruh data yang diminta</p>
                        )} */}
                    </div>

                    <button className=" bg-med hover:bg-yellow-950 px-12 py-1 mt-12 rounded-full text-lg">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
