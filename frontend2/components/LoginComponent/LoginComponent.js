import React from 'react';
import styles from './LoginComponent.module.css';

function LoginComponent() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center px-6 my-12">
        <div className="w-full xl:w-3/4 lg:w-11/12 flex shadow-md">
          <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg shadow-md">
            <img id={styles.signupImage} src="/Images/Professional-People-Silhouette.svg" alt="" />
          </div>
          <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none shadow-md">
            <div className="px-8 mb-4 text-center">
              <img
                className="mx-auto h-10 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
              <h2 className="pt-4 mb-2 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Log in to your account
              </h2>
            </div>
            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" action="#" method="POST">
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
              <div className="mb-4">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Log in
                </button>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="text-center">
                <a
                  className="inline-block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
                  href="#"
                >
                 Don't have Account. Sign Up 
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
