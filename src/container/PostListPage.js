import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as subRedditActions from '../redux/actions/';

const PostListPage = (props) => {
  const { getSubReddits } = props;
  useEffect(() => {
    getSubReddits();
  }, []);
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

function mapStateToProps(state) {
  return {
    loading: state.loading,
    data: state.data,
    error: state.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getSubReddits: bindActionCreators(
      subRedditActions.getSubRedditsThunk,
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostListPage);
