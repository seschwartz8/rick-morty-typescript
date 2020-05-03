import { IAction, IEpisodeProps, IEpisode, IState } from './interfaces';

export const fetchDataAction = async (dispatch: any) => {
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

export const toggleFavAction = (
  state: IState,
  dispatch: any,
  episode: IEpisode | any
): IAction => {
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
