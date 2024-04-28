import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const MyArtCraftList = () => {
  const { user } = useContext(AuthContext);
  const [item, setItem] = useState([]);
  const [control,setControl] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:5000/myList/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setItem(data);
      })
  }, [user,control])

  const handleDelete = id =>{
    fetch(`http://localhost:5000/delete/${id}`,{
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.deletedCount > 0){
        setControl(!control)
      }
    })
  }

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
               <button className="btn m-2">Update</button>
               <button onClick={()=>handleDelete(p._id)} className="btn m-2">Delete</button>
              </div>
            </div>
          </div>

        </div>)
      }
    </div>
  );
};

export default MyArtCraftList;