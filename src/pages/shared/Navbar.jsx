
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Tooltip } from "react-tooltip";
import './Navbar.css'


const Navbar = () => {

  const { user, logOut } = useContext(AuthContext)

  const navLinks = <div id="sidebar" className="flex flex-col md:flex-row lg:flex-row gap-2">
    <li><NavLink to='/' activeClassName="text-green-500 font-bold border-green-500 border-2 py-2">Home</NavLink></li>
    <li><NavLink to='/allArt'>All Art & Craft Items</NavLink></li>
    <li><NavLink to='/addCraft'>Add craft Item</NavLink></li>
    <li><NavLink to='/myArt'>My Art & Craft List</NavLink></li>

  </div>

  const handelLogOut = () => {
    logOut()
      .then(() => {
        console.log("User Logged Out Successfully");
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Craftopia</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        {
          user ? <div className="flex">
            <span ><img className="w-10 h-10 border-2 border-green-600 rounded-full" data-tooltip-id="userTooltip" src={user.photoURL} alt="" data-tip={user.displayName} /></span>
            <a onClick={handelLogOut} className="btn btn-sm ml-6" href="">Log Out</a>
          </div> :
            <Link to='/login'><button className="btn btn-sm">Login</button></Link>
        }
      </div>
      <Tooltip id="userTooltip" place="bottom">
        <span className="text-gray-700 bg-white p-2">
          {user ? user.displayName : ""}
        </span>

      </Tooltip>
    </div>
  );
};

export default Navbar;