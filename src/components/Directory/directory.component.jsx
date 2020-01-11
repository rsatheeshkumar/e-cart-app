import React from 'react';
import './directory.styles.scss';
import MenuItems from '../Menu-items/menu-items.component';

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: 'clothing',
          offer: 'only few left 50% off',
          imageUrl:
            'https://rukminim1.flixcart.com/image/200/200/j1pbc7k0/container/n/p/k/21-pccspb-mastercook-original-imaet8fqkyvrj3wq.jpeg?q=70',
          id: 1,
          linkUrl: 'shop-clothing'
        },
        {
          title: 'earphone',
          offer: 'on20% off',
          imageUrl:
            'https://rukminim1.flixcart.com/image/200/200/k19lvgw0/kurta/y/6/z/xxl-banjara-2317-nay-alena-original-imafkvwz6cfgyazn.jpeg?q=70',
          id: 2,
          linkUrl: 'shop-earphone '
        },
        {
          title: 'note',
          offer: '10% off buy @ 200rs',
          imageUrl:
            'https://rukminim1.flixcart.com/image/200/200/jzk5xu80/bedsheet/x/z/5/cotton-king-double-bed-ludo-shade-1-bedsheet-2-pillow-cover-original-imafeyzemekvnabv.jpeg?q=70',
          id: 3,
          linkUrl: 'shop-note'
        },
        {
          title: 'pen',
          offer: 'only few left 70% off',
          imageUrl:
            'https://rukminim1.flixcart.com/image/200/200/jz05rww0/headphone/p/m/h/boat-rockerz-400-super-extra-bass-original-imafg95ztgz7z8yz.jpeg?q=70',
          id: 4,
          linkUrl: 'shop-pen '
        },
        {
          title: 'tv',
          offer: 'Nill',
          imageUrl:
            'https://rukminim1.flixcart.com/image/200/200/screen-expander-phone/e/b/f/goshot-mobile-magnifying-glass-f2-sharnamemall-original-imaehquaydrry8ud.jpeg?q=70',
          id: 5,
          linkUrl: 'shop-tv '
        },
        {
          title: 'laptop',
          offer: ' 50% off',
          imageUrl:
            'https://rukminim1.flixcart.com/image/200/200/jziqhzk0/shoe/6/c/e/skypy51cblkred-boost06cnavy-6-asian-multicolor-original-imaffzpy5umhqctw.jpeg?q=70',
          id: 6,
          linkUrl: 'shop-laptop'
        },
        {
          title: 'mobile',
          offer: 'only few left 50% off',
          imageUrl:
            'https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/timer_931251.svg',
          id: 7,
          linkUrl: 'shop-mobile'
        },
        {
          title: 'charger',
          offer: 'Extra 40-50% offer!',
          imageUrl:
            'https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_b13a8b.png',
          id: 8,
          linkUrl: 'shop-charger'
        },
        {
          title: 'shoe',
          offer: '90% off',
          imageUrl:
            'https://rukminim1.flixcart.com/image/200/200/jly1wnk0/shampoo/c/f/2/675-smooth-silky-shampoo-head-shoulders-original-imaf8yzyczx7sy5h.jpeg?q=70',

          id: 9,
          linkUrl: 'shop-shoe '
        }
      ]
    };
  }

  render() {
    const { sections } = this.state;
    return (
      <div className="directory-menu">
        {sections.map(({ id, title, offer, imageUrl, linkUrl }) => (
          <MenuItems
            key={id}
            title={title}
            offer={offer}
            imageUrl={imageUrl}
            linkUrl={linkUrl}
          />
        ))}
      </div>
    );
  }
}

export default Directory;

const imgurl = [
  'https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_4ee2f9.png',
  'https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_b13a8b.png',
  'https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/timer_931251.svg',
  'https://rukminim1.flixcart.com/image/200/200/jziqhzk0/shoe/6/c/e/skypy51cblkred-boost06cnavy-6-asian-multicolor-original-imaffzpy5umhqctw.jpeg?q=70',
  'https://rukminim1.flixcart.com/image/200/200/screen-expander-phone/e/b/f/goshot-mobile-magnifying-glass-f2-sharnamemall-original-imaehquaydrry8ud.jpeg?q=70',
  'https://rukminim1.flixcart.com/image/200/200/jz05rww0/headphone/p/m/h/boat-rockerz-400-super-extra-bass-original-imafg95ztgz7z8yz.jpeg?q=70',
  'https://rukminim1.flixcart.com/image/200/200/jzk5xu80/bedsheet/x/z/5/cotton-king-double-bed-ludo-shade-1-bedsheet-2-pillow-cover-original-imafeyzemekvnabv.jpeg?q=70',
  'https://rukminim1.flixcart.com/image/200/200/k4ss2a80/jacket/a/x/y/m-39238-fk-breil-by-fort-collins-original-imafnmexwhymyatr.jpeg?q=70',
  'https://rukminim1.flixcart.com/image/200/200/k19lvgw0/kurta/y/6/z/xxl-banjara-2317-nay-alena-original-imafkvwz6cfgyazn.jpeg?q=70',
  'https://rukminim1.flixcart.com/image/200/200/juvjzbk0/table-lamp/q/b/y/6w-deco-d940665-wipro-original-imaffuf2pp2ma9z9.jpeg?q=70',
  'https://rukminim1.flixcart.com/image/200/200/j2kr0y80/shoe/u/f/e/string-8-lotto-black-red-original-imaetwjgc9qchg2z.jpeg?q=70',
  'https://rukminim1.flixcart.com/image/200/200/k0wqwsw0/iron/a/n/k/four-star-qx-2019-original-imafkh7zh396ycpf.jpeg?q=70',
  'https://rukminim1.flixcart.com/image/200/200/jtd98y80/shoe/b/w/b/vchailtan3101-4-essence-tan-original-imaf7txfrctjp5vf.jpeg?q=70',
  'https://rukminim1.flixcart.com/image/200/200/jly1wnk0/shampoo/c/f/2/675-smooth-silky-shampoo-head-shoulders-original-imaf8yzyczx7sy5h.jpeg?q=70',
  'https://rukminim1.flixcart.com/image/200/200/j1pbc7k0/container/n/p/k/21-pccspb-mastercook-original-imaet8fqkyvrj3wq.jpeg?q=70'
];
