import {dashboard_data} from '../data/dashboard'
import { MdArrowOutward } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { FaTrophy } from "react-icons/fa6";


function Dashboard()
{
    return (
        <div>

            <div className="max-w-[1180px] mt-20 border-2 mx-auto shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
            <div className="text-3xl mt-7 pl-7">LeaderBoard</div>

            <div className='w-[95%] mx-auto border-2 border-black mt-7 mb-7'>

                {/* <div className='flex flex-row mt-5'>
                    <div className='w-[10%] bg-gradient-to-r from-blue-500 to to-blue-500 border-white border-2 text-center font-semibold px-2 py-1 text-white flex justify-center items-center'><span>Rank</span></div>
                    <div className='w-[30%] bg-gradient-to-r from-blue-500 to to-blue-500 border-white border-2 text-center font-semibold px-2 py-1 text-white flex justify-center items-center'><span>Name</span></div>
                    <div className='w-[10%] bg-gradient-to-r from-blue-500 to to-blue-500 border-white border-2 text-center font-semibold px-2 py-1 text-white flex justify-center items-center'><span>Calmar Ratio</span></div>
                    <div className='w-[10%] bg-gradient-to-r from-blue-500 to to-blue-500 border-white border-2 text-center font-semibold px-2 py-1 text-white flex justify-center items-center'><span>Overall Profit</span></div>
                    <div className='w-[10%] bg-gradient-to-r from-blue-500 to to-blue-500 border-white border-2 text-center font-semibold px-2 py-1 text-white flex justify-center items-center'><span>Avg. Daily Profit</span></div>
                    <div className='w-[10%] bg-gradient-to-r from-blue-500 to to-blue-500 border-white border-2 text-center font-semibold px-2 py-1 text-white flex justify-center items-center'><span>Win(%) Day</span></div>
                    <div className='w-[10%] bg-gradient-to-r from-blue-500 to to-blue-500 border-white border-2 text-center font-semibold px-2 py-1 text-white flex justify-center items-center'><span>Price(Rs)</span></div>
                    <div className='w-[10%] bg-gradient-to-r from-blue-500 to to-blue-500 border-white border-2 text-center font-semibold px-2 py-1 text-white flex justify-center items-center'><span>Action</span></div>
                    <div className='w-[10%] bg-gradient-to-r from-blue-300 to to-blue-500 border-white text-center font-semibold px-2 py-1 text-white'>Rank</div>
                </div> */}

                {/* {
                    dashboard_data.map((element , index)=>{
                        return(
                            
                <div key={index} className='flex flex-row mt-5'>
                    <div className='w-[10%]  border border-black text-center font-semibold px-2 py-1 text-black flex justify-center items-center'><span>{index+1}</span></div>
                    <div className='w-[30%]  border border-black  text-center font-semibold px-2 py-1  flex justify-center items-center'><span>{element.name}</span></div>
                    <div className='w-[10%]  border border-black  text-center font-semibold px-2 py-1  flex justify-center items-center'><span>{element.calmar_ratio}</span></div>
                    <div className='w-[10%]  border border-black  text-center font-semibold px-2 py-1  flex justify-center items-center'><span>{element.overall_profit}</span></div>
                    <div className='w-[10%]  border border-black  text-center font-semibold px-2 py-1  flex justify-center items-center'><span>{element.daily_profit}</span></div>
                    <div className='w-[10%]  border border-black  text-center font-semibold px-2 py-1  flex justify-center items-center'><span>{element.win_percentage}</span></div>
                    <div className='w-[10%]  border border-black  text-center font-semibold px-2 py-1  flex justify-center items-center'><span>{element.price_rs}</span></div>
                    <div className='w-[10%]  border border-black  text-center font-semibold px-2 py-1  flex justify-center items-center'><span>{element.action}</span></div>
                    <div className='w-[10%] bg-gradient-to-r from-blue-300 to to-blue-500 border-white text-center font-semibold px-2 py-1 text-white'>Rank</div>
                </div>

                        )
                    })
                } */}

<table className='w-[100%]'>
        <thead>
          <tr className='bg-blue-300'>
            <th className='border border-black py-2'>Rank</th>
            <th className='w-[30%] border border-black py-2'>Name</th>
            <th className='text-center border border-black py-2'>Calmar Ratio</th>
            <th className='text-center border border-black py-2'>Overall Profits</th>
            <th className='text-center border border-black py-2'>Avg. Daily Profit</th>
            <th className='text-center border border-black py-2'>Win % Daily</th>
            <th className='text-center border border-black py-2'>Price (Rs) </th>
            <th className='text-center border border-black py-2'>Action</th>
          </tr>
        </thead>
        <tbody className='bg-gradient-to-br from-white via-blue-50 to-white'>
          {dashboard_data.map((value, index) => {
            return (
              <tr key={index}>
                <td className='text-center border border-gray-600 py-2'>
                    {
                        (index+1==1)?
                        (<FaTrophy  className='text-yellow-600 text-xl mx-auto'/>
                    ):(<span>{index+1}</span>)
                    }
                </td>
                <td className='text-center border border-gray-600 py-2'>{value.name}</td>
                <td className='text-center border border-gray-600 py-2'>{value.calmar_ratio}</td>
                <td className={`text-center border border-gray-600 py-2 ${(value.overall_profit>0)?('text-green-700'):('text-red-500')}`}>{value.overall_profit}</td>
                <td className={`text-center border border-gray-600 py-2 ${(value.daily_profit>0)?('text-green-700'):('text-red-500')}` } > {value.daily_profit} </td>
                <td className='text-center border border-gray-600 py-2'>{value.win_percentage}</td>
                <td className='text-center border border-gray-600 py-2'>{value.price_rs}</td>
                <td className='text-center border border-gray-600 py-2'>
                    {
                        (value.action == 'View')?
                        
                        (<div className='flex flex-row gap-x-1 px-1 py-1  mx-1 cursor-pointer rounded-lg bg-blue-300 text-white justify-center items-center font-semibold'>
                            <div>View</div>
                            <MdArrowOutward />
                        </div>):
                        
                        (<div className='flex flex-row gap-x-1 px-1 mx-1 py-1 cursor-pointer rounded-lg bg-green-300 text-white justify-center items-center font-semibold'>
                        <div>Buy</div>
                        <CiShoppingCart />
                    </div>)
                    }
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

            </div>

            </div>

           
        </div>
    )
}

export default Dashboard;