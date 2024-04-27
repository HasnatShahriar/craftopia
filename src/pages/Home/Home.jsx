import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";
import CraftItem from "../../components/CraftItem";

const Home = () => {
  const crafts = useLoaderData();
  return (
    <div>
      <Banner />
      <h2 className="text-3xl font-bold">All Crafts:{crafts.length}</h2>
      <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-3">
        {
          crafts.map(craft => <CraftItem key={craft._id} craft={craft}></CraftItem>)
        }
      </div>
    </div>
  );
};

export default Home;