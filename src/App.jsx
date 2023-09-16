import React from "react";
import './App.css';
import Sidebar from "./components/Sidebar";
import Searchbox from './components/Searchbox';
import Songlist from "./components/Songlist";

let alldata ;

class App extends React.Component{
  constructor(){
    super();
    this.state={searchfield:""};
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


  render(){
    return(
      <div className="bg">
        <div className="navbar">
        <Sidebar />
        </div>
        <div className="content">
          <Searchbox change={this.searchChange}/>
          <div className="searchbtn">
          {/* <button>Search</button> */}
          </div>
          {alldata != null && 
            <Songlist display={alldata}/>
          }
        </div>
      </div>
    )
    
  }
}
export default App;

