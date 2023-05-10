import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";

const PRODUCT_QUERY = gql`
  query GetProduct($id: ID!) {
    Product(id: $id) {
      id
      title
      price
      description
      thumbnail
    }
  }
`;

const ProductDetails = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(PRODUCT_QUERY, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data.Product) return <p>Product not found!</p>;

  return (
    <div>
      <img src={data.Product.thumbnail} alt={data.Product.title} />
      <h2>{data.Product.title}</h2>
      <p>Price: ${data.Product.price}</p>
      <p>{data.Product.description}</p>
    </div>
  );
};

export default ProductDetails;
