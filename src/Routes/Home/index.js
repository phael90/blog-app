const Home = () => {

  const handleClick = (e) => {
    console.log("Hello Raphael", e);
  };

  const handleClickAgain = (name) => {
    console.log("Hi " + name);
  }
  return (
  <header className="home">
    <h2>Homepage</h2>
    <button onClick={handleClick}>Click Me</button>
    <button onClick={() => handleClickAgain("Rapha")}>Click Me Again</button>
  </header>);
};

export default Home;
