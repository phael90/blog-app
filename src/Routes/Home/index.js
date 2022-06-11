import { useState} from 'react';

const Home = () => {
  const [name, setName] = useState('mario')
  const [age, setAge] = useState(33);
  
  const handleClick = () => {
    setName('luigi');
    setAge(22);
  };

  return (
  <header className="home">
    <h2>Homepage</h2>
    <p>{ name } is {age} years old</p>
    <button onClick={handleClick}>Click Me</button>
  </header>);
};

export default Home;
