import { connect } from 'react-redux';
import { IAppState } from '../../store/types';
import { doLogout } from '../../store/user/actions';
import { TopBar } from './topBar';

const mapStateToProps = (state: IAppState) => ({
  isAuthenticated: state.user.isAuthenticated,
});

const mapDispatchToProps = {
  doLogout,
};

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
