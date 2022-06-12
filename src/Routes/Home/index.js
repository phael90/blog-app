import { useState} from 'react';
import BlogList from '../../BlogList';

let blogDatabase = [
  {title: "First glog", body: "first", author: "Luigi", id: 1},
  {title: "Second blog", body: "second", author: "Mario", id: 2},
  {title: "Third blog", body: "third", author: "Raphael", id: 3},
];
const Home = () => {
  const [ blogs, setBlog] = useState(blogDatabase);
  
  return (
  <section className="home">
   <BlogList blogs={blogs}/>
  </section>);
};

export default Home;
