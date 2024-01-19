import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SimplePokemon } from '@/app/pokemons';

interface PokemonsState {
    favorites:{[key: string]: SimplePokemon},
}

// const getInitialState = ():PokemonsState =>{

//   //if(typeof localStorage === 'undefined') return {};
//   const favorites = JSON.parse(localStorage.getItem('favorite-Pokemons')?? '{}')
//   return favorites;
// }

const initialState:PokemonsState = {
  favorites: {},
  //...getInitialState(),

//  '152':{id:'152', name: 'chikorita'}
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {

    setFavoritePokemons(state, action: PayloadAction<{[key: string]: SimplePokemon}>) {
      state.favorites = action.payload;
    },

    toggleFavorite(state, action: PayloadAction<SimplePokemon>){
        const pokemon = action.payload;
        const {id} = pokemon;
        if(!!state.favorites[id]){
            delete state.favorites[id];
            return;
        }else {
          state.favorites[id] = pokemon;
        }
        //mala practica
        localStorage.setItem('favorite-Pokemons', JSON.stringify(state.favorites));
    }
  }
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions

export default pokemonsSlice.reducer