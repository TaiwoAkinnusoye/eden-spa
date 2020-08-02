import React from 'react';
import Header from './components/header/Header';
// import Postlist from './components/PostList/PostList';
import PostListPage from './container/PostListPage';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
        <PostListPage />
      </div>
    </div>
  );
}

export default App;
