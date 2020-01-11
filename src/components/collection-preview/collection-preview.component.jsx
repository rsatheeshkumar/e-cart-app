import React from 'react';

const CollectionPreview = props => {
  const { items, title } = props;
  console.log(props);
  return (
    <div className="collection-preview">
      <h1>{title.toUpperCase()}</h1>
      <div className="preview">
        {items.map(item => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  );
};
export default CollectionPreview;
