import React from 'react';

class MovieCard extends React.Component{
 constructor(){
     super();
     this.state={
         moviedata:[
             {
         name:"starwars",
         rating:4,
         poster:"",
         details:"this is a good movie related to space.",
             }
         ]
     }
 }
 render(){
     const {moviedata}=this.state;
     const {name,rating,poster,details}=moviedata[0];
     return (
         <div>
           <h2>{name}</h2>
           <h2>{rating}</h2>
           <img src={poster} alt="image"/>
           <h3>{details}</h3>
         </div>
     )
 }

}
export default MovieCard;