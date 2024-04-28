import { Link, useLoaderData } from "react-router-dom";



const AllArtCraftItem = () => {
  const crafts = useLoaderData();
  
  return (
    <div>
      <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-xl font-bold">
                            <th></th>
                            <th>Name</th>
                            <th>Subcategory</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            crafts.map((craft,index) => <tr key={index}>
                                <th>{index+1}</th>
                                <td>{craft.item}</td>
                                <td>{craft.subCategory}</td>
                                <td>{craft.price}</td>
                                <td>{craft.rating}</td>
                                <td>
                                <Link to={`/crafts/${craft._id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
    </div>
  );
};

export default AllArtCraftItem;