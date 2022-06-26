import { connect } from 'react-redux';
import { IAppState } from '../../store/types';
import { SideMenu } from './sideMenu';

const mapStateToProps = (state: IAppState) => ({
  isAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps)(SideMenu);
