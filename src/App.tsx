import React from 'react';
import { Store } from './Store';
import { IAction, IEpisode } from './interfaces';
// Lazy loading of components
const EpisodesList = React.lazy(() => import('./EpisodesList'));

const App = (): JSX.Element => {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  }, []);

  const fetchDataAction = async () => {
    const URL =
      'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';
    const data = await fetch(URL);
    const dataJSON = await data.json();
    const episodes = dataJSON._embedded.episodes;
    return dispatch({
      type: 'FETCH_DATA',
      payload: episodes,
    });
  };

  const toggleFavAction = (episode: IEpisode): IAction => {
    const episodeInFavorites = state.favorites.includes(episode);
    let dispatchObj = { type: 'ADD_FAV', payload: episode };
    if (episodeInFavorites) {
      const favoritesWithoutEpisode = state.favorites.filter(
        (fav: IEpisode) => fav.id !== episode.id
      );
      dispatchObj = { type: 'REMOVE_FAV', payload: favoritesWithoutEpisode };
    }
    return dispatch(dispatchObj);
  };

  const props = {
    episodes: state.episodes,
    toggleFavAction,
    favorites: state.favorites,
  };

  return (
    <>
      <h1 className='header'>Rick and Morty</h1>

      <React.Suspense fallback={<div>Loading...</div>}>
        <section className='episode-layout'>
          <EpisodesList {...props} />
        </section>
      </React.Suspense>
    </>
  );
};

export default App;
