import { useState, useEffect} from 'react';
import BlogList from '../../BlogList';

const Home = () => {
  const [ blogs, setBlogs] = useState([
    {title: "First blog", body: "first", author: "luigi", id: 1},
    {title: "Second blog", body: "second", author: "mario", id: 2},
    {title: "Third blog", body: "third", author: "mario", id: 3},
  ]);

  const [name, setName] = useState('mario');
  
  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id )
    setBlogs(newBlogs);
  }

  useEffect(() => {
    console.log('useEffect ran');
    console.log(name);
  }, [name]);
  
  return (
  <section className="home">
   <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
   <button onClick={() => setName('luigi')}>change name</button>
   <p>{ name }</p>
  </section>)
};

export default Home;
