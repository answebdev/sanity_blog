import { Routes, Route } from 'react-router-dom';
import AllPosts from './components/AllPosts.js';
import OnePost from './components/OnePost.js';

// Article: https://www.sanity.io/guides/build-your-first-blog-using-react
// Code: https://github.com/sanity-io/create-react-app-blog

// React 18 Version (update index.js too)

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<AllPosts />} />
        <Route exact path='/:slug' element={<OnePost />} />
        {/* <Route path='*' element={<Error />} /> */}
      </Routes>
    </div>
  );
};

export default App;
