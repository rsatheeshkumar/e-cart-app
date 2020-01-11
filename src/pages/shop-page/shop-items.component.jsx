import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

/* DATA from store */
import DATA from '../../store/data';

class ShopItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: DATA
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-items">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
export default ShopItem;
