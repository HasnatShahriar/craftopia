import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";
import CraftItem from "../../components/CraftItem";
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
  const crafts = useLoaderData();
  return (
    <div>
      <Banner />
      <h1 className="text-3xl font-bold text-center my-10">Check Out Our {''}
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

      <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-3 mb-10">
        {
          crafts.map(craft => <CraftItem key={craft._id} craft={craft}></CraftItem>)
        }
      </div>
    </div>
  );
};

export default Home;