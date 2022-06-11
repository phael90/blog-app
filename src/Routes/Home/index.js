import { useState} from 'react';

let blogDatabase = [
  {title: "First glog", body: "first", author: "Luigi", id: 1},
  {title: "Second blog", body: "second", author: "Mario", id: 2},
  {title: "Third blog", body: "third", author: "Raphael", id: 3},
];
const Home = () => {
  const [ blogs, setBlog] = useState(blogDatabase);
  
  return (
  <header className="home">
    {blogs.map((blog) => (
      <div className="blog-preview" key={blog.id}>
        <h2>{ blog.title }</h2>
        <p>Written by { blog.author }</p>
      </div>
    ))}
  </header>);
};

export default Home;
