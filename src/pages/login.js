import {useState} from "react"
import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import {useDispatch,useSelector} from 'react-redux'
import {getUser,verifyOtp} from "../redux/auth/userSlice";

const Login = () => {

  const router = useRouter();
  const [email,setEmail] = useState('')
  const [otp,setOtp] = useState('')
  let user = useSelector(state => state.auth)

  let dispatch = useDispatch()

  const handleLogin = (e) => {
    e.preventDefault()
    if(!email) {
      return alert("Below fields cannot be empty")
    }
    dispatch(getUser({email:email}))
  }

  const handleOtp = (e) => {
    e.preventDefault()
    
    if(!otp) {
      return alert("Below fields cannot be empty")
    }
    dispatch(verifyOtp({email:user.email,otp:otp}))
  }

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <section className="">
        <div className="container">
          <div className="row login">
            <div className="col-lg-6">
                <img src="./static/images/2853458.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6">
                {
                  user.otpView == true
                  ?
                  <form onSubmit={handleOtp}>
                      <div className="form-group p-2">
                        <label htmlFor="">Enter Otp</label>
                        <input type="text" value={otp} className="form-control m-0" placeholder="Enter your otp" onChange={(e) => setOtp(e.target.value)} />
                      </div>
                      <div className="form-group p-2">
                        <button className="btn btn-success">Submit</button>
                      </div>
                  </form>
                  :
                  <form onSubmit={handleLogin}>
                      <div className="form-group p-2">
                        <label htmlFor="">Email Address</label>
                        <input type="text" value={email} className="form-control m-0" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
                      </div>
                      <div className="form-group p-2">
                        <button className="btn btn-success">Submit</button>
                      </div>
                  </form>
                }
                
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
