import React from "react";
import useAxios from "../../hooks/useAxios";
import Card from "./Card";

const Posts = () => {
  const { isLoading, isError, data: feed } = useAxios(
    "https://api.massrelevance.com/MassRelDemo/kindle.json"
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="feed__posts">
      <div className="feed__controls"></div>
      {feed &&
        feed.map((post) => (
          <div className="article" key={post.id}>
            <Card >
              <p className="article__text">{post.text}</p>
              <span className="article__author">{post.user.name}</span>
            </Card>
            <span className="article__date">Posted: {post.created_at}</span>
          </div>
        ))}
      {isError && <div>Error fetching data.</div>}
    </div>
  );
};

export default Posts;
