import React from 'react';
import './Author.css';

const Author = props => {
  console.log(props.committe);
  const { Name, img, Born, Died, Movies, family } = props.committe;

  return (
    <div className="author-container">
      <div class="card">
        <div class="card-body">
          <div>
            <img width="25%" src={img} alt="" />
          </div>
          <h4 class="card-title">Name: {Name}</h4>
          <h5>Born: {Born}</h5>
          <h5>Died: {Died}</h5>
          <p>Movies: {Movies}</p>
          <p class="card-text">family: {family}</p>
          <button
            onClick={() => props.handleFavoriteButton(props.committe)}
            class="btn btn-info button-container"
          >
            add to favorite
          </button>
        </div>
      </div>
    </div>
  );
};

export default Author;
