import React from 'react'
import { GifState } from '../Context/GifContext'
import { HiMiniArrowTrendingUp } from 'react-icons/hi2';

const filters = [
    {
        title: "GIFs",
        value: "gifs",
        background: "bg-indigo-500",
    },
    {
        title: "Stickers",
        value: "stickers",
        background: "bg-green-400",
    },
    {
        title: "Text",
        value: "text",
        background: "bg-blue-400",
    },
]

const FilterGif = ({alignLeft = false, showTrending = false}) => {
    const {filter, setFilter} = GifState();
    // console.log('Current filter:', filter);

  return (
    <div className={`flex my-3 gap-3 ${alignLeft ? "" : "justify-end"} ${showTrending ? "justify-between flex-col sm:flex-row sm:items-center" : ""}`}>
      {showTrending && (
        <span className='flex gap-2'> 
            {showTrending && (
                <HiMiniArrowTrendingUp size={25} className='text-teal-400'/>
            )}
            <span className='font-semibold text-gray-400'>Trending</span>
        </span>
       )}


       <div className='flex min-w-80 rounded-full bg-gray-800'>
        {filters.map((f)=>{
            return ( 
            <span onClick={() => setFilter(f.value)}
            className={`${filter === f.value ? f.background : ""} font-semibold py-2 w-1/3 text-center rounded-full cursor-pointer`} 
            key={f.title} >{f.title}</span> 
            );
        })}
       </div>

    </div>
  );
}

export default FilterGif
