import { useLoaderData } from "react-router-dom";



const CraftDetails = () => {
  const crafts = useLoaderData();
 
console.log(crafts);
  const { photo, item, subCategory, description, price, rating, customization, processing, stock, email, name } = crafts;

  return (
    <div>
      <h2>this is details page...:</h2>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={photo} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{item}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftDetails;