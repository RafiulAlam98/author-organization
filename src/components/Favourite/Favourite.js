import React from 'react';
import './Favourite.css';

const Favourite = props => {
  const { favourite } = props;
  console.log(favourite);
  let total = 0;
  for (const author of favourite) {
    total += author.Wealth;
  }

  return (
    <div>
      <h3 className="cart-total">
        Total Welfare: <span className="welfare">{total}</span>
      </h3>
      {favourite.map(author => (
        <div class="card mb-3 ms-2 me-2 single-cart">
          <h4 className="author-name">{author.Name}</h4>
        </div>
      ))}
    </div>
  );
};

export default Favourite;
