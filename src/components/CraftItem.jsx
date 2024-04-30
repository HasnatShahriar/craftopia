import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const CraftItem = ({ craft }) => {
  const { _id, photo, item, description } = craft;


  return ( 
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img data-aos="zoom-in" data-aos-duration="500" className="h-48 w-full" src={photo} alt='' />
        </figure>
        <div  data-aos="zoom-in-up" data-aos-duration="500" className="card-body">
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


CraftItem.propTypes = {
  craft: PropTypes.object.isRequired
}



export default CraftItem;