import './Nav.css';
import { NavLink } from 'react-router-dom';

const Nav = ({dogs}) => {
  const dogLinks = dogs.map(dog => (
  <NavLink key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`}>
    {dog.name}
  </NavLink>
  ));
  return (
    <nav className='Nav'>
      <NavLink exact to="/dogs">Home</NavLink>
      {dogLinks}
    </nav>
  );
};

export default Nav;