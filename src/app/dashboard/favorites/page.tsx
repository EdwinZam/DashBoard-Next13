
import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/app/pokemons";
//import { notFound } from "next/navigation";


export const metadata = {
 title: 'Favoritos',
 description: 'Pókemons 2da - 3ra GEN',
};


export default async function PokemonsPage() {
    
  return (
    <div className="flex flex-col">
        <span className="text-5xl my-2">Pokémons Favoritos <small className="text-indigo-500"> Redux - Global state</small></span>
        <PokemonGrid pokemons={[]} />
    </div>
  );
}