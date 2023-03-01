import { CardDetails } from '../models/CardDetails'
import React from 'react'

const Card = ({cardTitle, cardContent, linkTo} : CardDetails) => {
  return (
    <div className="w-full p-4 shadow-md lg:max-w-lg bg-white rounded-lg">
            <div className="space-y-2 h-3/4" >
                <h3 className="text-2xl font-semibold">
                    {cardTitle}
                </h3>
                <p className="text-gray-600 space-y-4">
                    {cardContent}
                </p>
            </div>
            <div className='flex justify-center w-full h-full pt-4'>
            <div className='rounded w-1/4 h-1/4 bg-cyan-400 text-center aling' >
                <a href={linkTo} target="_blank" className='h-full justify-center items-center flex' rel="noreferrer">Check it out</a>
            </div>
            </div>
        </div>
  )
}

export default Card