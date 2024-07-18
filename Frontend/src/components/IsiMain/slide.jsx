import Buttons from "../../Item/button";

const Slide = ({ slideactivator }) => {
  return (
    <div
      className={`transition-all block z-10 fixed right-[-100%]  ease-in-out delay-150 top-0 bg-white h-[100vh] w-[15rem] md:hidden btn-${slideactivator}`}
    >
      <ul className="slidebar flex-col mt-[74px] p-5">
        <li>
          <a href="#" className="text-med text-sm flex md:hidden">
            Profil
          </a>
        </li>
        <li>
          <a href="#Informasi" className="text-med text-sm flex md:hidden">
            Informasi
          </a>
        </li>
        <li>
          <a href="#Lokasi" className="text-med text-sm flex md:hidden">
            Alamat
          </a>
        </li>
        <li>
          <a href="#Fasilitas" className="text-med text-sm flex md:hidden">
            Fasilitas
          </a>
        </li>
        <li>
          <a href="#Footer" className="text-med text-sm flex md:hidden">
            Kontak
          </a>
        </li>
        <li className="mt-5">
          <Buttons
            url={
              "https://www.figma.com/file/gIBi0hJiUNMzUM5yizgrCh/Untitled?type=design&node-id=461-14&mode=design&t=eTBdsi0Trj9oxzo5-0"
            }
            text={"Sewa Sekarang"}
            bg={"bg-dark"}
          />
        </li>
      </ul>
    </div>
  );
};
export default Slide;
