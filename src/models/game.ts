import { UnixTimestamp, WithId } from "./common";

export interface Game {
  batch_id: string;
  host?: string;
  start_time?: UnixTimestamp;
  address?: string;
}

export type GameWithId = WithId<Game> & {
  unique_game_code: string;
};
