export interface IState {
  episodes: Array<IEpisode>;
  favorites: Array<IEpisode>;
}

export interface IAction {
  type: string;
  payload?: any;
}

export interface IEpisode {
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

export interface IEpisodeProps {
  episodes: Array<IEpisode>;
  store: { state: IState; dispatch: any };
  toggleFavAction: (state: IState, dispatch: any, episode: IEpisode) => IAction;
  favorites: Array<IEpisode>;
}
