import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="m-3">
        <Link className="p-3" to="/">
          Home
        </Link>
        <Link className="p-3" to="/coffee/add">
          Add
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
