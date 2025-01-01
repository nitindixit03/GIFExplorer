import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import { HiEllipsisVertical, HiMiniBars3BottomRight} from "react-icons/hi2";
import { GifState } from '../Context/GifContext';
import GifSearch from './GifSearch';


const Header = () => {

    const [catagories, setCategories] = useState([]);
    const [showCategories, setShowCategories] = useState(false);
    const [loading, setLoading] = useState(true);

    const {gf, favourites} = GifState();

    const fetchGifCategories = async () => {
        try {
            const { data } = await gf.categories();
            setCategories(data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(()=>{
        fetchGifCategories();
    },[]);

  return (
    <nav>
        <div className='relative flex gap-4 justify-between items-center mb-2'>
           <Link to='/' className='flex gap-2'>
                <img src='/logo.svg' className='w-7' alt='Giphy Logo'></img>
                <h1 className='text-4xl sm:text-5xl font-bold tracking-tight cursor-pointer '>GIPHY</h1>
           </Link> 
        <div className='font-bold text-md flex gap-2 items-center'>
            {/* render catagories */}

            {catagories.slice(0,5)?.map((category)=>{
                
              return(
              <Link 
                key={category.name} 
                to={`${category.name_encoded}`}
                className='px-4 py-1 hover:gradient border-b-4 hidden lg:block' >
                {category.name}
                </Link>
                );
            })}

            <button onClick={() => setShowCategories(!showCategories)} > <HiEllipsisVertical size={35} className={`py-0.5 hover:gradient ${showCategories ? "gradient" : ""} border-b-4 hidden lg:block`} /> </button>

            {favourites.length > 0 && <div className='h-10 bg-gray-700 pt-1.5 px-2 sm:px-6  cursor-pointer rounded'>
                <Link to='/favourite' className="text-white truncate block">Favourite GIFs</Link>
            </div>}

            <button>
                <HiMiniBars3BottomRight  onClick={()=> setShowCategories(!showCategories)} className='text-sky-400 block lg:hidden' size={30}/>
            </button>
        </div>    

         {showCategories && (
             <div className='absolute right-0 top-14 px-10 pt-6 pb-9 w-full gradient z-20'>
                <span className='text-3xl font-extrabold'>Categories</span>
                <hr className='br-gray-100 opacity-50 my-5'/>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6'>
                    {catagories?.map((category)=>{
                        
                       return(
                         <Link 
                            className={`font-bold ${showCategories ? "text-white" : "text-gray-700"}`}
                            key={category.name}
                            to={`${category.name_encoded}`}
                            onClick={() => setShowCategories(!showCategories)}
                            >
                         {category.name}
                         </Link>
                       );
                    })}
                </div>
             </div>
            )} 
        </div>

        {/* Search */}
        <GifSearch />
        
    </nav>
  )
}

export default Header
