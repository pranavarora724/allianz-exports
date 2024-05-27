import { useState } from "react";
import { LuUserPlus } from "react-icons/lu";
import { VscGraph } from "react-icons/vsc";
import { MdOutlineArrowOutward } from "react-icons/md";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import GridElement from "./GridElement";
import {gridData} from '../data'



function Features()
{
       
    const [arrayIndex , setArrayIndex] = useState(0);
    let data = ["I am a Beginner" , "I am a Mid-Level Trader" , "I am a Professional"]

    return(
        <div className="mt-20 max-w-[1180px] w-[80%] mx-auto ">
            <div className="text-3xl">Complete Toolkit for everyone</div>
            
            <div className="mt-6 flex flex-col gap-y-2 sm:flex-row gap-x-4">
                {
                    data.map((element , index)=>{
                        return(
                            <div onClick={()=>{setArrayIndex(index)}} className={`px-5 py-2 border-2 rounded-full cursor-pointer ${(arrayIndex == index)?('box-shadow: 4px 14px 59px 1px rgba(0,0,0,0.1),0px 4px 6px -4px rgba(0,0,0,0.1) border-black'):('')}`} key={index}>{element}</div>
                        )
                    })
                }
            </div>

            <div className="text-lg mt-8">A suite of products covering, testing on historical data, execution on live market, analysis & Live Trade available on a single platform.</div>

            <div className="text-3xl text-blue-600 font-semibold mt-10">Our features -:</div>

            {/* Features Begins */}
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-10">
                
                {/* <GridElement url={'https://www.unfluke.in/static/media/f1.e33baefd.jpg'} name={'Historical Intraday Charts'} description={'Get historical intraday charts of Equity , Features and Options'}></GridElement> */}
                {
                    gridData.map((element , index)=>{
                        return(
                            <GridElement key={index} url={element.url} name={element.name} description={element.description}></GridElement>
                        )
                    })
                }
                
               
            </div>
        </div>
    )
}

export default Features;