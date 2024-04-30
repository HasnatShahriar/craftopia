import { useLoaderData } from "react-router-dom";


const CraftDetails = () => {
  const crafts = useLoaderData();

  console.log(crafts);
  const { photo, item, subCategory, description, price, rating, customization, processing, stock } = crafts;

  return (
    <div>
      <div className="card  bg-base-100 shadow-xl my-10">
        <figure><img className='w-full h-96' src={photo} alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title">{item}</h2>
          <p><span className='font-semibold'>Subcategory Name : </span>{subCategory}</p>
          <p><span className='font-semibold'>Description : </span>{description}</p>        
          <p><span className='font-semibold'>Customization : </span>{customization}</p>
          <p><span className='font-semibold'>Processing Time : </span>{processing}</p>
          <p><span className='font-semibold'>Stock Status : </span>{stock}</p>
          <p><span className='font-semibold'>Price : </span>{price}</p>
          <p><span className='font-semibold'>Rating : </span>{rating}</p>
        </div>
      </div>
    </div>
  );
};

export default CraftDetails;