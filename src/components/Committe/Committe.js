import React, { useEffect, useState } from 'react';
import Author from '../Author/Author';
import Favourite from '../Favourite/Favourite';
import './Committe.css';

const Committe = () => {
  // state declaration
  const [committes, setCommittes] = useState([]);
  const [favourite, setFavourite] = useState([]);

  useEffect(() => {
    fetch('./fakeDb.json')
      .then(res => res.json())
      .then(data => setCommittes(data));
  }, []);

  // Button handler function

  const handleFavoriteButton = committe => {
    const newCount = [...favourite, committe];
    setFavourite(newCount);
  };

  return (
    <div className="ms-3 committe-container">
      <div className="author-container">
        {committes.map(committe => (
          <Author
            key={committe.id}
            committe={committe}
            handleFavoriteButton={handleFavoriteButton}
          ></Author>
        ))}
      </div>
      <div className="cart-container">
        <h3 className="cart-header">
          Favourite Added:{' '}
          <span className="favourite-count">{favourite.length}</span>
        </h3>
        <Favourite favourite={favourite}></Favourite>
      </div>
    </div>
  );
};

export default Committe;
