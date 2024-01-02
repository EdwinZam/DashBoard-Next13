
import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/app/pokemons";
//import { notFound } from "next/navigation";


export const metadata = {
 title: 'Pókemons 2da - 3ra GEN',
 description: 'Pókemons 2da - 3ra GEN',
};

const getPokemons = async(limit = 235, offset = 151):Promise<SimplePokemon[]> =>{
    const data:PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).
        then(res => res.json());

        const pokemons = data.results.map( pokemon => ({
            id: pokemon.url.split('/').at(-2)!,
            name: pokemon.name,
        }))

        // throw new Error('Esto es un error, Que yo genere, Amen');
        // throw notFound();

        return pokemons;
}

export default async function PokemonsPage() {
    const pokemons = await getPokemons(235, 151);
  return (
    <div className="flex flex-col">
        <span className="text-5xl my-2">Listado de Pokémons <small>estático</small></span>
        <PokemonGrid pokemons={pokemons} />
    </div>
  );
}