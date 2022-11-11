import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Page404 from '../../components/error-pages';
import LayoutApp from '../../components/Layout';
import Notify from '../../components/notify';
import BaseViewPage from '../BaseView';
import { DashboardItem } from '../../modules/DashboardModule/components/DashboardItem/DashboardItem';
import { Dashboard } from '../../modules/DashboardModule/components/Dashboard/Dashboard';

export const RootComponent: FC<any> = props => {

  return (
    <>
      <Routes>
        <Route element={<LayoutApp />}>
            <Route
              path={'dashboard/*'}
              element={<BaseViewPage component={Dashboard} item={DashboardItem} />}
            />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
      <Notify />
    </>
  );
};

const mapStateToProps = () => {
  return {};
};


export const Root = connect(mapStateToProps)(RootComponent);
