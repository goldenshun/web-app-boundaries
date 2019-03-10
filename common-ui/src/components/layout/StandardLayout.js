import React from 'react';
import TopNav from '../navigation/TopNav';

const StandardLayout = ({ children }) => (
  <div>
    <TopNav />
    <div>
      {children}
    </div>
  </div>
);

export default StandardLayout;