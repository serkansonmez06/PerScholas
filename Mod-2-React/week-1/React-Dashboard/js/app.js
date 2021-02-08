
  class SideBar extends React.Component { 
    render() {
      return (
      <div className="SideBar">
            <h2>Dashboard</h2>
            <h4>Widget</h4>
            <h4>Reviews</h4>
            <h4>Customers</h4>
            <h4>Online Analysis</h4>
            <h4>Settings</h4>
      </div>
      )
    }
  }


  class Reviews extends React.Component { 
    render() {
      return (
        <div className="Reviews">
          <h2>Reviews</h2>
          <h4>1,281</h4>
        </div>
      );
    }
  }

  class AverageRating extends React.Component { 
    render() {
      return (
        <div className="AverageRating">
       <h2>Average Rating</h2>
       <h4>4.6</h4>
        </div>
      );
    }
  }

  class SentimentsAnalysis extends React.Component {  
    render() {
      return (
        <div className="SentimentsAnalysis">
          <h2>Sentiments Analysis</h2>
          <h4>960</h4>
          <h4>122</h4>
          <h4>321</h4>
        </div>
      );
    }
  }

  class WebsiteVisitors extends React.Component { 
    render() {
      return (
        <div className="WebsiteVisitors">
          <h2>Website Visitors</h2>
          <h4>821</h4>
          <WebsiteVisitorSubCom/>
        </div>
      );
    }
  }
  class WebsiteVisitorSubCom extends React.Component{
      render() {
          return (
               <h1 className="WebsiteVisitorSubCom"></h1>
          );
      }
  }
  class Plus extends React.Component{
    render() {
      return (
         <h1 className="plus">+</h1>
      );
    }
  }
  class App extends React.Component {   //created main component and rendered 
    render() { 
      return (  
         <div> 
          <SideBar />  
          <Reviews/> 
          <AverageRating />
          <SentimentsAnalysis />
          <WebsiteVisitors/>
          <Plus/>
        </div>
      ); 
    }
  }
  ReactDOM.render(<App />, document.querySelector('.container')); //render App(main) component