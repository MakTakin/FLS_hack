import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

const BaseViewPageComponent: FC<any> = ({ component, item, location }) => {
  const Component = component;
  const ItemComponent = item;

  return (
    <Routes location={location}>
      <Route path=":id/*" element={<ItemComponent />} />
      <Route index element={<Component  />} />
    </Routes>
  );
};

const mapStateToProps = () => {
  return {};
};

export const BaseViewPage = connect(mapStateToProps)(BaseViewPageComponent);
