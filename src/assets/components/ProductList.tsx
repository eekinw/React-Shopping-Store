import { useQuery, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(PRODUCTS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <div>
        <div className=" bg-slate-300">
          <button
            className="bg-blue-100 py-2 px-4 rounded-lg cursor-pointer"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 p-12">
            {data.Products.map(
              (product: {
                id: string;
                title: string;
                price: number;
                description: string;
                thumbnail: string;
              }) => (
                <div className="bg-white rounded-lg relative" key={product.id}>
                  <img
                    className="rounded-t-lg w-full "
                    src={product.thumbnail}
                    alt={product.title}
                  />
                  <div className="p-2 mb-10">
                    <h2 className="italic">{product.title}</h2>
                    <p className=" font-bold">Price: ${product.price}</p>
                    <p>{product.description}</p>
                  </div>
                  <div className="absolute bottom-0 right-0 p-2">
                    <button
                      onClick={() => navigate(`/store/${product.id}`)}
                      className="bg-blue-100 py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-200"
                    >
                      View Details
                    </button>
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
