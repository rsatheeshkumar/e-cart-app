import React from 'react';
import { withRouter } from 'react-router-dom';
import './collection.preview.styles.scss';

const CollectionPreview = props => {
  const { items, title, linkUrl, history, match } = props;
  // console.debug({
  //   linkUrl,
  //   title,
  //   items
  // });

  const goToShopItemPage = () => {
    history.push({
      pathname: `${match.url}/${linkUrl}`,
      state: { title, items }
    });
  };

  return (
    <div className="collection-preview">
      <h1 className="item-url" onClick={goToShopItemPage}>
        {title.toUpperCase()}
      </h1>
      <div className="preview">
        {items.map(item => (
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
        ))}
      </div>
    </div>
  );
};

export default withRouter(CollectionPreview);
