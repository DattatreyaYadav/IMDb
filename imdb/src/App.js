import React from 'react'; 
import './App.css';
import Header from './header.js';
import MovieCard from './movieCard.js';

class App extends React.Component {
  constructor(){
    super();
    this.state={
     moviedatils:[
        {
          id : 1,
          name : "starwars",
          rating:4,
          poster:"",
          details :"this is a best movie regarding space."
        },
        {
          id : 2,
          name : "bhahuballi",
          rating:4,
          poster:"",
          details :"this is a best movie regarding wars."
        },
        {
          id : 3,
          name : "hello",
          rating:4,
          poster:"",
          details :"this is a best movie regarding space."
        },
        {
          id : 4,
          name : "2.0",
          rating:4,
          poster:"",
          details :"this is a best movie regarding wars."
        }
      ]
    }
  }
  render(){
    console.log(this.state.moviedatils);
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <MovieCard />
      </header>
    </div>
  );
}
}
export default App;
