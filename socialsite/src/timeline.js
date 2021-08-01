import React, { useState } from "react";
import "./App.scss";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import * as Icon from 'react-bootstrap-icons';

function Timeline(props) {
  const [state, cState] = useState([
    { username: "Vic", postText: "Hello everyone", likes: 2 },
    { username: "Robert", postText: "Hello Vic", likes: 1 },
  ]);

  const buildPosts = () => {
    return props.posts.map((current, v) => (
      <Card key={v}>
        <Card.Title id="username">{current.username}</Card.Title>
        <Card.Body>{current.postText}</Card.Body>
        <Card.Footer className="text-end">This post has {current.likes} likes! <Button variant="primary" id="like-button"><Icon.HandThumbsUp /> Like</Button></Card.Footer>
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
