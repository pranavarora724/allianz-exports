import { MdOutlineArrowOutward } from "react-icons/md";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";



    



function GridElement(props)
{
    const {contextSafe} = useGSAP();
    const image = useRef();
    const popup = useRef();
    const name = useRef();

    const showPopup = contextSafe(()=>{
        gsap.to(popup.current,{
            y:0,
            duration:0.2,
            opacity:1
        })

        gsap.to(name.current,{
            duration:0,
            opacity:0
        })

        gsap.to(image.current ,{
            'webkitFilter':'blur(5px)'
        })
        
    })

    const hidePopup = contextSafe(()=>{
        gsap.to(popup.current,{
            y:120,
            duration:0.2,
            opacity:0
        })

        gsap.to(name.current,{
            duration:0,
            opacity:1
        })
        gsap.to(image.current ,{
            'webkitFilter':'blur(0px)'
        })
        
    })

    return(
        <div onMouseEnter={showPopup} onMouseLeave={hidePopup}  className=" flex flex-col gap-y-4 relative">
                    <img ref={image} className="image" src={`${props.url}`}></img>
                    <div ref={name} className="text-center text-2xl name">{props.name}</div>

                    {/* Pop up box */}
                    <div ref={popup} className="popup
                     absolute bottom-7  p-4 py-1  left-0 w-full bg-blue-white translate-y-[120px] opacity-0 ">
                        <div className="text-xl mt-2 font-semibold">{props.name}</div>
                        <div className="mt-2">{props.description}</div>
                        <div className="px-4 py-2 mt-2 w-fit rounded-full bg-blue-500 text-white flex flex-row gap-x-1 items-center">
                            <div className="cursor-pointer">Know More</div>
                            <MdOutlineArrowOutward />
                        </div>
                    </div>
                </div>
    )
}

export default GridElement;