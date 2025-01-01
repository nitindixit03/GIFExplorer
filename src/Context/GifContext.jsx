import { createContext, useContext, useEffect, useState } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";

const GifContext = createContext();

const GifProvider = ({children}) =>{

    const [gifs, setGifs] = useState([]);
    const [filter, setFilter] = useState("gifs");
    const [favourites, setFavourites] = useState([]);

    const addToFavorites = (id) =>{
        if(favourites.includes(id)){
            const updatedFavourites = favourites.filter((itemId) => itemId !== id);
            localStorage.setItem("favouriteGIFs", JSON.stringify(updatedFavourites));
            setFavourites(updatedFavourites);
        }else{
            const updatedFavourites = [...favourites];
            updatedFavourites.push(id);
            localStorage.setItem("favouriteGIFs", JSON.stringify(updatedFavourites));
            setFavourites(updatedFavourites);
        }
    }

    useEffect(()=>{
        const favourites = JSON.parse(localStorage.getItem("favouriteGIFs")) || [];
        setFavourites(favourites);
    },[])

    const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_KEY);
    
    // const apiKey = import.meta.env.VITE_GIPHY_KEY;
    // if (!apiKey) {
    //   console.error("API Key not found!");
    //   return <div>Error: API Key is missing!</div>;
    // }
    // const gf = new GiphyFetch(apiKey);

    return <GifContext.Provider value={{gf, gifs, setGifs, filter, setFilter, favourites, addToFavorites}}>
        {children}
    </GifContext.Provider>;
};

export const GifState = () =>{
    return useContext(GifContext);
}

export default GifProvider;