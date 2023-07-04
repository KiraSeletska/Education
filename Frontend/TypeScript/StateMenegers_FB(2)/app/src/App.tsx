import React from 'react';
import './App.css';
import { Header } from './Header';
import { AsideMenu } from './AsideMenu';
//import { AddPost } from './AddPost';
import { PostContainer } from './Posts/PostContainer';
import { AdsContainer } from './Ads/AdsList';
import { AddPostContainer } from './Posts/AddPost';

export const getRandomID = () => {
  const min = 0;
  const max = 1679615;
  const int = Math.floor(Math.random() * (max - min + 1)) + min;
  return int.toString(36);
};
export const getTime = () => {
  const timeElapsed = Date.now();
  const time = new Date(timeElapsed);
  const result = time.toLocaleDateString();
  return result
}

function App() {
  return (
    <div className="App">
      <div className='header'><Header /></div>
<div className='aside'><AsideMenu/> </div>
{/*<div className='addPost'><AddPost/> </div>*/}
<div className='addPost'><AddPostContainer /> </div>

<div className='postList'>< PostContainer/></div>
<div className='ads'><AdsContainer/></div>

    </div>
  );
}

export default App;
