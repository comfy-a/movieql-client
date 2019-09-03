import gql from "graphql-tag";

export const HOME_PAGE = gql`
  {
    movies(limit: 10, rating: 8) {
      id
      title
      rating
      medium_cover_image
    }
  }
`;

export const MOVIE_DETAILS = gql`
  query getMovieDetails($id: Int!) {
    movie(id: $id) {
      medium_cover_image
      title
      rating
      description_intro
      language
      genres
    }
    suggestions(id: $id) {
      id
      title
      rating
      medium_cover_image
    }
  }
`;
