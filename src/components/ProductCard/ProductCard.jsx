import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./ProductCard.css"

export default class ProductCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="productCard">
        <Link target="_blank" to={this.props.img}>
          <img src={this.props.img} alt="product image" />
          <h3>{this.props.title}</h3>
          <span
            style={
              this.props.offPrice
                ? { textDecoration: "line-through", color: "grey", opacity: "80%" }
                : {}
            }
          >
            {(+this.props.price).toLocaleString()} تومان
          </span>

          {this.props.offPrice && (
            <span className="off-price">{(+this.props.offPrice).toLocaleString()} تومان</span>
          )}

          {this.props.count && <strong className="count">X{this.props.count}</strong>}
        </Link>
      </div>
    )
  }
}
