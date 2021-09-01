import { useParams } from "react-router-dom";
import DogDetails from "./DogDetails";
import NotFound from "./NotFound";

const DogFilter = ({ dogs }) => {
  const { name } = useParams();

  if (name) {
    const currentDog = dogs.find(
      dog => dog.name.toLowerCase() === name.toLowerCase()
    );
    if (currentDog === undefined) {
      return <NotFound thing={"Dog"} />
    } else {
      return <DogDetails dog={currentDog} />;
    }
  };
  return null;
};

export default DogFilter;