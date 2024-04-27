
const AddCraftItem = () => {
  return (
    <div className="bg-blue-100 p-24">
      <h2 className="text-3xl font-extrabold text-center">Add Craft Item</h2>
      <form>
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
              <input type="text" name="itemName" placeholder="Item Name" className="input input-bordered w-full" />
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
              <input type="text" name="subCategoryName" placeholder="Subcategory Name" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <label className="input-group">
              <input type="text" name="shortDescription" placeholder="Short Description" className="input input-bordered w-full" />
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
              <input type="text" name="processingTime" placeholder="Processing Time" className="input input-bordered w-full" />
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
              <input type="text" name="stockStatus" placeholder="Stock Status" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control w-1/2 ml-4">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <label className="input-group">
              <input type="text" name="userEmail" placeholder="User Email" className="input input-bordered w-full" />
            </label>
          </div>
        </div>
        {/* user name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <label className="input-group">
            <input type="text" name="userName" placeholder="User Name" className="input input-bordered w-full" />
          </label>
        </div>
        <input type="submit" value="Add Coffee" className="btn btn-block btn-info mt-4" />
      </form>
    </div>
  );
};

export default AddCraftItem;