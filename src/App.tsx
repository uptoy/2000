import React from 'react';
import { User } from './User';
import { Post } from './Post';
import { PostRedux } from './features/postRedux/PostRedux';
import { Counter } from './features/counter/Coutner';

function App() {
  return (
    <div >
      <div>aaa</div>
      <User />
      <Post />
      <PostRedux />
      <Counter />
    </div>
  );
}

export default App;
