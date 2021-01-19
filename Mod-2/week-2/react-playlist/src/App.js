import React, {Component} from 'react'
import playlist from './data.js'
console.log(playlist)



class App extends Component{
  
   state = {
     playlist: playlist,
     title: '',
     artist:'',
     time:''
   }
   
handleChange = (e) =>{
  this.setState({ [e.target.id]: e.target.value})
  // this.handleChange = this.handleChange.bind(this) // if there is arrow func you dot need to bind it
}
handleSubmit =(e)=>{
  e.preventDefault()
  const newSong = {
    title: this.state.title,
    artist : this.state.artist,
    time: this.state.time
  } 
  const newSongArray =[newSong, ...this.state.playlist.songs]
  this.setState({
    playlist:{
      created: this.state.playlist.created,
      title: this.state.playlist.title,
      songs: newSongArray
    },
    title:'',
    artist:'',
    time:''
  })


}

  render() {
    return (
      
       <div className='tunr-container'>
          <header>
              <h1> Tunr.</h1>
              <h2> For all  your playlist needs</h2>

          </header>
       
         <div className='playlist'>
           <h1>{this.state.playlist.title}</h1>
          <div className="songs">
            {this.state.playlist.songs.map((song, index) => {
              
              console.log(song);
              console.log("this", index);

              return (
                <div className="song" key={index}>
                <h1>{song.title}</h1>
                <h2>{song.artist}</h2>
                <h3>{song.time}</h3>
  
  
              </div>

               )
            })}
            




          </div>
           
          </div>
             <form onSubmit={this.handleSubmit}>
                
                 <label htmlFor="title">title</label>
                 <input type="text" value={this.state.title} onChange={this.handleChange} id='title'/>
                 <label htmlFor="artist">artist</label>
                 <input type="text" value={this.state.artist} onChange={this.handleChange} id='artist'/>
                 <label htmlFor="time">time</label>
                 <input type="text" value={this.state.time} onChange={this.handleChange} id='time'/>
                 <input type="submit" value='add new song'/>
                
     
            </form>



  </div>
     
    )
  }
}

export default App;
