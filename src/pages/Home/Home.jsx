import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";
import CraftItem from "../../components/CraftItem";
import { Typewriter } from 'react-simple-typewriter';
import About from "../../components/About";
import Achievements from "../../components/Achievements";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Home = () => {
  const crafts = useLoaderData();
  return (
    <div>
      <Banner />
      <h1 className="text-3xl font-bold text-center mt-8">Check Out Our {''}
        <span style={{ color: 'blue', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Art Items', 'Craft Items']}
            loop={true}
            cursor
            cursorStyle=''
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
      <p className="text-center w-2/3 mx-auto text-lg font-medium mt-4 mb-8">
        Art cards are miniature marvels, each one a testament to the boundless creativity of its creator. These tiny canvases capture the essence of larger works, distilling beauty and imagination into a compact form.</p>

      <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-3 mb-10">
        {
          crafts.map(craft => <CraftItem key={craft._id} craft={craft}></CraftItem>)
        }
      </div>
      <About />
      <Achievements />
    </div>
  );
};

export default Home;