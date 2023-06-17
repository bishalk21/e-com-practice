import React from "react";
import "./newsletter.styles.css";

const NewsLetter = () => {
  return (
    <div className="news">
      <div className="news-text">
        <h2>Newsletter</h2>
      </div>
      <form action="">
        <input type="email" placeholder="your@email.com" />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default NewsLetter;
