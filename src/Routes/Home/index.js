import { useState, useEffect} from 'react';
import BlogList from '../../BlogList';

const Home = () => {
  const [ blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
      .then(res => {
        console.log(res);
        if(!res.ok){
          console.log(res);
          throw Error('erm... sorry we could not fetch the data for that resource ¯\_(ツ)_/¯')
        }
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.message);
      })
    }, 1000)
  }, []);
  
  return (
  <section className="home">
    { error && <div>{ error }</div>}
    {isLoading && <div>Loading...</div> }
    {blogs && <BlogList blogs={blogs} title="All Blogs" />}
  </section>)
};

export default Home;
