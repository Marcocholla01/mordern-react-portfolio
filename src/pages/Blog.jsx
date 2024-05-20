import React, { useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import BlogPost from "../components/BlogPost";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(4);

  useEffect(() => {
    fetch(`blogs.json`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setBlogs(data);
      });
  }, []);

  //   pagination
  const lastPost = currentPage * postPerPage;
  const firstPost = lastPost - postPerPage;
  const currentPost = blogs.slice(firstPost, lastPost);

  // change  page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <section className="blog">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>
      <div className="blog-posts">
        <ul className="blog-posts-list">
          {currentPost.map((post, index) => (
            <BlogPost key={index} post={post} />
          ))}
        </ul>
      </div>

      {/* pagination */}
      <nav>
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => paginate(currentPage - 1)}
            >
              Prevoius
            </button>
          </li>
          {Array.from(
            { length: Math.ceil(blogs.length / postPerPage) },
            (_, index) => (
              <li
                key={index}
                className={`page-item ${
                  currentPage === index + 1 ? "active" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => paginate(currentPage + 1)}
                >
                  {index + 1}
                </button>
              </li>
            )
          )}
          <li
            className={`page-item ${
              currentPage === Math.ceil(blogs.length / postPerPage)
                ? "disabled"
                : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() => paginate(currentPage + 1)}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Blog;
