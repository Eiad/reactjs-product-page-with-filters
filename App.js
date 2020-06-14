import React from "react";
import { products } from "./shirtsData";

export default class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0
    };
  }

  goToNext1 = () => {
    this.setState({ index: 0 % products.length });
  };
  goToNext2 = () => {
    this.setState({ index: 1 % products.length });
  };
  goToNext3 = () => {
    this.setState({ index: 2 % products.length });
  };

  render() {
    const product = products[this.state.index];
    return (
      <div>
        <div className="main-container">
          <header>
            <a className="logo">
              <img
                src="https://placehold.it/468x60/f2f2f2/000?text=LOGO"
                alt=""
              />
            </a>
            <div className="search-bar">
              <form action="">
                <input type="text" placeholder="Search..." />
                <button type="submit">
                  <i className="fa fa-search" />
                </button>
              </form>
            </div>
          </header>
          <section className="main-body">
            <div className="main-product-info">
              <img src={product.smallPicture} alt="" />

              <h4>
                {product.productTitle} <br />
                <small> by {product.brand}</small>
              </h4>
              <p>
                {product.price} {product.currency}
              </p>
            </div>
            <div className="sizes">
              <p>
                Available Sizes: <span>{product.availSize}</span> <br />
                Neck type: <span>{product.sleevType}</span>
              </p>
            </div>
            <div className="colors">
              <button className="red" onClick={this.goToNext1} />
              <button className="black" onClick={this.goToNext2} />
              <button className="grey" onClick={this.goToNext3} />
            </div>
            <button className="a2c">Add to cart</button>

            <div className="description">
              <h5>Product description</h5>
              <p>{product.descreption}</p>
            </div>

            <hr />
            <h5>Products Complement your selection</h5>

            <div className="related-products section group">
              <div className="col span_1_of_4">
                <img src={product.thumb1} alt="" />
              </div>
              <div className="col span_1_of_4">
                <img src={product.thumb2} alt="" />
              </div>
              <div className="col span_1_of_4">
                <img src={product.thumb3} alt="" />
              </div>
              <div className="col span_1_of_4">
                <img src={product.thumb4} alt="" />
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
