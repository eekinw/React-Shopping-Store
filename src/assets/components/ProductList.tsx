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

const ProductCard = () => {
  const { loading, error, data } = useQuery(PRODUCTS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <div>
        <div className=" bg-yellow-200">
          <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10">
            {data.Products.map(
              (product: {
                id: string;
                title: string;
                price: number;
                description: string;
                thumbnail: string;
              }) => (
                <div className="bg-white rounded-lg" key={product.id}>
                  <img
                    className="rounded-t-lg w-full "
                    src={product.thumbnail}
                    alt={product.title}
                  />
                  <div className="p-2">
                    <h2 className="italic">{product.title}</h2>
                    <p className=" font-bold">Price: ${product.price}</p>
                    <p>{product.description}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
