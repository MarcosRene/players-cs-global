import { gql } from 'graphql-request';

export const GET_PAGES = gql`
  query getPages($first: Int) {
    pages(first: $first) {
      id
      heading
      slug
    }
  }
`;

export const GET_PAGE_BY_SLUG = gql`
  query getPageBySlug($slug: String!) {
    page(where: { slug: $slug }) {
      id
      slug
      heading
      body {
        html
      }
    }
  }
`;

export const GET_PLAYERS = gql`
  query getPlayers($first: Int) {
    players(first: $first) {
      id
      slug
      avatar {
        url
      }
      nick
      name
      age
      team
      major
      ratio
      dpr
      kast
      impact
      adr
      kpr
    }
  }
`;

export const GET_PLAYER_BY_SLUG = gql`
  query getPlayerBySlug($slug: String!) {
    player(where: { slug: $slug }) {
      id
      slug
      avatar {
        url
      }
      nick
      name
      age
      team
      major
      ratio
      dpr
      kast
      impact
      adr
      kpr
    }
  }
`;
