import React from 'react';
import Data from './Data';
import { Link } from 'react-router-dom';

const ArticleList = ({ articles }) => (
  <div className="row app">
    {Data.map((Data, key) => (
      <div className="col-12 p-3" key={key}>
        <Link to="/">
          <h1>{Data.title}</h1>
        </Link>
        <h2>{Data.description}</h2>
        <p>
          <a href="https://itch.io/">
            {Data.intro}
          </a>
        </p>
      </div>
    ))}
    {articles.map((article, key) => (
      <div className="col-md-4 p-3" key={key}>
        <a className="card p-1" href={article.imgLink} target="_blank" rel="noopener noreferrer">
          <img
            className="img-fluid card"
            alt={article.title}
            src={article.img}
          />
          <section className="card-content p-3">
            <h3>
              {article.title} <span className="cute">✏️</span>
            </h3>
            <p className="date">
              👧<a href={article.authorlink} target="_blank" rel="noopener noreferrer">{article.author}</a> ⏰{' '}
              {article.date}
            </p>
            <p>📝 {article.content[0].substring(0, 100)}...</p>
          </section>
        </a>
      </div>
    ))}
  </div>
);

export default ArticleList;
