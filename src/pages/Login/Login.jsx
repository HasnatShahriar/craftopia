import { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../providers/AuthProvider';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { SiGithub } from 'react-icons/si';

const Login = () => {
  const { signIn, googleSignIn, githubSignIn, setUser } = useContext(AuthContext);
  const [success, setSuccess] = useState('');
  const [loginError, setLoginError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // reset error & success
    setSuccess('');
    setLoginError('');

    // sign in with email & password
    signIn(email, password)
      .then(result => {
        console.log(result.user);
        setSuccess('User login successfully')
        toast.success('User login successfully')
      })
      .catch(error => {
        console.error(error);
        setLoginError('Please Provide Valid Email & Password')
        toast.error("User Login Failed !!! Please check your email & password")

      })
  }
  // sign in with google
  const handleGoogleLogin = () => {
    googleSignIn()
      .then(result => {
        console.log(result.user);
        setUser(result.user)
        setSuccess('User login successfully')
        toast.success('User login successfully')
      })
      .catch(error => {
        console.error(error);
        toast.error("User Login Failed !!! Please check your email & password")
      })
  }


  //  sign in with github
  const handleGithubLogin = () => {
    githubSignIn()
      .then(result => {
        console.log(result.user);
        setUser(result.user);
        setSuccess('User login successfully')
        toast.success('User login successfully')
      })
      .catch(error => {
        console.error(error);
        toast.error("User Login Failed !!! Please check your email & password")
      })
  }

  return (
    <div>
      <div>
        <p className="text-2xl font-semibold text-center my-4">Please Login</p>
        <div className="md:w-3/4 lg:w-1/2 mx-auto border-2 rounded-2xl mb-10">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" className="input input-bordered" required />
              <span className="absolute bottom-3 right-2 text-2xl" onClick={() => setShowPassword(!showPassword)}>
                {
                  showPassword ? <IoMdEyeOff /> : <IoMdEye />
                }
              </span>


            </div>

            <div className="form-control mt-6">
              <button className="btn w-full px-8 py-3 font-semibold border rounded dark:border-gray-800 dark:text-gray-800 bg-orange-400 text-white ">LOGIN</button>
            </div>
            <p className="text-center my-6">---------  Login with social accounts  ---------</p>
            <div className="flex justify-evenly">
              <button onClick={handleGoogleLogin} className="btn btn-sm"><span className="text-2xl"><AiFillGoogleCircle /></span> Google</button>
              <button onClick={handleGithubLogin} className="btn btn-sm"><span className="text-xl"><SiGithub /></span>Github</button>
            </div>
          </form>
          {
            loginError && <p className="text-red-600 ml-8">{loginError}</p>
          }
          {
            success && <p className="text-green-500 ml-8">{success}</p>
          }
          <p className="text-center my-4">Don't have an account <Link to='/register' className="text-blue-600 font-bold underline">Register</Link></p>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Login;