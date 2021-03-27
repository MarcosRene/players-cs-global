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
  query getPlayers {
    players {
      id
      nick
      slug
      avatar {
        url
      }
      name
      age
      team
      major
    }
  }
`;
