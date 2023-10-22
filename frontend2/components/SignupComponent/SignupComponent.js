import React from 'react'
import styles from './SignupComponent.module.css'

function SignupComponent() {
  return (
    // <div id={styles.container} className="flex min-h-full flex-1 flex-col md:flex-row justify-center px-6 py-12 lg:px-8">
    //   {/* <div className={styles.background}> */}
    //     <div id={styles.signup} className="flex min-h-full flex-1 flex-col md:flex-row justify-center px-6 py-12 lg:px-8">
    //       <div id={styles.fhalf} className="sm:mx-auto sm:w-full sm:max-w-sm md:w-1/2 px-4">
    //         <img id={styles.signupImage} src="/Images/Professional-People-Silhouette.svg" alt="" />
    //       </div>

    //       <div id={styles.shalf} className="sm:mx-auto sm:w-full sm:max-w-sm md:w-1/2 px-4">
    //         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    //           <img
    //             className="mx-auto h-10 w-auto"
    //             src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
    //             alt="Your Company"
    //           />
    //           <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
    //             Sign in to your account
    //           </h2>
    //         </div>
    //         &nbsp;

    //         <form className="space-y-6" action="#" method="POST">
    //           <div>
    //             <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
    //               Email address
    //             </label>
    //             <div className="mt-2">
    //               <input
    //                 id="email"
    //                 name="email"
    //                 type="email"
    //                 autoComplete="email"
    //                 required
    //                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //               />
    //             </div>
    //           </div>

    //           <div>
    //             <div className="flex items-center justify-between">
    //               <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
    //                 Password
    //               </label>
    //               <div className="text-sm">
    //                 <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
    //                   Forgot password?
    //                 </a>
    //               </div>
    //             </div>
    //             <div className="mt-2">
    //               <input
    //                 id="password"
    //                 name="password"
    //                 type="password"
    //                 autoComplete="current-password"
    //                 required
    //                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //               />
    //             </div>
    //           </div>

    //           <div>
    //             <button
    //               type="submit"
    //               className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    //             >
    //               Sign in
    //             </button>
    //           </div>
    //         </form>

    //         <p className="mt-10 text-center text-sm text-gray-500">
    //           Not a member?{' '}
    //           <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
    //             Start a 14 day free trial
    //           </a>
    //         </p>
    //       </div>
    //     {/* </div> */}
    //   </div>

    // </div>

    <div class="container mx-auto">
      <div class="flex justify-center px-6 my-12">
        <div class="w-full xl:w-3/4 lg:w-11/12 flex shadow-md">
          {/* col */}
          <div
            class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg shadow-md"
          // style="background-image: url('https://source.unsplash.com/oWTW-jNGl9I/600x800')"
          >  <img id={styles.signupImage} src="/Images/Professional-People-Silhouette.svg" alt="" />
          </div>

          {/* col */}
          <div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none shadow-md">
            <div className="px-8 mb-4 text-center">
              <img
                className="mx-auto h-10 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
              <h2 className="pt-4 mb-2 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign in to your account
              </h2>
            </div>

            {/* class="px-8 pt-6 pb-8 mb-4 bg-white rounded" */}
            <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded" action="#" method="POST">
              <div class="mb-4">
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
                    
                    className= "w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>

              <div class="mb-4">
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
                  Sign in
                </button>
                {/* <button
									class="w-full px-4 py-2 mt-2 font-bold text-white bg-indigo-600 rounded-full hover:bg-indigo-500 focus:outline-none focus:shadow-outline"
									type="button"
								>
								   Sign in
								</button> */}
              </div>
              {/* <hr class="mb-6 border-t" /> */}
              <hr class="my-6 border-t border-gray-300" />
              <div class="text-center">
								<a
									class="inline-block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
									href="#"
								>
									Already have an account? Login!
								</a>
							</div>
            </form>
          </div>
        </div>
      </div>
    </div>

//     <div class="container mx-auto">
//   <div class="flex justify-center px-6 my-12">
//     <div class="w-full xl:w-3/4 lg:w-11/12 flex">
//       {/* <!-- Background Image Div --> */}
//       <div class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg">
//         <img id={styles.signupImage} src="/Images/Professional-People-Silhouette.svg" alt="" />
//       </div>

//       {/* <!-- Signup Container with Shadow and Background Blur --> */}
//       <div class="w-full lg:w-1/2 p-5 bg-white rounded-lg lg:rounded-l-none shadow-md">
//         <div class="px-8 mb-4 text-center">
//           <img
//             class="mx-auto h-10 w-auto"
//             src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
//             alt="Your Company"
//           />
//           <h2 class="pt-4 mb-2 text-2xl font-bold leading-9 tracking-tight text-gray-900">
//             Sign in to your account
//           </h2>
//         </div>

//         <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded" action="#" method="POST">
//           {/* <!-- Form fields go here --> */}

//           <button
//             type="submit"
//             class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//           >
//             Sign in
//           </button>
//         </form>

//         {/* <!-- Horizontal Rule (hr) --> */}
//         <hr class="my-6 border-t border-gray-300" />

//         <div class="text-center">
//           <a class="inline-block text-sm font-semibold text-indigo-600 hover:text-indigo-500" href="#">
//             Already have an account? Login!
//           </a>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

  )
}

export default SignupComponent;