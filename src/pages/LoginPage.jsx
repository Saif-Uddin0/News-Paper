import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const LoginPage = () => {
    const [errorr ,setError] = useState('')
''
    const {loginUser} = use(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const signInOut =(e)=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email,password)
        .then(res =>{
            // console.log (res.user);
            navigate(`${location.state? location.state : '/'}`)
        })
        .catch(error =>{
            // alert(error.message);
            setError(error.code)
            
        })
    }

    return (
        
            <div className=" flex justify-center hero bg-base-200 min-h-screen "> 
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-8 px-10">
                        <div className='py-5 border-b border-base-200'>
                            <h1 className="text-2xl font-semibold text-center">Login Your account</h1>
                        </div>
                        <div className="card-body ">
                            <form onSubmit={signInOut}>
                                <fieldset className="fieldset ">
                                    {/* email */}
                                    <label className="label font-semibold text-black">Email</label>
                                    <input 
                                    required
                                    name='email'
                                    type="email" className="input" placeholder="Email" />
                                    {/* password */}
                                    <label className="label font-semibold text-black">Password</label>
                                    <input 
                                    required
                                    name='password'
                                    type="password" className="input" placeholder="Password" />
                                    <div><a className="link link-hover">Forgot password?</a>
                                    </div>

                                    {
                                        errorr && <p className='text-secondary'>{errorr}</p>
                                    }

                                    <button className="btn btn-neutral bg-primary mt-4">Login</button>
                                </fieldset>
                                <p className='px-5 py-2 mt-2 text-xs text-primary'>Don't Have An Account? <Link to={'/auth/register'} className='text-secondary  text-center'>Register</Link></p>
                            </form>
                        </div>
                    </div>
                
            </div>
        
    );
};

export default LoginPage;