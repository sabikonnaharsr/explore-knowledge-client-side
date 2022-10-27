import React, { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { FaBeer } from "react-icons/fa";

import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { AuthProvider } from "../../contexts/AuthContextProvider/AuthContextProvider";

const SignUp = () => {
  const { createUser, providerLogin, handleUpdateProfile } =
    useContext(AuthProvider);

  const updateProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    handleUpdateProfile(profile)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .then((error) => console.error("Error", error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const PhotoURL = form.PhotoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, PhotoURL, email, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateProfile(name, PhotoURL);
      })
      .catch((e) => console.e(e));
  };

  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  const githubProvider = new GithubAuthProvider();
  const handleGithubSingIn = () => {
    providerLogin(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        alert("user sucsesfull");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="name"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  name="PhotoURL"
                  type="text"
                  placeholder="photo url"
                  className="input input-bordered"
                  required
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
                  className="input input-bordered"
                  required
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
                  className="input input-bordered"
                  required
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
            <div>
              <div className="form-control mt-6">
                <button
                  onClick={handleGoogleSignIn}
                  className="btn btn-success"
                >
                  <FaGoogle></FaGoogle>
                </button>
              </div>
              <div className="form-control mt-6">
                <button onClick={handleGithubSingIn} className="btn btn-dark">
                  <FaGithub></FaGithub>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
