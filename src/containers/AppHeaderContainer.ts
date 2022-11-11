import { connect } from 'react-redux';

import AppHeader from '../components/AppHeader';
import { userSignOut } from '../modules/AuthModule/store/actions';

const mapStateToProps = (state: any) => {
  return {
    // token: getAuthToken(),
    user: state.user,
  };
};

const mapDispatchToProps = {
  logout: userSignOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
