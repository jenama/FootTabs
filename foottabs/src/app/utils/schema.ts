import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Player {
    firstname: String!
    lastname: String!
    age: Int!
    team: String!
    country: String!
    numberOfGoals: Int!
    assists: Int!
    trophies: Int!
  }

  type Query {
    players: [Player!]!
  }
`;