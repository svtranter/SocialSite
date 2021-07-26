import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "./App.scss";
import Timeline from "./timeline";
import Add from "./Add";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [postCards, cPostCards] = useState([
    { username: "Vic", postText: "Hello everyone", likes: 2 },
    { username: "Robert", postText: "Hello Vic", likes: 1 },
  ]);

  useEffect(() => {
    const postContents = localStorage.getItem("post");
    cPostCards(
      JSON.parse(postContents) || []
    )
  }, [])

  const updatePostCards = (username, postText, likes) => {
    const postCard = { username, postText, likes }
    cPostCards((state) => [...state, postCard], localStorage.setItem(
    "post",
    JSON.stringify([...postCards, postCard])))
  };

  return (
    <Router>
      <Navbar bg="primary" variant="dark" expand="md">
        <Navbar.Brand>NewFace</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to="/">
              Timeline
            </Link>
            <Link className="nav-link" to="/add">
              Add
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container>
        <Switch>
          <Route exact path="/">
            <Timeline posts={postCards} />
          </Route>
          <Route path="/add">
            <Add onsubmit={(username, postText, likes) =>
          updatePostCards(username, postText, likes)} />
          </Route>
          <Route path="/">
            Error: 404 not found
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}
export default App;
