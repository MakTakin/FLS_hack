import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { BrandImageContainer } from './AppHeader.styles';

export const Brand: FC = () => {
  return (
    <Link to="/">
      <BrandImageContainer>
        image
      </BrandImageContainer>
    </Link>
  );
};
