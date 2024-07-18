import { useRef} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axiosClient from "../../axiosClient";


const NewAdmin = () => {
    const navigate = useNavigate();
    const namaRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef();

    const Submit= (ev) =>{
        ev.preventDefault();
        const payload= {
          nama_asli: namaRef.current.value,
          username: usernameRef.current.value,
          password: passwordRef.current.value,
        }
        axiosClient.post('/admin',payload)
        .then(()=>{
          navigate('/admin/AkunAdmin')
        }).catch(eror=>{
          const response = eror.response;
          if(response && response.status ===422){
            console.log(response.data.errors);
          }
        })
      }

    return(
        <div className=" w-full text-dark">
            <div className=" bg-[#FAF5E8] m-12 drop-shadow-xl px-5 max-h-[85vh] overflow-auto relative">
                <div className=" sticky top-0 bg-[#FAF5E8] pt-5 pb-4">
                    <p className="title text-4xl font-bold">Buat Akun Admin</p>
                    <p className="">Buat Akun baru untuk admin</p>
                </div>
                    <div className="text-center">
                        <form onSubmit={Submit} className="flex flex-col text-dark gap-6 mt-2">
                            <div className="flex flex-col items-start">
                                <p className="text-md">Nama Asli</p>
                                <input
                                ref={namaRef}
                                type="text"
                                id="namaAsli"
                                placeholder="Masukkan Nama asli/nama pembuat"
                                name="Username"
                                className="w-full h-12 rounded p-1 px-2 bg-light text-dark focus:outline-blue focus:outline-light"
                                />
                            </div>
                            <div className="flex flex-col items-start">
                                <p className="text-md">Username <span className="text-[#a4a197] text-md align-baseline">*Yang digunakan untuk login</span></p>
                                <input
                                ref={usernameRef}
                                type="text"
                                id="Username"
                                placeholder="Masukkan Username"
                                name="Username"
                                className="w-full h-12 rounded p-1 px-2 bg-light text-dark focus:outline-blue focus:outline-light"
                                />
                            </div>

                            <div className="flex flex-col items-start">
                                <p className="text-md">Password</p>
                                <input
                                ref={passwordRef}
                                type="Password"
                                id="Password"
                                placeholder="Masukkan Password"
                                name="Password"
                                className="w-full h-12 rounded p-1 px-2 bg-light text-dark focus:outline-blue focus:outline-light"
                                />
                            </div>
                            <div className="flex gap-7">
                                <button className=" w-40 bg-dark hover:bg-yellow-950 px-12 py-1 mt-12 rounded-full text-lg text-light mb-10">
                                    Simpan
                                </button>
                                <NavLink to='/admin/AkunAdmin'>
                                    <button className=" w-40 bg-med hover:bg-yellow-950 px-12 py-1 mt-12 rounded-full text-lg text-light mb-10">
                                        Batal
                                    </button>
                                </NavLink>
                            </div>
                            
                        </form>
                    </div>
                
            </div>
        </div>
    )
}
export default NewAdmin