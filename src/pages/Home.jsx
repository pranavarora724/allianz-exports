import Hero_section from "../components/Hero_section";
import Features from "../components/Features";
import Videos from "../components/Videos";
import Footer from "../components/Footer";

function Home()
{
    return(
        <div>
            <Hero_section></Hero_section>
     

     <div className='border-2  md:-translate-y-[180px] -translate-y-[100px] bg-sky-50 bg-opacity-60'>
          
          {/* Stats section */}
          <div  className='bg-sky-200'>
          <div className='max-w-[1180px] w-[100%] flex flex-row justify-between items-center bg-sky-200 py-2 mx-auto'>
               
               <div className='flex flex-col gap-y-2 text-black justify-center'>
                  <div className='text-2xl'>20k +</div>
                  <div>Backtests Done</div>
               </div>

               <div className='flex flex-col gap-y-2 text-black justify-center'>
                  <div className='text-2xl'>5k +</div>
                  <div>Live Trades</div>
               </div>

               <div className='flex flex-col gap-y-2 text-black justify-center'>
                  <div className='text-2xl'>1000 +</div>
                  <div>Traders</div>
               </div>

               <div className='flex flex-col gap-y-2 text-black justify-center'>
                  <div className='text-2xl'>200 +</div>
                  <div>Community Members</div>
               </div>
          </div>
          </div>

          <Features></Features>

          <Videos></Videos>

          <Footer></Footer>
          
     </div>
        </div>
    )
}

export default Home;