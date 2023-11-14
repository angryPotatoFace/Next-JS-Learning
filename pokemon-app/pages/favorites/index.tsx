import { useEffect, useState, FC } from 'react';

import { GetStaticProps, NextPage } from 'next';
import { Grid } from '@nextui-org/react';

import { Layout } from '../../components/layouts';
import NoFavorite from '../../components/ui/NoFavorites';
import { PokemonCard } from '../../components/pokemon';
import { pokeApi } from '../../api';
import { PokemonListResponse, SmallPokemon } from '../../interfaces';
import { getFavoritesFromLocal } from '../../utils';


interface Props {
  pokemons: SmallPokemon[];
}


const FavoritesPage: NextPage<Props> = ({ pokemons }) => {

  const [favorites, setfavorites] = useState<number[]>([]);

  useEffect(() => {
    setfavorites( getFavoritesFromLocal() );
  }, []);
  


  return (
      <Layout title='Pokémons - Favoritos'>
        
        {
          pokemons.length !== 0 ?
              <Grid.Container gap={ 2 } justify='flex-start'>
              {
                pokemons.map( ( pokemon ) => (
                  ( favorites.includes( pokemon.id) )?
                   <PokemonCard key={ pokemon.id } pokemon={ pokemon } />
                   :
                   <div/>
                ))
              }
            </Grid.Container>
            :
            <NoFavorite />
        }
      
      </Layout>
  )
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  
  let pokemons: SmallPokemon[] = data.results.map( (poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ i + 1 }.svg`
  }) )

  return {
    props: {
      pokemons
    }
  }
}

export default FavoritesPage;
