import ReactPlayer from 'react-player/youtube'

function Videos() {
    return (
        <div>
            <div className="text-3xl text-blue-600 text-center mt-10 font-semibold">Videos</div>

            <div className='mt-10 max-w-[1180px] w-[80%] gap-10 justify-center mx-auto   flex flex-col min-[1000px]:flex-row items-center'>

                <div className='flex flex-col bg-white items-center min-[1000px]:w-[30%] w-[80%] hover:scale-110 transition-all duration-200 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>   
                <div className='w-[100%] min-[1000px]:h-[200px] md:h-[400px] h-[200px]'>
                <ReactPlayer
                    className='react-player'
                    url='https://youtu.be/ojWYS02VZws?si=Dr6aJA56gphjJ0WA'
                    width='100%'
                    height='100%'
                />
                </div>

                <div className='text-center text-xl my-6'>How to use Basic Backtester (Hindi) </div>
                </div>

                <div className='flex flex-col min-[1000px]:w-[30%] w-[80%] bg-white items-center  hover:scale-110 transition-all duration-200 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>   
                   <div className='w-[100%] min-[1000px]:h-[200px] md:h-[400px] h-[200px]'>
                   <ReactPlayer
                    className='react-player'
                    url='https://youtu.be/fnPW70uc3NI?si=OdBHg19wNCLIX-xB'
                    width='100%'
                    height='100%'
                />
                   </div>

                <div className='text-center text-xl my-6'>How to use Advanced Backtester (Hindi) </div>

                </div>

                <div className='flex flex-col min-[1000px]:w-[30%] w-[80%] bg-white items-center  hover:scale-110 transition-all duration-200 shadow-[0_3px_10px_rgb(0,0,0,0.2)]' >    
                  <div className='w-[100%] min-[1000px]:h-[200px] md:h-[400px] h-[200px]'>
                  <ReactPlayer
                    className='react-player'
                    url='https://youtu.be/SCEzG1ScQFE?si=6bd6HlghKFlXRbCz'
                    width='100%'
                    height='100%'
                />
                  </div>

<div className='text-center text-xl my-6'> How to use Alerts (Hindi) </div>
                </div>
            </div>
        </div>
    )
}

export default Videos;