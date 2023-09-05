import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
  }
`;

export const SAVE_BOOK = gql`
mutation Mutation($bookData: BookDataInput) {
  saveBook(bookData: $bookData) {
    _id
    username
    email
    savedBooks {
      authors
      bookId
      description
      image
      link
      title
    }
  }
}
`;

export const REMOVE_BOOK = gql`
mutation Mutation($bookId: ID!) {
  removeBook(bookId: $bookId) {
    _id
    username
    email
    savedBooks {
      authors
      bookId
      description
      image
      link
      title
    }
  }
}
`;

