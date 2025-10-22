import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const RegisterPage = () => {
    const [nameError, setNameError] = useState('')

    const { createUser, setUser, updatedUser } = use(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        if (name.length < 5) {
            setNameError('Name should be more than 5 Characters')
            return
        }
        else {
            setNameError('')
        }
        const email = form.email.value;
        const url = form.url.value;
        const password = form.password.value;
        // console.log(name, url, email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                updatedUser({ displayName: name, photoURL: url })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: url });
                    })
                    .catch(error => {
                        console.log(error.message);
                    });
            })
            .catch(error => {
                alert(`${error.code}: ${error.message}`);
            });
        }

        return (
            <div className=" flex justify-center hero bg-base-200 min-h-screen ">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-8 px-10">
                    <div className='py-5 border-b border-base-200'>
                        <h1 className="text-2xl font-semibold text-center">Register Your account</h1>
                    </div>
                    <div className="card-body ">
                        <form onSubmit={handleRegister}>
                            <fieldset className="fieldset ">
                                {/* name */}
                                <label className="label font-semibold text-black">Your Name</label>
                                <input
                                    required
                                    type="text"
                                    name='name'
                                    className="input" placeholder="Enter your name" />
                                {nameError && <p className='text-secondary text-xs'>{nameError}</p>}
                                {/* url */}
                                <label className="label font-semibold text-black">Photo URL</label>
                                <input
                                    required
                                    type="text"
                                    name='url'
                                    className="input" placeholder="Enter your URL" />
                                {/* email */}
                                <label className="label font-semibold text-black">Email</label>
                                <input
                                    required
                                    type="email"
                                    name='email'
                                    className="input" placeholder="Email" />
                                {/* password */}
                                <label className="label font-semibold text-black">Password</label>
                                <input
                                    required
                                    type="password"
                                    name='password'
                                    className="input" placeholder="Password" />
                                <div className='flex items-center justify-center mt-1.5 gap-2'>
                                    <input type="checkbox"
                                        className="checkbox" />
                                    <p className='text-primary'>Accept Term & Conditions</p>
                                </div>
                                <button type='submit' className="btn btn-neutral bg-primary mt-4">Register</button>
                            </fieldset>
                            {/* <p className='px-5 py-2 mt-2 text-xs text-primary'>Don't Have An Account? <Link to={'/auth/login'} className='text-secondary  text-center'>login</Link></p> */}
                        </form>
                    </div>
                </div>

            </div>

        );
    };


export default RegisterPage;