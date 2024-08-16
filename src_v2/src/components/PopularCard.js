import React from 'react';

export function PopularCard(props) {
  return (
    <div key={props.index}>
      <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '10px', width: '350px' }}>
        <div>
          <img src={props.urlToImage} alt={props.title} style={{ width: '40%', borderRadius: '8px 8px 0 0', height: '60px' }} />
          <button className="custom">Follow</button>
        </div>
        <h2 style={{ fontSize: '16px' }}>{props.title}</h2>
        <p>{props.content}</p>
        <a href={props.url} target="_blank" rel="noopener noreferrer">Read more</a>
      </div>
    </div>
  );
}

export default PopularCard;
