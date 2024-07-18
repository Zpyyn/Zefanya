import IconText from "../../Item/IconText";

const Lokasi = () => {
  return (
    <div
      id="Lokasi"
      className="w-[100%] md:h-[495px] py-12 bg-no-repeat bg-center bg-cover lg:bg-[url('../public/img/LightBg.png')] flex flex-col justify-center items-center"
    >
      <p className="judul -mb-2 text-med">Detail Alamat</p>
      <p className="flex w-60 text-center sm:w-fit md:text-xl items-center">
        <span className="material-symbols-outlined fill hidden sm:block">
          location_on 
        </span>
        Ruteng, Tenda, Gang Israel, Kost Zevanya
      </p>

      <div className="grid sm:flex flex-row-reverse gap-5 lg:gap-24 justify-center sm:mt-8">
        <div className="text-light">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2345.648899549669!2d120.47184531139202!3d-8.606030891614271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2db375a272dac0f1%3A0x78c2ca69588e71d8!2sRuteng%20Tenda!5e0!3m2!1sid!2sid!4v1712929536264!5m2!1sid!2sid"
            className="rounded lg:w-96 w-80 h-44 md:h-60 drop-shadow-2xl"
            loading="lazy"
          ></iframe>
        </div>

        <div className="text-med w-50% text-wrap grid justify-center sm:block">
          <p className="text-med font-bold text-2xl px-2 h-fit w-fit rounded ">
            Tempat Terdekat
          </p>
          <div className="gap-3 mt-4 grid ">
            <IconText
              Icon={"restaurant_menu"}
              Text={"Depot M3Z Wong Solo"}
              Tambahan={"0.5 KM"}
              TextColor={"dark"}
            />
            <IconText
              Icon={"school"}
              Text={"MAN 2 Manggarai"}
              Tambahan={"0.3 KM"}
              TextColor={"dark"}
            />
            <IconText
              Icon={"church"}
              Text={"Gereja Paroki S. Maria"}
              Tambahan={"0.5 KM"}
              TextColor={"dark"}
            />
            <IconText
              Icon={"mosque"}
              Text={"Masjid Batturahman"}
              Tambahan={"0.5 KM"}
              TextColor={"dark"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lokasi;
