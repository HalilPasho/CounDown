import React from 'react';
import './Header.css';

interface Props {
  title: string;
  subTitle: string;
}

const Header: React.FC<Props> = ({ title, subTitle }) => {
  return (
    <React.Fragment>
      <div className="title">{title}</div>
      <div className="sub-title">{subTitle}</div>
    </React.Fragment>
  );
};

export default Header;
