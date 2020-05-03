import React from 'react';
import { Store } from './Store';
import { toggleFavAction } from './Actions';
import { IEpisodeProps } from './interfaces';

// Lazy loading of components
const EpisodesList = React.lazy(() => import('./EpisodesList'));

export default function Favorites(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);

  const props: IEpisodeProps = {
    episodes: state.favorites,
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
