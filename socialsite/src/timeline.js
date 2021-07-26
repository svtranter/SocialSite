import React, { useState } from "react";
import "./App.scss";
import Card from "react-bootstrap/Card";

function Timeline(props) {
  const [state, cState] = useState([
    { username: "Vic", postText: "Hello everyone", likes: 2 },
    { username: "Robert", postText: "Hello Vic", likes: 1 },
  ]);

  const buildPosts = () => {
    return props.posts.map((current, v) => (
      <Card key={v}>
        <Card.Title>{current.username}</Card.Title>
        <Card.Body>{current.postText}</Card.Body>
        <Card.Footer>This post has {current.likes} likes!</Card.Footer>
      </Card>
    ));
  };
  

  return (
    <>
      <div className="timelineContainer">{buildPosts()}</div>
    </>
  );
}
export default Timeline;
