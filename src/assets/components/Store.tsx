import Nav from "../components/Nav";
import { useQuery, gql } from "@apollo/client";

// use the 'useQuery' hook to fetch data from GraphQl server
const PRODUCTS_QUERY = gql`
  query GetProducts {
    Products {
      id
      title
      price
      description
      thumbnail
    }
  }
`;

const Store = () => {
  const { loading, error, data } = useQuery(PRODUCTS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Nav />
      <div>
        {data.Products.map(
          (product: {
            id: string;
            title: string;
            price: number;
            description: string;
            thumbnail: string;
          }) => (
            <div key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default Store;
