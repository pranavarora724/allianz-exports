import { TypeAnimation } from "react-type-animation";
import { TiTick } from "react-icons/ti";
import { NavLink, useNavigate } from "react-router-dom";


function hero_section() {

    // const navigate = useNavigate();
    return (
        <div className="md:-translate-y-[180px] -translate-y-[100px]">
            <div className=" bg-[url('https://utradealgos.com/wp-content/uploads/2023/05/63ea115c9242d9171192980a_Mask-group-3.svg')] bg-no-repeat bg-cover h-[900px]   pb-[300px]  w-full border ">
                <div className="mt-[320px] max-w-[1280px] mx-auto w-[90%] h-[400px]  flex flex-col md:flex-row gap-x-7 items-center justify-center">

                  {/* Left side */}
                    <div className="md:w-[50%] md:max-w-[500px] w-[90%]  leading-10 text-start text-white font-bold text-xl">
                       <div className=" text-2xl sm:text-4xl h-[100px]"> 
                       <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed once, initially
                                'Your one stop solution for Algo Trading',
                                3000,
                                'Your one stop solution for Backtesting',
                                3000,
                                'Your one stop solution for Advance Backtesting',
                                3000,
                                'Your one stop solution for Testing your Stratergy',
                                3000,
                            ]}
                            speed={50}
                            style={{  }}
                            repeat={Infinity}
                        />
                       </div>

                        <div className="text-white text-sm sm:text-lg font-semibold mt-8 text-start">Plan, strategise, and automate your trades with unfluke's no-code algo trading platform</div>

                       {/* Buttons */}
                       <NavLink to={'/auth'}>
                       <div>
                            <div className="px-4  py-1 border rounded-xl w-fit mx-auto mt-14 hover:bg-blue-100 hover:text-blue-700 cursor-pointer">Start Free Trial</div>  
                        </div>
                       </NavLink>

                        <div className="flex flex-row gap-x-4 justify-center">
                            
                            <div className="flex flex-row gap-x-1 items-center">
                               <TiTick  className='text-green-400'/>
                               <div className="text-white text-[11px] font-normal">30 day free Trial</div>
                            </div>

                            <div className="flex flex-row gap-x-4 items-center">
                               <TiTick  className='text-green-400'/>
                               <div className="text-white text-[11px] font-normal">No Credit Card Needed</div>
                            </div>
                        </div>
                    </div>

                   {/* Right side */}
                    <div className="p-4 bg-gradient-to-br max-w-[600px] mb-[20px] md:mb-0 mt-14 md:mt-0 w-[80%] md:w-[50%] from-blue-400 to-blue-100 rounded-2xl">
                        <img className="w-[100%]  rounded-2xl" src="https://www.unfluke.in/static/media/f1.e33baefd.jpg"></img>
                    </div>

                    <div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default hero_section;