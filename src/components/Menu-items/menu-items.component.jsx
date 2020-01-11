import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-items.styles.scss';

const MenuItems = props => {
  const { title, offer, imageUrl, match, history, linkUrl, items } = props;
  console.debug({ items });

  const goToShopItemPage = () => {
    history.push({
      pathname: `${match.url}shop/${linkUrl}`,
      state: { title, items }
    });
  };

  return (
    <div className="menu-items">
      <img src={imageUrl} alt="new" />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="offer">{offer}</span>
        <button className="subtitle" type="button" onClick={goToShopItemPage}>
          Shop Now
        </button>
      </div>
    </div>
  );
};
export default withRouter(MenuItems);
