
export default function Login() {
  return (
    <div style={{backgroundImage:"url(/login-bg-high.jpg)"}} className="min-h-screen bg-no-repeat bg-top bg-cover flex flex-col ">
        <div className="mx-auto h-fit bg-white w-4/5 md:w-3/5 lg:w-2/5 mt-12 rounded-sm">
                <div>
                    <img src="/juw-lms-login-logo.jpg" className="p-2 left-auto" alt="" />
                </div>
                <hr />
                <div className="p-5  flex flex-col md:flex-row md:justify-center md:gap-x-8 ">
                       <div className="flex flex-col gap-y-3 ">
                               
                                <input type="text" name="username" placeholder="Username" className="border py-1 px-2" />

                                <input type="password" name="password" placeholder="Password" className="border py-1 px-2" />
                                <div>

                                        <input type="checkbox" name="remember" className="inline" id="" /> 
                                        <p className="inline text-sm font-thin">  Remember Username</p>
                                </div>

                                <button className="text-white bg-[#1177d1] w-full font-light py-1">Log in</button>


                       </div>

                       <div className="mt-4">
                           <a href="#" className="text-sm text-blue-600 dark:text-blue-500 hover:underline font-medium">Forgotten your username or password?</a>
                           <br />
                           <br />
                           <p className="text-sm">Cookies must be enabled in your browser</p>
                       </div>

                </div>
                <hr />
                <div style={{backgroundColor:"rgba(0,0,0,.03)"}} className="flex flex-col text-sm md:text-md  md:flex-row md:justify-between px-5 py-3">
                        
                        <div>
                                <p className=" font-semibold">Student Facilatation Center</p>
                                <p><span className="underline">Email</span>: support@juw.edu.pk</p>
                                
                        </div>
                        <div>
                                
                                <p><span className="underline">Address</span>: 5C, Nazimabad, Karachi - 74600</p>
                        </div>

                </div>
        </div>
    </div>
  )
}
