import './DogDetails.css';
import { Link } from 'react-router-dom';


const DogDetails = ({ dog }) => {

  return (
    <div className="DogDetails">
      <div className="DogDetails-title">
        <h1>Here is info for {dog.name}</h1>
      </div>
      <div className="DogDetails-dogs">
        <img src={dog.src} alt={dog.name} />
        <h2>{dog.name}</h2>
        <h3>Age: {dog.age}</h3>
        <ul>
          {dog.facts.map((fact, i) => (
            <li key={i}>{fact}</li>
          ))}
        </ul>
      </div>
      <Link to="/dogs">Go Back</Link>
    </div>
  );
};

export default DogDetails;