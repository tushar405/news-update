import React from 'react';
import './Card.css';

const Card = ({ data }) => {
  console.log(data);

  const readMore = (url) => {
    window.open(url, '_blank'); // safer to open in new tab
  };

  return (
    <div className='card-container'>
      {data
        .filter((currData) => currData.urlToImage)
        .map((currData, index) => (
          <div className="card" key={index}>
            <img src={currData.urlToImage} alt={currData.title || "news image"} />
            <div className="content">
              <a onClick={() => readMore(currData.url)} className='title'>
                {currData.title ? currData.title.slice(0, 70) + "..." : ""}
              </a>
              <p className='description'>
                {currData.description ? currData.description.slice(0, 95) + "..." : ""}
              </p>
              <button onClick={() => readMore(currData.url)}>Read More</button>
            </div>
          </div>
      ))}
    </div>
  );
};

export default Card;
