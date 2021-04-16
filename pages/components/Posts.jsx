import React from "react";
import moment from "moment";
import { connect } from "react-redux";
import { setLimit } from "../../redux/actions";
import useAxios from "../../hooks/useAxios";
// import components
import Button from "./Button";
import Card from "./Card";

const Posts = (props) => {
  const { limit, url, setLimit } = props;

  const { isLoading, isError, data: feed } = useAxios(
    `${url}?limit=${limit}`,
    limit
  );

  
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="feed__posts">
      <div className="feed__controls">
        <div>
          <p>Articles</p>
          {limit > 1 ? (
            <Button control onClick={() => setLimit(limit - 1)}>
              -
            </Button>
          ) : null}
          <span>{limit}</span>
          {limit < 15 ? (
            <Button control onClick={() => setLimit(limit + 1)}>
              +
            </Button>
          ) : null}
        </div>
      </div>
      {feed &&
        feed.map((post) => (
          <div className="article" key={post.id}>
            <Card>
              <p className="article__text">{post.text}</p>
              <span className="article__author">{post.user.name}</span>
            </Card>
            <span className="article__date">
              Posted: {moment(post.created_at).format("DD/MM/YYYY HH: MM")}
            </span>
          </div>
        ))}
      {isError && <div>Error fetching data.</div>}
    </div>
  );
};

const mapStateToProps = (state) => ({
  url: state.url,
  limit: state.limit,
  startId: state.startId,
});

const mapDispatchToProps = {
  setLimit,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
