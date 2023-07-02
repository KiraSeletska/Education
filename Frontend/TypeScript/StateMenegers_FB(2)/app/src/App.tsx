import React from 'react';
import './App.css';
import { Header } from './Header';
import { AsideMenu } from './AsideMenu';
import { AddPost } from './AddPost';
import { PostList } from './PostsList';
import { PostContainer } from './Posts';

export const getRandomID = () => {
  const min = 0;
  const max = 1679615;
  const int = Math.floor(Math.random() * (max - min + 1)) + min;
  return int.toString(36);
};

function App() {
  return (
    <div className="App">
      <div className='header'><Header /></div>
<div className='aside'><AsideMenu/> </div>
<div className='addPost'><AddPost/> </div>
<div className='postList'>< PostContainer/></div>

    </div>
  );
}

export default App;
