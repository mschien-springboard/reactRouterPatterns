import { useParams } from "react-router-dom";
import DogDetails from "./DogDetails";

const DogFilter = ({ dogs }) => {
  const { name } = useParams();

  if (name) {
    const currentDog = dogs.find(
      dog => dog.name.toLowerCase() === name.toLowerCase()
    );
    return <DogDetails dog={currentDog} />;
  };
};

export default DogFilter;