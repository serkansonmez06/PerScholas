console.table(products);// print data in table
class App extends React.Component{
                state={
                    products : products,
                    name    : '',
                    price   :0,
                    description : 'Describe this item'
}

handleChange = (e) => { // this function will get input value with onChange(same as onclick) 
    console.log(e.target.value);
    this.setState({ [e.target.id]: e.target.value})
     //setState that this component and its children need to be re-rendered with the updated state.
}
handleSubmit = (e) =>{ // prevent the default with this function. item will stay 
    e.preventDefault()

    const newItem = {
        name :this.state.name,
        price :this.state.price,
        description: this.state.description
    }
    this.setState({
        products: [newItem, ...this.state.products],
        name: '',
        price:0,
        description: 'Describe this item'
    }) 
}
    render () {
        return ( // we call onSubmit function on form
            <div>
           
                <h1>Big Time Shopping</h1>

                
                <form onSubmit={this.handleSubmit}>  

                <label htmlFor="name">Name </label>
                <input 
                type="text" 
                value={this.state.name}
                onChange={this.handleChange}
                id="name"
                placeholder='name of the product'
                />
                <br/>

                <label htmlFor="price"> Price </label>
                <input 
                type="number" 
                value={this.state.price}
                onChange={this.handleChange}
                id="price"
                />
                 <br/>

                <label htmlFor="description">Description</label>
                <input 
                type="text" 
                value={this.state.value}
                onChange={this.handleChange}
                id="description"
                />
                 <br/>
                 <input type="submit"/>
                 </form> 
              <div>

                  <ul>
                  <h2> Preview our new Item</h2>
                  <h3>{this.state.name}</h3>
                  <h4>{this.state.price}</h4>
                  <h5>{this.state.description}</h5>
                  </ul>

              </div>

                <ul>
                    {this.state.products.map(product =>{return(
                    <li> {product.name} {product.price} </li>)}

                    )}
                </ul>

            </div>
        )
    }
}

ReactDOM.render(<App/>,
    document.querySelector('.container'))
    

    //{this.state.products.map(product => <li>{product.name}</li>)}
    // how to map object. map functio will iterate over every item, 
    // manipulate it in some way and return the new array