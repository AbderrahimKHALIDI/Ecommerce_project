import React from 'react';
import './App.css';
import { CardList } from './component/card-lists/card-list.component';
import {SearchBox} from './component/search-box/search-box.component'
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchFild:''
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monsters: users}));
  }

  handlechange = e =>{
    this.setState({searchFild:e.target.value})
  }

  render() {
    const {monsters, searchFild}= this.state;
   const filtremonster=monsters.filter(monster=>
     monster.name.toLowerCase().includes(searchFild.toLowerCase())
    
    );
    return (
      <div className='App'>
      <h1>Monsters Rolodex</h1>
        <SearchBox
         placeholder='search box' 
        handlechange={this.handlechange}/>
        <CardList monsters={filtremonster}/>
        
        
       
      </div>
    );
  }
}

export default App;
