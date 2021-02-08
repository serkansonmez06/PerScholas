

class Player extends React.Component {  // inheritated Player class from React. component. component inside main(App) component
    render() {
      return (
        <div className={this.props.class}>
          <h2 className={this.props.class}>
            Player {this.props.class}</h2>
          <h3>Wins: </h3>
        </div>
      );
    }
  }
  class Board extends React.Component { //component inside main(App) component
    render() {// we need to create 9 components inside the Board component. 
      return (
        <div className="board">
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
        </div>
      );
    }
  }
  class Square extends React.Component { // extend 9 components 
    render() {
      return (
        <div>
          <h4>square</h4>
        </div>
      );
    }
  }
  class Header extends React.Component { // inheritated Header from React component which is App component
    render() {
      return <h1>React Tac Toe</h1>;
    }
  }
  class App extends React.Component {   //-1 created a App class and extends from react
    render() { // in this way we created our first component in React and render it
      return (  
         <div> 
          <Header />  
          <Player class="O" /> 
          <Player class="X" />
          <Board />
        </div>
      ); // created four component inside Main component - Header, Player O, Player X, Board
    }
  }
  ReactDOM.render(<App />, document.querySelector('.container')); // rendered our first and Main component in React

  //There is a main component which is App component. App component has 4 sub components
  //one of the these 4 sub component has 9 sub components.

  // React components tree will look like this
  //1. App 
  //    1.1 Header 
  //    1.2 Player
  //    1.3 Player
  //`   1.4 Board
  //        1.4.1 Square
  //        1.4.2 Square
  //        1.4.3 Square
  //        1.4.4 Square
  //        1.4.5 Square
  //        1.4.6 Square
  //        1.4.7 Square
  //        1.4.8 Square
  //        1.4.9 Square
