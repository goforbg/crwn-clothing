import React from 'react';

import DirectoryMenu from './../../components/directory/directory.component';

import { HomePageContainer } from './homepage.styles';

// import './homepage.styles.scss';

const HomePage = () => {
   return (
      <HomePageContainer>
         <DirectoryMenu />
      </HomePageContainer>
   );
};

export default HomePage;
