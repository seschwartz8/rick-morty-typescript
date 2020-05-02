import React from 'react';
import { Store } from './Store';

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
      {console.log(state)}
      <h1>Rick and Morty</h1>
    </>
  );
};

export default App;
