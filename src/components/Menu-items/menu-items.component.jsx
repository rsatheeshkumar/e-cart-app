import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-items.styles.scss';

const MenuItems = props => {
  const { title, offer, imageUrl, match, history, linkUrl } = props;
  return (
    <div className="menu-items">
      <img src={imageUrl} alt="new" />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="offer">{offer}</span>
        <button
          className="subtitle"
          type="button"
          onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};
export default withRouter(MenuItems);
