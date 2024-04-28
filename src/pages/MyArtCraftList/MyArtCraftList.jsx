import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const MyArtCraftList = () => {
  const { user } = useContext(AuthContext);
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myList/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setItem(data);
      })
  }, [user])

  return (
    <div>
      <h2>my art & craft list page</h2>
      {
        item?.map((p,index) => <div key={index}>
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img className="h-48 w-full" src={p.photo} alt={item} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{p.item}</h2>
              <p>{p.description}</p>
              <div className="card-actions">
                {/* <div className="space-y-2 space-x-8">
                  <Link to={`/crafts/${_id}`}>
                    <button className="btn btn-primary">View Details</button>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>

        </div>)
      }
    </div>
  );
};

export default MyArtCraftList;