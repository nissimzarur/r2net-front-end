import { gql } from "@apollo/client";

const FETCH_DIAMONDS = gql`
  query FetchDiamonds($filterDiamonds: DiamondDto!, $pagination: PaginationDto!) {
    fetchDiamonds(filterDiamonds: $filterDiamonds, pagination: $pagination) {
      items {
        _id
        price,
        shape,
        color,
        clarity,
        carat,
        cut,
        isLabDiamond
      }
      total
    }
  }
`;

export default FETCH_DIAMONDS;
