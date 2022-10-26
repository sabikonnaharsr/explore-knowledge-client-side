import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Sign Up!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form  className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    name="name"
                    type="name"
                    placeholder="name"
                    className="input input-bordered" required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo Url</span>
                  </label>
                  <input
                    name="Photo Url"
                    type="Photo url"
                    placeholder="photo url"
                    className="input input-bordered" required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="email"
                    className="input input-bordered" required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    name="password"
                    type="password"
                    placeholder="password"
                    className="input input-bordered" required
                  />
                  <label className="label">
                    <Link to="login" className="label-text-alt link link-hover">
                     Already have an account!
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
              </form>
              <br />
              <button className='btn btn-outline btn-success'>Google SingIn</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;