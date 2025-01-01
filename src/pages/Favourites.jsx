import React, { useEffect, useState } from 'react'
import { GifState } from '../Context/GifContext'
import Gif from '../components/Gif';

const Favourites = () => {
  const [favouriteGIFs, setFavouriteGifs] = useState([]);

  const {gf, favourites} = GifState();

  const fetchFavouriteGIFs = async ()=>{
    const {data: gifs} = await gf.gifs(favourites);
    setFavouriteGifs(gifs);
  }

  useEffect(()=>{
    fetchFavouriteGIFs();
  },[]);

  return (
    <div className='mt-25'>
        <span className='faded-text'>My Favourites</span>
        <div className='coloumns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2 mt-2'>
          {favouriteGIFs.map((gif) => (
            <Gif gif={gif} key={gif.id} />
          ))}
        </div>
    </div>
  )
}

export default Favourites
