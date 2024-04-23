import React from 'react';
import ReactDOM from 'react-dom/client';

//all page 
import MenuNav from './SectionPage/MenuNav/index.js'
import Banner from './SectionPage/banner/index.js'
import Headline from './SectionPage/headline/index.js'
import ThreeOptions from './SectionPage/3options/index.js';
import MakeyouDownload from './SectionPage/downloadPage/index.js';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MenuNav />
    <Banner />
    <Headline />
    <ThreeOptions />
    <MakeyouDownload/>

  </React.StrictMode>
);


