import React from 'react';
import { Store } from './Store';
import { Link } from 'react-router-dom';

const App = (props: any): JSX.Element => {
  const { state } = React.useContext(Store);

  return (
    <>
      <header className='header'>
        <h1>Rick and Morty</h1>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/favorites'>Favorites(s): {state.favorites.length}</Link>
        </div>
      </header>
      {props.children}
    </>
  );
};

export default App;
