import Buttons from "../../Item/button";

const HeroSec = () => {
  return (
    <div id="Hero" className="w-[ 100%] h-[110vh] sm:h[100vh] bg-no-repeat bg-cover bg-[url('../public/img/Kost.png')] items-center justify-items-center grid text-center">
      <div className="text">
        <p className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl title text-med">
          Kost Eksklusif Ruteng
        </p>
        <div className="items-center justify-center flex w-[100%]">
          <div className="border-2 w-[15%] sm:w-[20%]  border-med" />
          <p className="text-lg md:text-3xl mx-5">
            Nyaman <span className="text-med">&</span> Strategis
          </p>
          <div className="border-2 w-[15%] sm:w-[20%]  border-med" />
        </div>
        <div className="flex justify-center m-5 gap-7">   
          <Buttons
          url={"https://wa.me/62882020434005"}
          text={"Sewa Sekarang"}
          bg={"bg-dark"}
          />
          <Buttons
          url={"#Footer"}
          text={"Kontak"}
          bg={"bg-med"}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSec;
