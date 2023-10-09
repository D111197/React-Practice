import React from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import useHotelMenu from '../utiles/Hooks/useHotelMenu';

const Hotelmenu = () => {
  const { hotId } = useParams();
  const HotInfo = useHotelMenu(hotId);

  if (HotInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating } =
    HotInfo?.cards[0]?.card?.card?.info || {};

  const { itemCards } =
    HotInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};

  return (
    <div className='menu'>
      <h1 className='head'>{name}</h1>
      <p className='para'>
        Cuisines: {cuisines ? cuisines.join(' , ') : 'Not available'} - Cost for two: {costForTwoMessage}
        <p>Average Rating: {avgRating}</p>
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards ? (
          itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - Rs {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          ))
        ) : (
          <li>No menu items available</li>
        )}
      </ul>
    </div>
  );
};

export default Hotelmenu;
