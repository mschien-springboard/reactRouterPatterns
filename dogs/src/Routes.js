import { Route, Switch, Redirect } from 'react-router-dom';
import DogList from './DogList';
import DogFilter from './DogFilter';

const Routes = ({dogs}) => {
  return (
    <Switch>
      <Route exact path='/dogs'><DogList dogs={dogs}/></Route>
      <Route exact path='/dogs/:name'><DogFilter dogs={dogs} /></Route>
      <Redirect to='/dogs'></Redirect>
    </Switch >
  )
};

export default Routes;