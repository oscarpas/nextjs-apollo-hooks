import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

export const TestComp = props => {
  const { loading, error, data } = useQuery(gql`
    {
      pokemon(name: "Pikachu") {
        name
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <div>Data from Apollo hook query: {data.pokemon.name}</div>;
};

