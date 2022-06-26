import { connect } from 'react-redux';
import PrivateRoute from './privateRoute';
import { IAppState } from '../../store/types';

const mapStateToPros = (state: IAppState) => ({
  isAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToPros)(PrivateRoute);
