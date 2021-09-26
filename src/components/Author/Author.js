import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './Author.css';

const Author = props => {
  // console.log(props.committe);
  const { Name, img, Born, Died, Books, family, Wealth } = props.committe;
  const favouriteIcon = (
    <FontAwesomeIcon className="favourite-color" icon={faHeart} />
  );

  return (
    <div class="card text-center single-card">
      <div class="card-body">
        <img class="rounded-circle" width="50%" src={img} alt="" />
        <div className="body-container">
          <h5 class="card-title fw-semibold">
            Author : <span className="color">{Name}</span>
          </h5>
          <p class="card-text">Born : {Born}</p>
          <p class="card-text">Family : {family}</p>
          <p class="card-text">Died : {Died}</p>
          <h5>
            Books : <span className="color">{Books}</span>
          </h5>
          <h4>
            Wealth: <span className="color"> ${Wealth}</span>
          </h4>
        </div>
        <button
          onClick={() => props.handleFavoriteButton(props.committe)}
          class="btn btn-info  button-container btn-div"
        >
          {favouriteIcon} add to favorite
        </button>
      </div>
    </div>
  );
};

export default Author;
