  import React, {Component} from 'react';
 import ProductList from './ProductList.js';
 import ProductForm from './ProductForm.js';

  class AdminView extends Component {
    render() {
      return (
          <div>
            <h1>Admin View</h1>
            <h2>Products</h2>
            
            <ProductList deleteProduct={this.props.deleteProduct}
            productList={this.props.productList}/>

            // show our list of products here
            <h2>Create a New Product</h2>
    <ProductForm addNewProductToProductList={this.props.addNewProductToProductList}/>
          </div>
      );
    }
  }

  export default AdminView;