import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const ColorForm = () => {
  const [color, setColor] = useState('');
  const history = useHistory();

  const handleChange = (e) => {
    setColor(e.target.value)
  };

  // const storeEmail = () => {
  //   alert("STORING EMAIL");
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // storeEmail(email);
    history.push('/colors');
  };

  return (
    <div>
      <h1>New Color Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="color"
          value={color}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ColorForm