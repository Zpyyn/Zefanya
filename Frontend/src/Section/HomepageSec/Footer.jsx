const Footer = () => {
  return (
    <div className="" id="Footer">
      <div className="mt-40 w-[100%] bg-dark">
        <div className="grid text-light p-10 md:pl-20">
          <div className="grid sm:grid-cols-2">
            <div className="">
              <p className="text-2xl font-bold">Menu Utama</p>
              <ul className=" flex flex-col text-lg gap-4 font-thin mt-5">
                <li>
                  <a href="#" className="font-normal">Profil</a>
                </li>
                <li>
                  <a href="#Informasi" className="font-normal">Informasi Kos</a>
                </li>
                <li>
                  <a href="#Lokasi" className="font-normal">Detail Alamat</a>
                </li>
                <li>
                  <a href="#Fasilitas" className="font-normal">Fasilitas</a>
                </li>
              </ul>
            </div>
            <div className="mt-12 sm:mt-0">
              <p className="text-2xl font-semibold">Kontak</p>
              <ul className=" flex flex-col md:text-lg gap-4 mt-5 justify-center">
                <li>
                  <a href="" className="font-normal">
                    <span className="inline-block align-middle bg-light text-dark fill material-symbols-outlined rounded-full p-1 mr-4">call</span>09482586574 (Ibu Kos)
                  </a>
                </li>
                <li>
                  <a href="" className="font-normal">
                    <span className="inline-block align-middle bg-light text-dark fill material-symbols-outlined rounded-full p-1 mr-4">call</span>09482586574 (pak kos)
                  </a>
                </li>
                <li>
                  <a href="" className="font-normal">
                    <span className="inline-block align-middle bg-light text-dark fill material-symbols-outlined rounded-full p-1 mr-4">call</span>09482586574 (Penjaga kos)
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-12 text-2xl font-bold">Zefanya Kost Ruteng</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
