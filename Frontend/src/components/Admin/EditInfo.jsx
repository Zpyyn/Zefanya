import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams, } from "react-router-dom"
import axiosClient from "../../axiosClient";

const EditInfo = () => {
    const {id}= useParams();
    const navigate = useNavigate();
    const [info ,setInfo]= useState({
        id: null,
        no_kamar: "",
        terisi:0,
        penghuni:"",
        no_telp:"",

    });
    const [loading,setLoading]= useState(false);
    useEffect(()=>{
        setLoading(true)
        axiosClient.get(`/kamar/${id}`)
        .then(({data}) => {
            setLoading(false)
            setInfo(data.data)
        })
        .catch(()=>{
            setLoading(false)
        })
    }, [])

    const Submit = ev =>{
        ev.preventDefault()
        axiosClient.put(`/kamar/${info.id}`,info)
        .then(({data})=>{
            console.log('Update successful:', data);
            navigate('/admin/InfoKamar')
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return(
        <div className=" w-full text-dark">
            <div className=" bg-[#FAF5E8] m-12 drop-shadow-xl px-5 max-h-[85vh] overflow-auto relative">
                <div className=" sticky top-0 bg-[#FAF5E8] pt-5 pb-4">
                    <p className="title text-4xl font-bold">Ubah info kamar {info.no_kamar}</p>
                    <p className="">Buat Akun baru untuk admin</p>
                </div>
                    <div className="text-center">
                        <form onSubmit={Submit} className="flex flex-col text-dark gap-6 mt-2">
                            <div className="flex flex-col items-start">
                                <p className="text-md">Status</p>
                                <select
                                value={info.terisi}
                                onChange={ev => setInfo({ ...info, terisi: ev.target.value })}
                                className="w-full h-12 rounded p-1 px-2 bg-light text-dark focus:outline-blue focus:outline-light"
                            >
                                <option value={0}>Kosong</option>
                                <option value={1}>Terisi</option>
                            </select>
                            </div>
                            <div className="flex flex-col items-start">
                                <p className="text-md">Penghuni <span className="text-[#a4a197] text-md align-baseline">*Yang digunakan untuk login</span></p>
                                <input
                                value={info.penghuni}
                                onChange={ev => setInfo({...info, penghuni: ev.target.value})}
                                type="text"
                                id="Penghuni"
                                placeholder="Masukkan Nama Penghuni"
                                name="Username"
                                className="w-full h-12 rounded p-1 px-2 bg-light text-dark focus:outline-blue focus:outline-light"
                                />
                            </div>

                            <div className="flex flex-col items-start">
                                <p className="text-md">No. Telephone</p>
                                <input
                                maxLength={13}
                                minLength={11}
                                value={info.no_telp}
                                onChange={ev => setInfo({...info, no_telp: ev.target.value})}
                                type="text"
                                id="No_telp"
                                placeholder="Masukkan Nomor Telephone"
                                name="Password"
                                className="w-full h-12 rounded p-1 px-2 bg-light text-dark focus:outline-blue focus:outline-light"
                                />
                            </div>
                            <div className="flex gap-3  ">
                                <button className=" w-40 bg-dark hover:bg-yellow-950 px-12 py-1 mt-12 rounded-full text-lg text-light mb-10">
                                    Simpan
                                </button>
                                <NavLink to='/admin/infoKamar'>
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
export default EditInfo