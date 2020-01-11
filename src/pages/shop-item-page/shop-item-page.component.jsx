import React from 'react';

const ShopItemPage = props => {
  const { title, items } = props.location.state;

  return (
    <div className="collection-preview">
      <h1 className="item-url">{title.toUpperCase()}</h1>
      <div className="preview">
        {items.length > 0 ? (
          items.map(item => (
            <div key={item.id} className="menu-items">
              <img src={item.imageUrl} alt={item.name} />
              <div className="content">
                <h1 className="title">{item.name}</h1>
                <span className="offer">{item.price}</span>
                <button
                  className="subtitle"
                  type="button"
                  /* Take to detail product Page */
                  // onClick={() => history.push(`${match.url}shop/${linkUrl}`)}
                >
                  Shop Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <h1>No Data </h1>
        )}
      </div>
    </div>
  );
};

export default ShopItemPage;
