
// import { useContext } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { AuthContext } from "../../providers/AuthProvider";
// import { Tooltip } from "react-tooltip";
// import './Navbar.css'


// const Navbar = () => {

//   const { user, logOut } = useContext(AuthContext)

//   const navLinks = <div id="sidebar" className="flex flex-col md:flex-row lg:flex-row gap-2">
//     <li><NavLink to='/' activeClassName="text-green-500 font-bold border-green-500 border-2 py-2">Home</NavLink></li>
//     <li><NavLink to='/allArt'>All Art & Craft Items</NavLink></li>
//     <li><NavLink to='/addCraft'>Add craft Item</NavLink></li>
//     <li><NavLink to='/myArt'>My Art & Craft List</NavLink></li>

//   </div>

//   const handelLogOut = () => {
//     logOut()
//       .then(() => {
//         console.log("User Logged Out Successfully");
//       })
//       .catch(error => {
//         console.error(error)
//       })
//   }

//   return (
//     <div className="navbar bg-base-100">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//           </div>
//           <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//             {navLinks}
//           </ul>
//         </div>
//         <a className="btn btn-ghost text-xl">Craftopia</a>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">
//           {navLinks}
//         </ul>
//       </div>
//       <div className="navbar-end">
//         {
//           user ? <div className="flex">
//             <span ><img className="w-10 h-10 border-2 border-green-600 rounded-full" data-tooltip-id="userTooltip" src={user.photoURL} alt="" data-tip={user.displayName} />
//             </span>
//             <a onClick={handelLogOut} className="btn btn-sm ml-6" href="">Log Out</a>
//           </div> :
//            <>
//             <Link to='/login'><button className="btn btn-sm">Login</button></Link>
//             <Link to='/register'><button className="btn btn-sm ml-4">Register</button></Link>
//            </>
//         }
//       </div>
//       <Tooltip id="userTooltip" place="bottom">
//         <span className="text-gray-700 bg-white p-2">
//           {user ? user.displayName : ""}
//         </span>

//       </Tooltip>
//     </div>
//   );
// };

// export default Navbar;
















// import { useContext, useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { AuthContext } from "../../providers/AuthProvider";
// import { Tooltip } from "react-tooltip";
// import './Navbar.css'

// const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext);
//   const [theme, setTheme] = useState("light"); // State for theme mode

//   const toggleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     setTheme(newTheme);
//     document.documentElement.setAttribute("data-theme", newTheme); // Update HTML attribute to apply CSS styles
//   };

//   const navLinks = (
//     <div id="sidebar" className="flex flex-col md:flex-row lg:flex-row gap-2">
//       <li><NavLink to='/' activeClassName="text-green-500 font-bold border-green-500 border-2 py-2">Home</NavLink></li>
//       <li><NavLink to='/allArt'>All Art & Craft Items</NavLink></li>
//       <li><NavLink to='/addCraft'>Add craft Item</NavLink></li>
//       <li><NavLink to='/myArt'>My Art & Craft List</NavLink></li>
//     </div>
//   );

//   const handleLogOut = () => {
//     logOut()
//       .then(() => {
//         console.log("User Logged Out Successfully");
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   };

//   return (
//     <div className={`navbar bg-base-100 ${theme === "dark" ? "dark-theme" : ""}`}>
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//           </div>
//           <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//             {navLinks}
//           </ul>
//         </div>
//         <a className="btn btn-ghost text-xl">Craftopia</a>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">
//           {navLinks}
//         </ul>
//       </div>
//       <div className="navbar-end">
//         {user ? (
//           <div className="flex">
//             <span>
//               <img className="w-10 h-10 border-2 border-green-600 rounded-full" data-tooltip-id="userTooltip" src={user.photoURL} alt="" data-tip={user.displayName} />
//             </span>
//             <button onClick={handleLogOut} className="btn btn-sm ml-6" href="">
//               Log Out
//             </button>
//           </div>
//         ) : (
//           <>
//             <Link to='/login'><button className="btn btn-sm">Login</button></Link>
//             <Link to='/register'><button className="btn btn-sm ml-4">Register</button></Link>
//           </>
//         )}
//       </div>
//       <Tooltip id="userTooltip" place="bottom">
//         <span className="text-gray-700 bg-white p-2">
//           {user ? user.displayName : ""}
//         </span>
//       </Tooltip>
//       {/* Theme toggle button */}
//       <div className="theme-toggle">
//         <button onClick={toggleTheme} className="btn btn-ghost btn-sm ml-4">
//           {theme === "light" ? "Dark Mode" : "Light Mode"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;







import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Tooltip } from "react-tooltip";
import './Navbar.css'


const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState('light');

  const navLinks = <div id="sidebar" className="flex flex-col md:flex-row lg:flex-row gap-2">
    <li><NavLink to='/' activeClassName="text-green-500 font-bold border-green-500 border-2 py-2">Home</NavLink></li>
    <li><NavLink to='/allArt'>All Art & Craft Items</NavLink></li>
    <li><NavLink to='/addCraft'>Add craft Item</NavLink></li>
    <li><NavLink to='/myArt'>My Art & Craft List</NavLink></li>
  </div>


  useEffect(() => {
    localStorage.setItem('theme', theme)
    const localTheme = localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-theme', localTheme)
  }, [theme])

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme('dark')
    }
    else {
      setTheme('light')
    }
  }


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
            <span ><img className="w-10 h-10 border-2 border-green-600 rounded-full" data-tooltip-id="userTooltip" src={user.photoURL} alt="" data-tip={user.displayName} />
            </span>
            <a onClick={handelLogOut} className="btn btn-sm ml-6" href="">Log Out</a>
          </div> :
            <>
              <Link to='/login'><button className="btn btn-sm">Login</button></Link>
              <Link to='/register'><button className="btn btn-sm ml-4">Register</button></Link>
            </>
        }
      </div>
      <Tooltip id="userTooltip" place="bottom">
        <span className="text-gray-700 bg-white p-2">
          {user ? user.displayName : ""}
        </span>

      </Tooltip>


      <label className="cursor-pointer grid place-items-center ml-4">
        <input onChange={handleToggle} type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
      </label>




    </div>
  );
};

export default Navbar;


