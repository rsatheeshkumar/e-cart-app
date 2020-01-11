import React from 'react';
import './directory.styles.scss';
import MenuItems from '../Menu-items/menu-items.component';

/* DATA from store */
import DATA from '../../store/data';

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: DATA
    };
  }

  render() {
    const { sections } = this.state;
    return (
      <div className="directory-menu">
        {sections.map(({ id, title, offer, imageUrl, linkUrl, items }) => (
          <MenuItems
            key={id}
            title={title}
            offer={offer}
            imageUrl={imageUrl}
            items={items}
            linkUrl={linkUrl}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
