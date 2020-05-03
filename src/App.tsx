import React from 'react';
import { Store } from './Store';
import { IAction, IEpisode } from './interfaces';

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

  return (
    <>
      <h1 className='header'>Rick and Morty</h1>
      {console.log(state.favorites)}
      <section className='episode-layout'>
        {state.episodes.map((episode: IEpisode) => {
          return (
            <section key={episode.id} className='episode-box'>
              {/* <img
                src={episode.image.medium}
                alt={`Rick and Morty ${episode.name}`}
              /> */}
              <div>{episode.name}</div>
              <section>
                <div>
                  Season: {episode.season} Number: {episode.number}
                </div>
                <button type='button' onClick={() => toggleFavAction(episode)}>
                  Fav
                </button>
              </section>
            </section>
          );
        })}
      </section>
    </>
  );
};

export default App;
