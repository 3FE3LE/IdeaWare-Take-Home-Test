import React from "react";
import useAxios from "../hooks/useAxios";
import Card from "./Card";

const Posts = () => {
  const { isLoading, isError, data: feed } = useAxios(
    "http://api.massrelevance.com/MassRelDemo/kindle.json"
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="feed__posts">
      {feed &&
        feed.map((post) => (
          <div className="feed__posts--content" key={post.id}>
            <Card >
              <p className="feed__posts--text">{post.text}</p>
              <span className="feed__posts--author">{post.user.name}</span>
            </Card>
            <span className="feed__posts--date">Posted: {post.created_at}</span>
          </div>
        ))}
      {isError && <div>Error fetching data.</div>}
    </div>
  );
};

export default Posts;
