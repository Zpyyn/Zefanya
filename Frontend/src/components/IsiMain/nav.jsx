import { useState } from "react";
import Buttons from "../../Item/button";
import Slide from "./slide";

const Navbar = () => {
  // trigger untuk munculkan slidebar
  const [getSlidebar, setSlidebar] = useState(false);
  const HamburgerMenu = () => {
    setSlidebar((getSlidebar) => !getSlidebar);
  };
  let toggleclass = getSlidebar ? "active" : false;

  return (
    <div className="overflow-hidden relative">
      <nav className="flex z-50 fixed justify-between px-9 lg:px-0 lg:justify-around bg-light align-middle items-center h-[74px] w-[100%]">
        <ul className=" gap-6 lg:gap-14 items-center flex shrink-0">
          <li>
            <a href="#">
              <img src="/img/logo.svg" alt="" className="w-24 sm:w-auto" />
            </a>
          </li>
          <li>
            <a href="#" className="text-dark text-sm hidden md:flex ">
              Beranda
            </a>
          </li>
          <li>
            <a href="#Informasi" className="text-dark text-sm hidden md:flex">
              Informasi
            </a>
          </li>
          <li>
            <a href="#Lokasi" className="text-dark text-sm hidden md:flex">
              Alamat
            </a>
          </li>
          <li>
            <a href="#Fasilitas" className="text-dark text-sm hidden md:flex">
              Fasilitas
            </a>
          </li>
          <li>
            <a href="#Footer" className="text-dark text-sm hidden md:flex">
              Kontak
            </a>
          </li>
        </ul>
        <div className=" flex items-center gap-6">
          <div className="hidden sm:flex">
            <Buttons
              url={
                "https://wa.me/62882020434005"
              }
              text={"Sewa Sekarang"}
              bg={"bg-dark"}
            />
          </div>
          <div className=" flex md:hidden items-center">
            <button onClick={HamburgerMenu} className="mt-2">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </nav>
      <Slide slideactivator={toggleclass} />
    </div>
  );
};

export default Navbar;
