import Footer from '../Footer/Footer';
import Avatar from '../Avatar/Avatar'; 
import Header from '../Header/Header';
import React, { ReactNode } from 'react';
import BlackHole from '../Blackhole/Blackhole';
import { HomeStyled } from '../../theme/Theme';
import DashboardProjects from '../Dashboards/Dashboard';

import userAvatar from '../../theme/assets/ipablo.dev.webp';

export interface HomeProps {
  rightContent?: ReactNode;
}

export const Home: React.FC<HomeProps> = ({ rightContent }) => {

  return (
    <HomeStyled>
      <BlackHole />
      <Header />
      <Avatar src={userAvatar} alt="User Avatar" size="200px" />
      <DashboardProjects />
      {rightContent}
      <Footer />
    </HomeStyled>
  );
};

export default Home;
