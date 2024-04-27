import Swal from 'sweetalert2'
const AddCraftItem = () => {

  const handleAddCraft = e =>{
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const item = form.item.value;
    const subCategory = form.subCategory.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processing = form.processing.value;
    const stock = form.stock.value;
    const email = form.email.value;
    const name = form.name.value;

    const newCraft = {photo,item,subCategory,description,price,rating,customization,processing,stock,email,name}

    console.log(newCraft);

    // send data to the server
    fetch('http://localhost:5000/crafts',{
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body:JSON.stringify(newCraft)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          title: 'Success!',
          text: 'Craft Added Successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    })
  }



  return (
    <div className="bg-blue-100 p-24">
      <h2 className="text-3xl font-extrabold text-center">Add Craft Item</h2>
      <form onSubmit={handleAddCraft}>
        {/* form image & item_name */}
        <div className="md:flex ">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <label className="input-group">
              <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Item Name</span>
            </label>
            <label className="input-group">
              <input type="text" name="item" placeholder="Item Name" className="input input-bordered w-full" />
            </label>
          </div>
        </div>
        {/* form subcategory_Name & Short Description*/}
        <div className="md:flex ">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Subcategory Name</span>
            </label>
            <label className="input-group">
              <input type="text" name="subCategory" placeholder="Subcategory Name" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <label className="input-group">
              <input type="text" name="description" placeholder="Short Description" className="input input-bordered w-full" />
            </label>
          </div>
        </div>
        {/* form price & rating */}
        <div className="md:flex ">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
            </label>
          </div>
        </div>
        {/* customization & Processing_time */}
        <div className="md:flex">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Customization</span>
            </label>
            <label className="input-group">
              <input type="text" name="customization" placeholder="Customization" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Processing Time</span>
            </label>
            <label className="input-group">
              <input type="text" name="processing" placeholder="Processing Time" className="input input-bordered w-full" />
            </label>
          </div>
        </div>
        {/* stockStatus & userEmail */}
        <div className="md:flex">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Stock Status</span>
            </label>
            <label className="input-group">
              <input type="text" name="stock" placeholder="Stock Status" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control w-1/2 ml-4">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <label className="input-group">
              <input type="text" name="email" placeholder="User Email" className="input input-bordered w-full" />
            </label>
          </div>
        </div>
        {/* user name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <label className="input-group">
            <input type="text" name="name" placeholder="User Name" className="input input-bordered w-full" />
          </label>
        </div>
        <input type="submit" value="Add Coffee" className="btn btn-block btn-info mt-4" />
      </form>
    </div>
  );
};

export default AddCraftItem;