import React from 'react';
import { IEpisode, IEpisodeProps } from './interfaces';
import { Store } from './Store';

const EpisodesList: React.FC<IEpisodeProps> = (props): JSX.Element => {
  const { episodes, toggleFavAction, favorites } = props;
  const { state, dispatch } = React.useContext(Store);

  return (
    <>
      {episodes.map((episode: IEpisode) => {
        return (
          <section key={episode.id} className='episode-box'>
            {/* <img
              src={episode.image.medium}
              alt={`Rick and Morty ${episode.name}`}
            /> */}
            <div>{episode.name}</div>
            <section
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <div>
                Season: {episode.season} Number: {episode.number}
              </div>
              <button
                type='button'
                onClick={() => toggleFavAction(state, dispatch, episode)}
              >
                {favorites.find((fav: IEpisode) => fav.id === episode.id)
                  ? 'Unfav'
                  : 'Fav'}
              </button>
            </section>
          </section>
        );
      })}
    </>
  );
};

export default EpisodesList;
