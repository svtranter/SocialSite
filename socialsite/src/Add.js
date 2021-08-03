import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import * as Icon from "react-bootstrap-icons";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

function Add(props) {
  const [state, cState] = useState({
    id: 0,
    username: "",
    postText: "",
    likes: 0,
  });
  toastr.options = {
    closeButton: true,
    debug: false,
    extendedTimeOut: "3000",
    hideDuration: "1000",
    hideEasing: "linear",
    hideMethod: "fadeOut",
    newestOnTop: false,
    onclick: null,
    positionClass: "toast-top-full-width",
    preventDuplicates: true,
    progressBar: true,
    showDuration: "3000",
    showEasing: "swing",
    showMethod: "fadeIn",
    timeOut: "5000",
  };
  toastr.clear();

  const handleChange = (event) => {
    const newState = { ...state };
    newState[event.target.name] = event.target.value;
    cState(newState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let newId;
    if (props.posts.length > 0) {
      newId = props.posts[props.posts.length - 1]["id"] + 1;
    } else {
      newId = 0;
    }
    
    props.onsubmit(newId, state.username, state.postText, state.likes);
    toastr.success("Successfully added post!");
    cState({
      id: newId,
      username: "",
      postText: "",
      likes: 0,
    });
  };

  return (
    <div className="container">
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            name="username"
            type="text"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>

        <Form.Group controlId="text">
          <Form.Label>What's happening...?</Form.Label>
          <Form.Control
            name="postText"
            type="text"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          <Icon.Pen /> Add Post
        </Button>
      </Form>
    </div>
  );
}

export default Add;
