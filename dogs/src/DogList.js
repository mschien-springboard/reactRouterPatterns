import './DogList.css';
import { Link } from 'react-router-dom';

const DogList = ({ dogs }) => {
  return (
    <div className="DogList">
      <div className="DogList-title">
        <h1>Here is a list of dogs</h1>
      </div>
      <div className="DogList-dogs">
        {dogs.map(dog => (
          <div className="DogList-dog"key={dog.name}>
            <Link to={`/dogs/${dog.name.toLowerCase()}`}>
              <img src={dog.src} alt={dog.name} />
            </Link>
            <h3>
              <Link to={`/dogs/${dog.name.toLowerCase()}`}>
                {dog.name}
              </Link>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DogList;