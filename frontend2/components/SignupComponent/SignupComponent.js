import React from 'react'
import styles from './SignupComponent.module.css'
import { useState, useEffect } from 'react'

function SignupComponent() {

  const [userdata, setUserdata] = useState({firstName: "", lastName: "", email: "", password: ""})

  useEffect(() => {
    
  }, [])

  const submitSignup = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        if (!localStorage.getItem("userData")) {
            localStorage.setItem("userData", JSON.stringify([]));
        }

        let user = localStorage.getItem("userData") //getting input
        if (user) { //if there
            let userJson = JSON.parse(user) //JSON string to obj
            if (userJson.filter(value => { return value.email == userdata.email }).length > 0) {
                alert("This user already exists")
            }
            else {
              userJson.push(userdata) //push new input to end of array
                localStorage.setItem("userData", JSON.stringify(userJson)) //obj to JSON string
                alert("User has been created")
                setUserdata({ firstName: "", lastName: "", email: "", password: "" })
            }
        }
        else {
            localStorage.setItem("userData", JSON.stringify([userdata])) //obj to JSON string
        }
    }
  }

  

  // const submitSignup = () => {

  //  }

  const onChange = (e) => {
    // e.target.name = e.target.value;
    setUserdata({
        ...userdata, [e.target.name]: e.target.value
    });
    console.log(userdata);
}

  return (

    <div class="container mx-auto">
      <div class="flex justify-center px-6 my-12">
        <div id={styles.glass} class="w-full xl:w-3/4 lg:w-11/12 flex ">
          {/* bg-gray-400 */}
          <div   className="w-full h-auto hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
          >  <img id={styles.signupImage} src="/Images/signupImage.svg" alt="" />
          </div>

          <div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
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
            <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={submitSignup} action="#" method="POST">
            <div class="mb-4">
                <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                  First Name
                </label>
                <div className="mt-2">
                  <input onChange={onChange} id="firstName" name="firstName" type="text" required                    
                    className= "w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>

              <div class="mb-4">
                <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                  Last Name
                </label>
                <div className="mt-2">
                  <input onChange={onChange} id="lastName" name="lastName" type="text" required                    
                    className= "w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>

              <div class="mb-4">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input onChange={onChange} id="email" name="email" type="email" autoComplete="email" required                    
                    className= "w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>

              <div class="mb-4">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div id={styles.forget} className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>

                <div className="mt-2">
                  <input onChange={onChange} id="password" name="password" type="password" autoComplete="current-password" required
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
									href={"/login"}
								>
									Already have an account? Login!
								</a>
							</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupComponent;