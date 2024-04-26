import { Link } from "react-router-dom";


const NotFound = () => {
  return (
    <div className="text-center">
      <h1 className="text-[200px] font-bold">404</h1>
      <h2 className="text-4xl font-bold">Not Found</h2>
      <Link to='/' className=" text-2xl"><button className="btn btn-outline mt-16">Go Back</button></Link>
    </div>
  );
};

export default NotFound;