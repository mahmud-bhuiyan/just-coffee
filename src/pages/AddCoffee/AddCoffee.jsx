import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);

    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee added successfully!",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Error!",
          text: "An error occurred",
          icon: "error",
          confirmButtonText: "Cool",
        });
      });
  };
  return (
    <div className="m-5 px-6 md:px-40 pt-16 pb-20 bg-[#F4F3F0]">
      <h3 className="text-2xl font-bold text-center mb-8">Add New Coffee</h3>
      <form onSubmit={handleAddCoffee}>
        {/* name and qty row */}
        <div className="md:flex md:gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group-rounded">
              <input
                type="text"
                name="name"
                placeholder="Enter coffee name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group-rounded">
              <input
                type="text"
                name="quantity"
                placeholder="Available Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* Supplier and taste row */}
        <div className="md:flex md:gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier Name</span>
            </label>
            <label className="input-group-rounded">
              <input
                type="text"
                name="supplier"
                placeholder="Supplier name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group-rounded">
              <input
                type="text"
                name="taste"
                placeholder="Taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* Category and Details row */}
        <div className="md:flex md:gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group-rounded">
              <input
                type="text"
                name="category"
                placeholder="Category name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group-rounded">
              <input
                type="text"
                name="details"
                placeholder="Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* photo url row */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <label className="input-group-rounded">
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <input
          type="submit"
          value="Add coffee"
          className="btn btn-block mt-8"
        />
      </form>
    </div>
  );
};

export default AddCoffee;
