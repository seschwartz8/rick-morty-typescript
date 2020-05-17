import React from 'react';
import { Link } from 'react-router-dom';
import { Store } from './Store';
import { IHeaderProps } from './interfaces';

const Header: React.FC<IHeaderProps> = () => {
  const { state } = React.useContext(Store);

  return (
    <header className='header'>
      <h1>Rick and Morty</h1>
      <div
        style={{
          width: '20vw',
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <Link to='/'>Home</Link>
        <Link to='/favorites'>Favorites(s): {state.favorites.length}</Link>
      </div>
    </header>
  );
};

export default Header;
