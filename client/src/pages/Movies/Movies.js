import React, { useEffect, useState } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

function Movies() {
  // Setting our component's initial state
  const [movies, setMovies] = useState([])
  const [formObject, setFormObject] = useState({
    title: "",
    director: "",
    synopsis: ""
  })

  // Load all movies and store them with setMovies
  useEffect(() => {
    loadMovies()
  }, [])

  // Loads all movies and sets them to movies
  function loadMovies() {
    API.getMovies()
      .then(res => 
        setMovies(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a movie from the database with a given id, then reloads movies from the db
  function deleteMovie(id) {
    API.deleteMovie(id)
      .then(res => loadMovies())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveMovie method to save the movie data
  // Then reload movies from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.director) {
      API.saveMovie({
        title: formObject.title,
        director: formObject.director,
        synopsis: formObject.synopsis
      })
        .then(() => setFormObject({
          title: "",
          director: "",
          synopsis: ""
        }))
        .then(() => loadMovies())
        .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Search or Input a Movie to Watch!</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Title (required)"
                value={formObject.title}
              />
              <Input
                onChange={handleInputChange}
                name="director"
                placeholder="Director (required)"
                value={formObject.author}
              />
              <TextArea
                onChange={handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
                value={formObject.synopsis}
              />
              <FormBtn
                disabled={!(formObject.director && formObject.title)}
                onClick={handleFormSubmit}
              >
                Submit Movie
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Film Fiesta List</h1>
            </Jumbotron>
            {movies.length ? (
              <List>
                {movies.map(movie => {
                  return (
                    <ListItem key={movie._id}>
                      <a href={"/movies/" + movie._id}>
                        <strong>
                          {movie.title} by {movie.director}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => deleteMovie(movie._id)} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Movies;
