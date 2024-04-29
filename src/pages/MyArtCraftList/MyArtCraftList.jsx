import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const MyArtCraftList = () => {
  const { user } = useContext(AuthContext);
  const [item, setItem] = useState([]);
  const [control, setControl] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:5000/myList/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setItem(data);
      })
  }, [user, control])

  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/delete/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              setControl(!control)
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          })
      }
    });
  }

  return (
    <div>
      <div className="min-h-[calc(100vh-124px)] mb-10">
        <div className="flex flex-col gap-10">
          {
            item?.map((p, index) => <div key={index}>
              <div className="card bg-base-100 shadow-xl">
                <figure>
                  <img className="h-96 w-full" src={p.photo} alt={item} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{p.item}</h2>
                  <p><span className="font-semibold">Customization :</span> {p.customization}</p>
                  <p><span className="font-semibold">Stock :</span> {p.stock}</p>
                  <p><span className="font-semibold">Price :</span> {p.price}</p>
                  <p><span className="font-semibold">Rating :</span> {p.rating}</p>
                  <div className="card-actions mt-6">
                    <Link to={`/update/${p._id}`}><button className="btn btn-sm">Update</button></Link>
                    <button onClick={() => handleDelete(p._id)} className="btn btn-sm">Delete</button>
                  </div>
                </div>
              </div>

            </div>)
          }
        </div>
      </div>
    </div>
  );
};

export default MyArtCraftList;


