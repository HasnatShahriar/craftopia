import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Register = () => {

  const { createUser } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword,setShowPassword] = useState(false);

  const handleRegister = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    console.log(name, photo, email, password);


    // reset error & success
    setRegisterError('');
    setSuccess('');

    if (password.length < 6) {
      setRegisterError('Password must have at least 6 or more characters')
      return
    }
    else if (!/^(?=.*[A-Z])(?=.*[a-z]).+$/.test(password)) {
      setRegisterError('Password must have at least one uppercase and one lowercase letter')
      return
    }

    // create user
    createUser(email, password)
      .then(result => {
        console.log(result.user)
        setSuccess('User created successfully')
        toast.success('User created successfully')
      })
      .catch(error => {
        console.error(error);
        setRegisterError('User creation failed')
        toast.error('User creation failed')

      })
  }

  return (
    <div>
      <div>
        <p className="text-2xl font-semibold text-center my-4">Please Register</p>
        <div className="md:w-3/4 lg:w-1/2 mx-auto border-2 rounded-2xl mb-10">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" />
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
              {/* <input type="password" name="password" placeholder="Password" className="input input-bordered" /> */}

            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">REGISTER</button>
            </div>
          </form>
          {
          registerError && <p className="text-red-600 ml-8">{registerError}</p>
        }
        {
          success && <p className="text-green-500 ml-8">{success}</p>
        }
          <p className="text-center my-4">Already have an account <Link to='/login' className="text-blue-600 font-bold underline">Login</Link></p>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Register;