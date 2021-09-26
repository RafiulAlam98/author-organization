import React, { useEffect, useState } from 'react';
import Author from '../Author/Author';
import './Committe.css';

const Committe = () => {
  const [committes, setCommittes] = useState([]);
  const [favourite, setFavourite] = useState([]);

  useEffect(() => {
    fetch('./fakeDb.json')
      .then(res => res.json())
      .then(data => setCommittes(data));
  }, []);

  const handleFavoriteButton = committe => {
    const newCount = [...favourite, committe];
    setFavourite(newCount);
  };

  return (
    <div class="row">
      <div class="col-9">
        <div class="row">
          <div class="col">
            {committes.map(committe => (
              <Author
                key={committe.id}
                committe={committe}
                handleFavoriteButton={handleFavoriteButton}
              ></Author>
            ))}
          </div>
        </div>
      </div>
      <div class="col-3">add to favourite: {favourite.length}</div>
    </div>
  );
};

export default Committe;
