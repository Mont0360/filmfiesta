import React from "react";
import Movies from "./pages/Movies";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import User from "./pages/User";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


// The app will not render correctly until you setup a Route component.
// Refer to the Basic Example documentation if you need to.
// (https://reacttraining.com/react-router/web/example/basic)
function App() {
  return (
    <Router>
    <div>
      <Nav />
      {/* <User/> */}
      <Switch>
        <Route exact path="/" component={Movies} />
        <Route exact path="/movie" component={Movies} />
        <Route exact path="/movie/:id" component={Detail} />
        <Route exact path="/nomatch" component={NoMatch} />
        <Route exact path="/user" component={User} />
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>
  );
}

// // import './App.css';
// import unirest from 'unirest';


// class App extends React.Component {

//  sendRequest = (title) => {
//    const req = unirest("GET", "https://movie-database-imdb-alternative.p.rapidapi.com/");

//    req.query({
//      "page": "1",
//      "r": "json",
//      "s": title
//    });

//    req.headers({
//      "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
//      "x-rapidapi-key": "0562f14bedmshc9dfe180b634C2ep1e3e26jsndc541bcbe2ba"
//    });


//    req.end((res) => {
//      if (res.error) throw new Error(res.error);

//      console.log(res.body);
//    });
//  }

//  render() {
//    return (
//      <div className="App">
//        <Nav/>
//        <User/>

//      </div>
//    );
//  }
// }

export default App;