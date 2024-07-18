import Informasi from '../../components/IsiMain/infokos'
import Lokasi from '../../components/IsiMain/Lokasi'
import Perabotan from '../../components/IsiMain/Perabotan'
const   Main = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-[#FAF5E8] w-screen sm:-mt-36 md:w-[90%] lg:w-[70%] flex flex-col justify-center -mt-20 drop-shadow-xl rounded-lg">
        <div className="mt-3 -mb-10 hidden sm:flex flex-col items-center justify-center">
          <a
            className="flex flex-col items-center justify-center"
            href="#Informasi"
          >
            <button className="bg-med rounded-full h-8 w-8">
              <span className="material-symbols-outlined text-white pt-1 text-3qxl">
                arrow_drop_down
              </span>
            </button>

            <p>Swipe ke bawah untuk detail</p>
          </a>
        </div>
        <div id="Informasi" className="sm:pt-20">
          <Informasi />
        </div>
        <div id="Lokasi" className="">
          <Lokasi />
        </div>
        <div id="Fasilitas" className="">
          <Perabotan />
        </div>
      </div>
    </div>
  );
};

export default Main;
