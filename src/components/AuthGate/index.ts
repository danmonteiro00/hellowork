import { connect } from 'react-redux';
import { IAppState } from '../../store/types';
import AuthGate from './authGate';
import { IAuthGateState } from './types';

const mapStateToProps = (state: IAppState): IAuthGateState => ({
  isUserAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps)(AuthGate);
