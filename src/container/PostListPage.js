import React from 'react';

const PostListPage = (props) => {
  return (
    <>
      {props.loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          {props.data.map((d) => (
            <div key={d.data.author_fullname}>
              <h1>Sub Redit Title: {d.data.subreddit}</h1>
              <img src={d.data.thumbnail} alt="thumbail" />
              <hr />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default PostListPage;
