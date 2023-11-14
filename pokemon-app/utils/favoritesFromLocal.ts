
const favoritesFromLocal = ( id: number) => {    

    let favorites: number[] = getFavoritesFromLocal();

    if( !existInFavorite(id) ) {
        favorites.push(id);
    } else{
        favorites = favorites.filter( idx => idx !== id);
    }

    localStorage.setItem('favorites', JSON.stringify( favorites.sort( (a, b )=> a-b)) );
}


const existInFavorite = ( id: number): boolean => {

    if( typeof window === 'undefined' ) return false 

    const favorites: number[] =  getFavoritesFromLocal();

    return favorites.includes(id);
}

const getFavoritesFromLocal = (): number[] => {

    if( typeof window === 'undefined' ) return []


    return JSON.parse( localStorage.getItem('favorites') || '[]' );
}

export {
    favoritesFromLocal,
    existInFavorite,
    getFavoritesFromLocal
}

