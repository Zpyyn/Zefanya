import { useState, useEffect } from "react";
import Buttons from "../../Item/button";
const Informasi = () => {

  const[foto, setFoto]=useState(true)

  useEffect(()=>{

    const perubahan = setInterval(() => {
      setFoto((a)=>!a)
    }, 5000);

    return () => clearInterval(perubahan);
  },[])
  return (
    <div className="w-[100%] md:h-[560px] py-12 bg-no-repeat bg-cover bg-center lg:bg-[url('../public/img/DarkBg.png')] bg-dark flex flex-col justify-center items-center">
      <p className="judul text-light mb-8 ">Informasi Kost</p>
      <div className="grid sm:grid-cols-2 gap-12">

        <div className={`rounded bg-cover  lg:w-96 w-80 h-44 md:h-60   ${foto ? "bg-[url('../public/img/Kost.png')]" : "bg-[url('../public/img/Wc.jpg')]"}`}></div>

        <div className="text-light w-80 text-wrap">
          <p className="text-4xl font-medium">RP 1.250.000,00</p>
          <p className="isi mb-8 grid">
            Alamat: Ruteng, Tenda, Gang Israel, Kost Zevanya
            <span className="text-sm font-medium opacity-50 -mt-1">
              kamar mandi & dapur dalam 
            </span>
          </p>
          <Buttons url={"https://wa.me/62882020434005"} text={"Sewa Sekarang"} bg={"bg-med"} />
        </div>
      </div>
    </div>
  );
};

export default Informasi;
