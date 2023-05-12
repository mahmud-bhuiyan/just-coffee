import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          })
          .catch((error) => {
            console.log(error);
            Swal.fire({
              title: "Error!",
              text: "An error occurred",
              icon: "error",
              confirmButtonText: "Ok",
            });
          });
      }
    });
  };
  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={photo} className="w-1/2" />
        </figure>
        <div className="flex justify-between w-full p-10">
          <div>
            <h2 className="card-title">Name: {name}</h2>
            <p>Category: {category}</p>
            <p>Supplier: {supplier}</p>
            <p>Taste: {taste}</p>
            <p>Quantity: {quantity}</p>
            <p>Details: {details}</p>
          </div>
          <div className="justify-end">
            <div className="btn-group btn-group-vertical space-y-4">
              <button className="btn">View</button>
              <button className="btn">Edit</button>
              <button
                onClick={() => {
                  handleDelete(_id);
                }}
                className="btn"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoffeeCard;
