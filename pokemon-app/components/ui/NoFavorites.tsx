import { Container, Image, Text } from "@nextui-org/react";
 
const NoFavorite = () => {
    return (
        
        <div title="No hay pokemons favorites">
            <Container css={{
                display: 'flex',
                flexDirection: 'column',
                height: 'calc(100vh - 100px)',
                alignContent: 'center',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text>No hay pokemon favoritos</Text>
                <Image 
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
                    alt="Pokemon default"
                    width={250}
                    height={250}
                    css={{
                        opacity: 0.1
                    }}
                />
            </Container>
        </div>
         );
            
}
 
export default NoFavorite;