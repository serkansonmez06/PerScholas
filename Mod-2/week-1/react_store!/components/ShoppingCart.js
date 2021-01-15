class ShoppingCart extends React.Component {
    render () { // shopping cart component
      return (
        <li>{this.props.product.name }  {this.props.product.price}</li> // will have product name and price
      )
    }
  }