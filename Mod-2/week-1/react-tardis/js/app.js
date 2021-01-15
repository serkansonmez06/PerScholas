class App extends React.Component {
    state = { // 
        tardis: { // passing object 
            name: 'Time and Relative Dimension in Space',
            caps: false
        }
    }
    changeIt = (text) => { // text is input and can be anything 
        if (this.state.tardis.caps) {
            this.setState({
                tardis: {
                    name: text.toLowerCase(), // we pass name argument inside function
                    caps: false // checking if cap is true or not 
                }
            })
        } else {
            this.setState({
                tardis: {
                    name: text.toUpperCase(),
                    caps: true
                }
            })
        }
    }
    render() {

        //    eventlistener    function(changeIt)   parameter- whatever you pass it, it will make the changes when you click 
        return (<div onClick= { () => this.changeIt(this.state.tardis.name)}> 
            <Box1 box={this.state.tardis.name}/>
        </div>)
    }
}
class Box1 extends React.Component {
    render() {
        return (
        <div className="first">
            <Box4 box={this.props.box}/> 
            <Box4 box={this.props.box}/> 
            
 
        </div>
        )
    }
}
class Box2 extends React.Component {
    render() {
        return (<div className="second">
            {/* <Box3 box={this.props.box}/> */}
        </div>)
    }
}
class Box3 extends React.Component {
    render() {
        return (<div className="third">
            {/* <Box4 box={this.props.box}/> */}
        </div>)
    }
}
class Box4 extends React.Component {
    render() {
        return (<div className="forth">
            <h3>{this.props.box}</h3>
            
        </div>)
    }
}
ReactDOM.render(<App/>, document.querySelector('.container')); //render App(main) component
