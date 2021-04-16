import React from "react";
import { connect } from "react-redux";
import useAxios from "../../hooks/useAxios";
import { setLimit, setInterval } from "../../redux/actions";
import Button from "./Button";
import Card from "./Card";
import moment from "moment";

const Posts = (props) => {
  const { limit, startId, url, time, setLimit, setInterval } = props;

  const { isLoading, isError, data: feed } = useAxios(
    `${url}?limit=${limit}&?start_id=${startId}`,
    limit,
    time
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="feed__posts">
      <div className="feed__controls">
        <div>
          <p>Post to view</p>
          {limit > 1 ? (
            <Button control onClick={() => setLimit(limit - 1)}>
              -
            </Button>
          ) : null}
          <span>{limit}</span>
          {limit < 16 ? (
            <Button control onClick={() => setLimit(limit + 1)}>
              +
            </Button>
          ) : null}
        </div>
        <div>
          <p>Update interval</p>
          {time > 0.5 ? (
            <Button control onClick={() => setInterval(time - 0.5)}>
              -
            </Button>
          ) : null}
          <span>{time}</span>
          {time < 31 ? (
            <Button control onClick={() => setInterval(time + 0.5)}>
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
              Posted: {moment(post.created_at,).format("DD/MM/YYYY HH: MM")}
            </span>
          </div>
        ))}
      {isError && <div>Error fetching data.</div>}
    </div>
  );
};

const mapStateToProps = (state) => ({
  url: state.url,
  time: state.time,
  limit: state.limit,
  startId: state.startId,
});

const mapDispatchToProps = {
  setLimit,
  setInterval,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
