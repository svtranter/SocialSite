import React, { useState } from "react";
import "./App.scss";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import * as Icon from "react-bootstrap-icons";

function Timeline(props) {
  // do something with the post obj passed in
  const likeHandler = (e) => {
    const { id, username, postText, likes } = e;
    props.updateLikes({ id, username, postText, likes: likes + 1 });
  };

  const buildPosts = () => {
    console.log(props.posts);
    return props.posts.map((current, v) => (
      <Card key={v}>
        <Card.Title id="username">{current.username}</Card.Title>
        <Card.Body>{current.postText}</Card.Body>
        
        <Card.Footer className="text-end">
          This post has {current.likes} likes!
          <Button
            // added onclick, and pass in the current post as an argument
            onClick={() => likeHandler(current)}
            variant="primary"
            id="like-button"
          >
            <Icon.HandThumbsUp /> Like
          </Button>
        </Card.Footer>
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
