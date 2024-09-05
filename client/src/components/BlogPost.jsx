import React from "react";
import { Link } from "react-router-dom";

const BlogPost = ({ post }) => {
  //   console.log(post);
  const { title, category, description, image, date } = post;
  return (
    <li className="blog-post-item">
      <Link to={`/blog/${post.id}`}>
        <figure className="blog-banner-box">
          <img src={image} alt="blog-post-image" loading="lazy" />
        </figure>
        <div className="blog-content">
          <div className="blog-meta">
            <p className="blog-category">{category}</p>
            <span className="dot"></span>
            <time datetime={date}>{date}</time>
          </div>
          <h3 className="h3 blog-item-title">{title}</h3>
          <p className="blog-text">{description}</p>
        </div>
      </Link>
    </li>
  );
};

export default BlogPost;
