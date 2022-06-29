import { gql } from '@apollo/client';

export const getTransaction = gql`
  query {
    getTransaction {
      description
      date
      value
      subcategory {
        id
        name
        category {
          name
          id
        }
      }
      account {
        id
        name
      }
      user {
        id
        name
      }
      tag {
        id
        name
      }
    }
  }
`;

export const getAllCategories = gql`
  query {
    allCategories {
      name
      id
      subCategories {
        name
        id
      }
    }
  }
`;

export const getTags = gql`
  query {
    getTags {
      id
      name
    }
  }
`;

export const createNewTag = gql`
  mutation createTag($name: String!) {
    createTag(input: { name: $name }) {
      name
      id
    }
  }
`;

export const createNewCategory = gql`
  mutation ($name: String!) {
    createCategory(input: { name: $name }) {
      name
    }
  }
`;
