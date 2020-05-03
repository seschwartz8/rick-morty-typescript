export interface IState {
  episodes: Array<any>;
  favorites: Array<any>;
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
