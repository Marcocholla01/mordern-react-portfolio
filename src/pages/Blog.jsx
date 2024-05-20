import React, { useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import BlogPost from "../components/BlogPost";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(`blogs.json`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setBlogs(data);
      });
  }, []);

  return (
    <section className="blog">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>
      <div className="blog-posts">
        <ul className="blog-posts-list">
          {blogs.map((post, index) => (
            <BlogPost key={index} post={post} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Blog;
