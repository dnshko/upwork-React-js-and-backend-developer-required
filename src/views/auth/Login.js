import React, { memo, useState,useEffect } from 'react';
import { Link ,useHistory} from "react-router-dom";
import Swal from 'sweetalert2';


export default function Login() {
	let history = useHistory();

  let [password, setpassword] = useState('');

  const login = (e) =>{
        e.preventDefault();

        if(password === ''){
            
            Swal.fire({
                icon:"error",
                title:"Oops!",
                text:"password is incorrect"
              })
        }
        else if(password === "LifelabsSecurity#2021"){
            localStorage.setItem('isLogin',true)
            history.push('/admin')
        }
        else{
            
            Swal.fire({
                icon:"error",
                title:"Oops!",
                text:"password is incorrect"
              })
        }
      }
  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="flex-auto px-4 lg:px-10 py-10 pt-2">
                <div className="text-blueGray-400 text-center mb-5 font-bold">
                  <small>sign in with credentials</small>
                </div>
                <form>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                      name='password'
                      onChange={e => setpassword(e.target.value)}
                    />
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                      onClick={login}
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
