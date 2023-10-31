import React, { useState, useEffect } from 'react';
import styles from './LoginComponent.module.css';

// const [userdata, setUserdata] = useState({firstName: "", lastName: "", email: "", password: ""})

// const [firstname, setFirstname] = useState("");
// const [lastname, setLastname] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

// const submitSignup = () => {
//   if (typeof window !== 'undefined' && window.localStorage) {
//       if (!localStorage.getItem("userData")) {
//           localStorage.setItem("userData", JSON.stringify([]));
//       }

//       let user = localStorage.getItem("userData") //getting input
//       if (user) { //if there
//           let userJson = JSON.parse(user) //JSON string to obj
//           if (userJson.filter(value => { return value.email == userdata.email }).length > 0) {
//               alert("This user already exists")
//           }
//           else {
//             userJson.push(userdata) //push new input to end of array
//               localStorage.setItem("userData", JSON.stringify(userJson)) //obj to JSON string
//               alert("User has been created")
//               setUserdata({ firstName: "", lastName: "", email: "", password: "" })
//           }
//       }
//       else {
//           localStorage.setItem("userData", JSON.stringify([userdata])) //obj to JSON string
//       }
//   }
// }

const submitLogin = async (e) => {
  e.preventDefault() //stops from reloading on form submit
  const data = { email, password };

  try {
        const response = await fetch("http://localhost:3000/api/login", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log("Success:", result);
    console.log("data: ", data);

    // setFirstname("");
    // setLastname("");
    setEmail("")
    setPassword("");

  } 
  catch (error) {
    console.log("data in error: ", data);
    console.error("Error:", error);
  }
 
}

const onChange = (e) => {
  // if(e.target.name == "firstname"){
  //   setFirstname(e.target.value);
  // }
  // else if(e.target.name == "lastname"){
  //   setLastname(e.target.value);
  // }
  if(e.target.name == "email"){
    setEmail(e.target.value);
  }
  else if(e.target.name == "password"){
    setPassword(e.target.value);
  }
  // e.target.name = e.target.value;
  // setUserdata({
  //   ...userdata, [e.target.name]: e.target.value
  // });
  // console.log(userdata);
 



 

  return (
    <div className="container mx-auto">
      <div className="flex justify-center px-6 my-12">
        <div id={styles.glass} className="w-full xl:w-3/4 lg:w-11/12 flex">
          <div className="w-full lg:w-1/2 bg-cover rounded-l-lg">
            <img id={styles.loginImage} src="/Images/signupImage.svg" alt="" />
          </div>

          <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
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

            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={submitLogin} action="#" method="POST">
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    value ={email}
                    onChange={onChange}
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
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="mt-2">
                  <input
                    value = {password}
                    onChange={onChange}
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
                  Forgot your password?
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
