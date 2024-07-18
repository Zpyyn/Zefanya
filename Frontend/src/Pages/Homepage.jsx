import HeroSec from "../Section/HomepageSec/Herosec";
import Navbar from "../components/IsiMain/nav";
import Main from "../Section/HomepageSec/Main";
import Footer from "../Section/HomepageSec/Footer";

const Homepage = () => {
  return (
    <div className="">
      <Navbar />
      <HeroSec />
      <Main />
      <Footer />
    </div>
  );
};

export default Homepage;
