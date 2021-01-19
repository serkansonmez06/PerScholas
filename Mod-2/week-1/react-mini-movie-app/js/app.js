console.log("test");



class App extends React.Component { // render App component
       state = {
           baseURL : 'http://www.omdbapi.com/?',
           apikey : 'apikey='+'', // apikey must be unique 
           query : '&t=',
           movieTitle : '',
           searchURL : '',
           movie: {},
       }

       handleChange = (event)=>{ 
           this.setState({ [event.target.id]: event.target.value}) // it gets input value
       }

       handleSubmit = (event) => { // it prevents keep refreshing react! 
           event.preventDefault()
           this.setState({
               searchURL: this.state.baseURL + this.state.apikey + this.state.query +this.state.movieTitle //react to make full request
           },// searchURL will get baseurl + apikey(uniqe) +query(&t=) + title of movie that we want to get info
           ()=> {

            fetch(this.state.searchURL) // is a function and takes only one argument. must be object
            .then(response =>  response.json())//takes two callback function
            .then(json =>{  // response and json are parameters
                // console.log(json)
                this.setState({
                movie: json,   // gets json file
                movieTitle:'' //// it keeps input empty for user
            }),
            ()=> console.log(err)
            })
           
           
             
           }
           )
       }


    render () {
        return (
       <div>
            <form onSubmit={this.handleSubmit}> { /* this will handle submit function  */}
             <label htmlFor="movieTitle"> Title</label>
             <input 
                id='movieTitle'
                type='text'
                value ={this.state.movieTitle} /*value must be movie title*/
                onChange={this.handleChange} /*prevents refreshing page */
             
             />

             <input 
             type='submit'
             value='Find Movie Info'
             
             />

            </form>


{/* <a href="{this.state.searchURL}">{this.state.searchURL}</a> */} {/*this will help us to see json on webpage */}
              
              {this.state.movie ?  <MovieInfo movie={this.state.movie}/> :""}
           


            </div>
        )
    }
}



class MovieInfo extends React.Component{
    render() {

        return (
            <div> 
               <h1>Title: {this.props.movie.title}</h1> {/*title/year/poster/genre/plot must be start uppercase bc of json */}
               <h2>Year: {this.props.movie.Year}</h2>
               <img src={this.props.movie.Poster} alt={this.props.movie.Title}/>
               <h3>Genre: {this.props.movie.Genre}</h3>
               <h3>Plot: {this.props.movie.Plot}</h3>
               
             
            </div>
        )
    }
}
ReactDOM.render( <App /> , document.querySelector('.container'))