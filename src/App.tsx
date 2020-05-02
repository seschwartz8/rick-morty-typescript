import React from 'react';
import { Store } from './Store';

interface IEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  airdate: string;
  airstamp: string;
  airtime: string;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
}

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

  return (
    <>
      <h1 className='header'>Rick and Morty</h1>
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
                Season: {episode.season} Number: {episode.number}
              </section>
            </section>
          );
        })}
      </section>
    </>
  );
};

export default App;
