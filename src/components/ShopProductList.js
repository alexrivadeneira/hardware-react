 import React, {Component} from 'react';

 import ShopProduct from './ShopProduct';

  class ShopProductList extends Component {
    render() {
      const productList = this.props.productList;

      const shopProductComponents = productList.map((product, index) => {
        return <ShopProduct
            productName={product.productName}
            description={product.description}
            price={product.price}
            key={index}
            index={index}
            />;
      });	

      return (
          <div>
            { shopProductComponents }
          </div>
      );

    }
  }

  export default ShopProductList;