import React, {useState} from "react";
import Nav from "./components/Nav";
import User from "./pages/User";

// import './App.css';
import unirest from 'unirest';


class App extends React.Component {

 sendRequest = (title) => {
   const req = unirest("GET", "https://movie-database-imdb-alternative.p.rapidapi.com/");

   req.query({
     "page": "1",
     "r": "json",
     "s": title
   });

   req.headers({
     "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
     "x-rapidapi-key": "0562f14bedmshc9dfe180b634C2ep1e3e26jsndc541bcbe2ba"
   });


   req.end((res) => {
     if (res.error) throw new Error(res.error);

     console.log(res.body);
   });
 }

 render() {
   return (
     <div className="App">
       <Nav/>
       <User/>

     </div>
   );
 }
}

export default App;