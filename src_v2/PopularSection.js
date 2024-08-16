import React from 'react';
import PopularCard from './PopularCard'; 
import PublisherLogo1 from '../images/publisher1.png'; 
import PublisherLogo2 from '../images/publisher2.png'; 
import PublisherLogo3 from '../images/publisher3.png'; 

const SECTION_DATA = {
  region: [
    {
      url: 'https://www.google.com',
      urlToImage:PublisherLogo1,
      title: "Tantv",
      content: "Our mission is to organize the world’s information and make it universally accessible and useful.",
    },
    {
      url: 'https://www.starbucks.com/',
      urlToImage: PublisherLogo2,
      title: "The Scanner",
      content: "Download the app for half  during your first week.* ",
    },
    {
      url: 'https://www.google.com',
      urlToImage: PublisherLogo3,
      title: "Upscale",
      content: "Google is well known",
    }
  ],
  publishers: [
    {
      url: 'https://www.starbucks.com/',
      urlToImage:PublisherLogo1,
      title: "Tantv",
      content: "Download the app for half  during your first week.* ",
    },
    {
      url: 'https://www.google.com',
      urlToImage:PublisherLogo2,
      title: "The Scanner",
      content: "Google is well known",
    },
    {
      url: 'https://www.google.com',
      urlToImage: PublisherLogo3,
      title: "Upscale",
      content: "Google is well known",
    }
  ],
  creators: [
    {
      url: 'https://www.google.com',
      urlToImage: PublisherLogo1,
      title: "Tantv",
      content: "Google is well known",
    },
    {
      url: 'https://www.google.com',
      urlToImage:PublisherLogo2,
      title: "The Scanner",
      content: "Google is well known",
    },
    {
      url: 'https://www.starbucks.com/',
      urlToImage: PublisherLogo3,
      title: "Upscale",
      content: "Download the app for half  during your first week. ",
    },
  ],
};

export function PopularSection(props) {
  const getCardsForSection = (section) => {
    return (
      <div className="box" key={section}>
        
        {SECTION_DATA[section].map((e, i) => (
          <PopularCard 
            key={i}
            url={e.url}
            urlToImage={e.urlToImage}
            title={e.title}
            content={e.content}
            index={i}
          />
        ))}
      </div>
    );
  };

  return (
    <div>
      <h1>{props.section.toUpperCase()}</h1>
      <div>{getCardsForSection(props.section)}</div>
    </div>
  );
}

export default PopularSection;
