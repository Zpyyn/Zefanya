import { useState , useEffect } from "react";
import IconText from "../../Item/IconText";

const Perabotan = () => {
  const [Section, setSection] = useState(true);
  const [ButtonStatus, setButtonStatus] = useState(true);

  const toggleStatus = () => {
    setSection((a)=>!a);
    setButtonStatus((a)=>!a);
  };

  useEffect(()=>{

    const perubahan = setInterval(() => {
      setSection((a)=>!a)
      setButtonStatus((a)=>!a)
    }, 15000);

    return () => clearInterval(perubahan);
  },[])

  return (
    <div className="perabotan w-[100%] sm:h-[560px] py-12 bg-no-repeat bg-cover bg-center lg:bg-[url('../public/img/DarkBg.png')] bg-dark flex flex-col md:justify-center items-center">
      <p className="judul text-light">Fasilitas</p>
      <div className="text-light flex flex-col justify-center items-center">
        <button
          className={`flex gap-4 mb-2 w-fit rounded-full text-dark py-1 px-1 bg-light Button-${
            ButtonStatus ? "Nyala" : "Mati"
          }`}
          onClick={toggleStatus}
        >
          <p className="KTidur text-[14px] rounded-full py-1 px-3">Kamar Tidur</p>
          <p className="KMandi text-[14px] rounded-full py-1 px-3">Kamar Mandi</p>
        </button>

        <div className="items-center justify-center flex">

          <div className={`grid sm:grid-cols-2 gap-12 mt-10 ${Section ? "block" : "hidden"}`}>
          <div className="bg-[url('../public/img/Kost.png')] rounded bg-cover lg:w-96 w-80 h-44 md:h-60"/>
          <div className="">
            <div className="Spek Kamar pb-1 border-b-2 border-med">
              <p className="text-light text-2xl">Spesifikasi kamar</p>
              <div className="text-light gap-x-3 grid grid-cols-2">
                <IconText Icon={"door_open"} Text={"Ukuran:3x3"} />
                <IconText Icon={"Wifi"} Text={"Wifi Umum"} />
              </div>
            </div>
            <div className="Spek Kamar pt-2">
              <p className="text-light text-2xl">Perabotan Kamar</p>
              <div className="text-light gap-3 grid grid-cols-2">
                <IconText Icon={"Bed"} Text={"Kasur x1"} />
                <IconText Icon={"shelves"} Text={"Lemari x1"} />  
                <IconText Icon={"Chair"} Text={"Kursi x1"} />
                <IconText Icon={"skillet_cooktop"} Text={"Kompor x1"} />
                <IconText Icon={"table_restaurant"} Text={"Meja x1"} />
                <IconText Icon={"live_Tv"} Text={"TV x1"} />

              </div>
            </div>
          </div>
        </div>


          {/* Kamar Mandi */}
        <div className={` grid sm:grid-cols-2 gap-12 mt-10 ml-3 ${Section ? "hidden" : "block"}`}>
          <div className=" w-screen sm:w-auto justify-center items-center flex">
          <div className="bg-[url('../public/img/Wc.jpg')] rounded bg-cover lg:w-96 w-10/12 h-44 md:h-60  " />
          </div>
          <div className="">
            <div className="">
              <p className="text-light text-2xl">Perabotan Kamar Mandi</p>
              <div className="text-light gap-3 grid grid-cols-2 mt-2">
                <IconText Icon={"chair_alt"} Text={"Kloset x1"} />
                <IconText Icon={"Shower"} Text={"Shower x1"} />
                <IconText Icon={"Heat"} Text={"Pemanas Air x1"} />
                <IconText Icon={"Faucet"} Text={"Wastafel x1"} />
                <IconText Icon={"cleaning_bucket"} Text={"Ember x1"} />

              </div>
            </div>
          </div>
        </div>
        </div>
          {/* Kamar tidur */}
        
      </div>


    </div>
  );
};

export default Perabotan;
