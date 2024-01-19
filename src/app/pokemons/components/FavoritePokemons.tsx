'use client'

import { useAppSelector } from "@/store"
import { PokemonGrid } from ".."
import { useEffect, useState } from "react"
import Image from "next/image"


export const FavoritePokemons = () => {

    const favoritePokemons = useAppSelector(state => Object.values(state.pokemons.favorites) )

    // const [pokemons, setPokemons] = useState(favoritePokemons);

    // useEffect(() => {
    //   setPokemons(favoritePokemons)
    // }, [favoritePokemons])
    


    return (
        <>
        {
            favoritePokemons.length === 0 
                ? (<NoFavotites />)
                : (<PokemonGrid pokemons={favoritePokemons} />)
        }
        </>
  )

}


export const NoFavotites = () => {
    return (
      <div className="flex flex-col h-[50vh] items-center justify-center">
      <Image
              
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/491.svg`}
                      width={250}
                      height={250}
                      alt={'Not found'}
                      priority={false}
                      style={{opacity:0.1}}                    
                  />
        <span className="text-3xl"> No hay Favoritos </span>
      </div>
    )
  }