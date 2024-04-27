import { Link } from "react-router-dom";


const CraftItem = ({craft}) => {
  const{_id,photo,item,subCategory,description,price,rating,customization,processing,stock,email,name}=craft;


 

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img className="h-48 w-full" src={photo} alt={item} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <div className="space-y-2 space-x-8">
            <Link to={`/crafts/${_id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftItem;