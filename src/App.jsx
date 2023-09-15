import React from "react";
import './App.css';
import Sidebar from "./components/Sidebar";
import Searchbox from './components/Searchbox';
import Song from "./components/Song";

let name , artist , link;

class App extends React.Component{
  constructor(){
    super();
    this.state={searchfield:"",songname:"",artist:"",link:""};
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
            name = data.data.results[0].name ;
            artist = data.data.results[0].primaryArtists ;
            link = data.data.results[0].downloadUrl[4].link ;
        })
  }


  render(){
    return(
      <div className="bg">
        <div className="navbar">
        <Sidebar />
        </div>
        <div className="content">
          <Searchbox change={this.searchChange}/>
          <Song displayname={name} displayartist={artist} displaylink={link}/>
        </div>
      </div>
    )
  }
}
export default App;

