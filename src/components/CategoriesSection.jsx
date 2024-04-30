import { useEffect, useState } from "react";


const CategoriesSection = () => {
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/subCategories')
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setSubcategories(data)
      });
  }, [])
  return (
    <div>
      {
        subcategories.map((subcategory, index) => <div key={index}>

          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img className="h-96 w-full" src={subcategory.photo} alt='' />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{subcategory.item}</h2>
              <p><span className="font-semibold">Customization :</span> {subcategory.customization}</p>
              <p><span className="font-semibold">Stock :</span> {subcategory.stock}</p>
              <p><span className="font-semibold">Price :</span> {subcategory.price}</p>
              <p><span className="font-semibold">Rating :</span> {subcategory.rating}</p>
            </div>
          </div>

        </div>)
      }
    </div>
  );
};

export default CategoriesSection;