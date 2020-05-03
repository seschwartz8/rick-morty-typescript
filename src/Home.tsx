import React from 'react';
import { Store } from './Store';
import { IEpisodeProps } from './interfaces';
import { fetchDataAction, toggleFavAction } from './Actions';
// Lazy loading of components
const EpisodesList = React.lazy(() => import('./EpisodesList'));

export default function Home() {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  }, []);

  const props: IEpisodeProps = {
    episodes: state.episodes,
    store: { state, dispatch },
    toggleFavAction,
    favorites: state.favorites,
  };

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <section className='episode-layout'>
        <EpisodesList {...props} />
      </section>
    </React.Suspense>
  );
}
