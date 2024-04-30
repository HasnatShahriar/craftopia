import { Link } from "react-router-dom";


const CraftItem = ({ craft }) => {
  const { _id, photo, item, description } = craft;


  return ( 
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="h-48 w-full" src={photo} alt='' />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item}</h2>
          <p>{description}</p>
          <div className=" my-4">
            <div className="space-y-2 space-x-8">
              <Link to={`/crafts/${_id}`}>
                <button className="btn w-full px-8 py-3 font-semibold border rounded dark:border-gray-800 dark:text-gray-800 bg-orange-400 text-white ">View Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div> 
  );
};

export default CraftItem;