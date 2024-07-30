import { players } from './data';

export const resolvers = {
  Query: {
    players: () => players,
  },
};