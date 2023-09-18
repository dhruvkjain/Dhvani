import React from "react";
import './App.css';
import Sidebar from "./components/Sidebar";
import Searchbox from './components/Searchbox';
import Songlist from "./components/Songlist";
import Scroll from "./components/Scroll";

let alldata ;

class App extends React.Component{
  constructor(){
    super();
    this.state={searchfield:"",video:""};
  }
  searchChange=(event)=>{
    this.setState({searchfield: event.target.value});
  }
  componentDidUpdate(){
      fetch("https://saavn.me/search/songs?query="+this.state.searchfield+"&page=1&limit=2")
        .then (response=>{
            return response.json();
        })
        .then(data=>{
            console.log(data);
            // console.log("https://saavn.me/search/songs?query="+this.state.searchfield+"&page=1&limit=2");
            // this.setState({songname :data.data.results[0].name});
            // this.setState({artist :data.data.results[0].primaryArtists});
            // this.setState({link :data.data.results[0].downloadUrl[4].link});
            if(data.data.results != null){
              alldata = [data.data.results];
            }
        })
  }

  changeScene=(event)=>{
    this.setState({video:event.target.innerHTML+".mp4"});
    console.log(this.state.video);
  }

  render(){
    return(
      <div className="bg">
        <div className="navbar">
        <Sidebar />
        </div>
        <div className="content">
            <video src={this.state.video} className="video" poster="wallpaper.jpg" autoPlay loop muted>
            </video>
            <div className="scenes">
              <button onClick={this.changeScene}>DARKSTREET</button>
              <button onClick={this.changeScene}>QUIET</button>
              <button onClick={this.changeScene}>STUDY SESSION</button>
              <button onClick={this.changeScene}>TRAIN</button>
              <button onClick={this.changeScene}>WHITE OAK</button>
            </div>
          <Searchbox change={this.searchChange}/>
          <Scroll>
            {alldata != null && 
              <Songlist display={alldata}/>
            }
          </Scroll>
        </div>
      </div>
    )
    
  }
}
export default App;

