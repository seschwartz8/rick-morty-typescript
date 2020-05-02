import React from 'react';

interface IState {
  episodes: [];
  favorites: [];
}

const initialState: IState = {
  episodes: [],
  favorites: [],
};

interface IAction {
  type: string;
  payload?: any;
}

export const Store = React.createContext<IState | any>(initialState);

const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, episodes: action.payload };
    default:
      return state;
  }
};

export const StoreProvider = (props: any): JSX.Element => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  // Anything inside will be wrapped in the provider, passing it the state value
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
};
