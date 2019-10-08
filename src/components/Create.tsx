import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";

const Create = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [cover, setCover] = useState("");
  const [routeRedirect, setRedirect] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const createPostAction = () => dispatch(createPost(posts));

  const redirect = routeRedirect;
  if (redirect) {
    return <Redirect to="" />;
  }

  const addPost = (e: Event) => {
    e.preventDefault();
    console.log("form sent");
  };

  let form;

  if (loading) {
    form = (
      <div className="processing">
        <p>Request is being processed</p>
        <div className="loader">Loading...</div>
      </div>
    );
  } else {
    form = (
      <form onSubmit={addPost as any}>
        <p>Create a New Post</p>
        <label htmlFor="title">Post Title:</label>
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="content">Post Title:</label>
        <textarea
          name="content"
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        <label htmlFor="cover" className="cover">
          Cover{" "}
        </label>
        <input type="file" onChange={(e) => setCover(e.target.files)} />

        <input type="submit" value="create post" />
      </form>
    );
  }

  return <>{form}</>;
};

export default Create;
