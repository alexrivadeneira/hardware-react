import React, {Component} from 'react';
import ProductList from './ProductList.js';
import ShopProductList from './ShopProductList.js';

class ShopView extends Component {
render() {
  return (
      <div>
        <h1>Shop View</h1>
        <h2>Products</h2>
        
        <ShopProductList 
        productList={this.props.productList}/>

        // show our list of products here
        <h2>Create a New Product</h2>
      </div>
  );
}
}

export default ShopView;