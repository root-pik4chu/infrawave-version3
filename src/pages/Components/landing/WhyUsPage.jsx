import React from 'react'
import SwipperData from '../../../swipperData/SwipperData'



export default function WhyUsPage(){
  return (
    <div>
      <div className="w-full h-[90vh] flec items-center justify-between flex-col leading-none bg-zinc-50">
        <div className="w-full h-[35vh] grid grid-cols-5 p-[1vw] pt-[5vw]">
        <h1 className='col-start-1 col-end-5'>why us ???</h1>
         
        </div>
        <div className="w-full h-[88vh] flex items-center justify-center flex-col ">
            
          <div className="w-[75%] h-full"><SwipperData /></div>
        </div>
      </div>
    </div>
  )
}





